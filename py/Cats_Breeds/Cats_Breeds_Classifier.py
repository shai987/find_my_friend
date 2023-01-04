# All imports

import numpy as np 
import pandas as pd
import matplotlib.pyplot as plt
import tensorflow as tf
import keras
import os

from sklearn.model_selection import train_test_split 
from keras.utils import to_categorical 
from keras import layers
from keras.callbacks import EarlyStopping

from keras.models import Sequential 
from keras.layers import Conv2D,Add,MaxPooling2D, Dense, BatchNormalization,Input
from keras.layers import Dense, Dropout 
from keras.models import Model
from keras.optimizers import Adam
from keras.layers import Flatten, BatchNormalization
from keras.callbacks import LearningRateScheduler
from keras_preprocessing.image import ImageDataGenerator, load_img, img_to_array

import tensorflow_hub as hub
import datetime


# Create a dataset
batch_size = 32
img_height = 224
img_width = 224

train_ds = tf.keras.utils.image_dataset_from_directory(
    r"C:\Users\USER\Gano-Cat-Breeds-V1_1",
    label_mode='categorical',
    validation_split=0.2,
    subset="training",
    seed=123,
    image_size=(img_height, img_width),
    batch_size=batch_size)

val_ds = tf.keras.utils.image_dataset_from_directory(
    r"C:\Users\USER\Gano-Cat-Breeds-V1_1",
    label_mode='categorical',
    validation_split=0.2,
    subset="validation",
    seed=123,
    image_size=(img_height, img_width),
    batch_size=batch_size)

class_names = train_ds.class_names
print(class_names)

# Visualize the data
print("""t.figure(figsize=(10, 10))
for images, labels in train_ds.take(1):
  for i in range(9):
    ax = plt.subplot(3, 3, i + 1)
    plt.imshow(images[i].numpy().astype("uint8"))
    print(labels[i])
    plt.title(class_names[labels[i]==1][0].title())
    plt.axis("off")""")

for image_batch, labels_batch in train_ds:
  print(image_batch.shape)
  print(labels_batch.shape)
  break

# Configure the dataset for performance
AUTOTUNE = tf.data.AUTOTUNE

train_ds = train_ds.cache().shuffle(1000).prefetch(buffer_size=AUTOTUNE)
val_ds = val_ds.cache().prefetch(buffer_size=AUTOTUNE)

# Create the model
IMG_SIZE = (224, 224)
# Create the base model from the pre-trained model MobileNet V3
IMG_SHAPE = IMG_SIZE + (3,)
base_model = tf.keras.applications.MobileNetV3Large(input_shape=IMG_SHAPE, weights='imagenet')

base_model.trainable = False

# Shows that its frozen
print(len(base_model.trainable_variables))

# Let's take a look at the base model architecture
base_model.summary()

#setup input shape into the model
INPUT_SHAPE = [None,IMG_SIZE, IMG_SIZE, 3] #batch, height, width, colour channel

#setup output shape of our model
OUTPUT_SHAPE = len(class_names)

# Setup Layers
model = tf.keras.Sequential([
    base_model, # Layer 1 (Input Layer)
    tf.keras.layers.Dense(units=512, activation="relu"), # Hidden Layer   
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(units=256, activation="relu"), # Hidden Layer       
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(units=OUTPUT_SHAPE, activation="softmax") # Layer 4 (Output Layer)       
])

# Compiling the model
base_learning_rate = 0.0001
model.compile(
      loss=tf.keras.losses.CategoricalCrossentropy(),
      optimizer=tf.keras.optimizers.Adam(learning_rate=base_learning_rate),
      metrics =["accuracy"]
)

# Build Model
model.build(INPUT_SHAPE)
model.summary()

# Initial Run
loss0, accuracy0 = model.evaluate(val_ds)
print("initial loss: {:.2f}".format(loss0))
print("initial accuracy: {:.2f}".format(accuracy0))

def create_model_checkpoint(dir, suffix=None):
    modeldir = os.path.join(dir, "Models",
                            datetime.datetime.now().strftime("%Y_%m_%d-%H_%M_%S"))
    
    model_path = modeldir + "-" + suffix
    print(f"Model will be saved to `{model_path}`")
    return tf.keras.callbacks.ModelCheckpoint(model_path, monitor='val_accuracy',save_best_only=True)

# EPOCHS
initial_epochs = 40

# Create callback
checkpoint = create_model_checkpoint("Notebook_Outputs", "cats_classifier")
early_stopping = EarlyStopping(monitor="val_accuracy",
                                                  patience=10)

# Model Training
model_history = model.fit(train_ds,
                    epochs=initial_epochs,
                    validation_data=val_ds,
                    validation_freq=1,
                    callbacks=[early_stopping, checkpoint]
                )

# Model Learning Curves (Accuracy/Loss)
def plot_learning_curves(model_history):
    # retrieve learning metrics history 
    acc = model_history.history['accuracy']
    val_acc = model_history.history['val_accuracy']
    loss = model_history.history['loss']
    val_loss =model_history.history['val_loss']

    # Plot
    fig = plt.figure(figsize=(8,8))
    ax_acc = plt.subplot(2, 1, 1)
    plt.plot(acc, label='Training Accuracy')
    plt.plot(val_acc, label='Validation Accuracy')
    plt.legend(loc='lower right')
    plt.ylabel("Accuracy")
    plt.ylim([0.1, 1])
    plt.title("Training and Validation Accuracy",)
    
    ax_loss = plt.subplot(2, 1, 2)
    plt.plot(loss, label='Training Loss')
    plt.plot(val_loss, label='Validation Loss')
    plt.legend(loc='upper right')
    plt.ylabel('Cross Entropy Loss')
    plt.ylim([0.1,1])
    plt.title('Training and Validation Loss')
    plt.xlabel('Epoch')
    plt.show()

plot_learning_curves(model_history)

# Fine Tuning
base_model.trainable = True
# Let's take a look to see how many layers are in the base model
print("Number of layers in the base model: ", len(base_model.layers))

# Fine-tune from this layer onwards
fine_tune_at = 100

# Freeze all the layers before the `fine_tune_at` layer
for layer in base_model.layers[:fine_tune_at]:
  layer.trainable = False

model.compile(
      loss=tf.keras.losses.CategoricalCrossentropy(),
      optimizer = tf.keras.optimizers.RMSprop(learning_rate=base_learning_rate/10),
      metrics =["accuracy"]
)

model.summary()

fine_tune_epochs = 20
total_epochs =  initial_epochs + fine_tune_epochs

history_fine = model.fit(train_ds,
                         epochs=total_epochs,
                         initial_epoch=model_history.epoch[-1],
                         validation_data=val_ds,
                         callbacks=[early_stopping, checkpoint])

plot_learning_curves(history_fine)
model.save('Cats_Breeds1.h5')
label_maps = {}
label_maps_rev = {}
for i, v in enumerate(class_names):
    label_maps.update({v: i})
    label_maps_rev.update({i : v})


def download_and_predict(filename):
    
    """test_image_array = img_to_array(test_image)
    new_image = tf.expand_dims(test_image_array,0)
    predicted_batch = model.predict(new_image)
    """
    # download and save
    img = load_img(filename, target_size=(224, 224))
    # show image
    plt.figure(figsize=(4, 4))
    plt.imshow(img)
    plt.axis('off')
    # predict
    #img = preprocess_input(img)
    probs = model.predict(np.expand_dims(img, axis=0))
    for idx in probs.argsort()[0][::-1][:5]:
        print("{:.2f}%".format(probs[0][idx]*100), "\t", label_maps_rev[idx].split("-")[-1])

download_and_predict("cat7.jpeg")