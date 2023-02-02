import numpy as np
import matplotlib.pyplot as plt

from keras.models import load_model
from keras_preprocessing.image import ImageDataGenerator 

model = load_model('../model_file/Dogs_vs_Cats_Classifier.h5')

class_names = ['Cat', 'Dog'] 

def plot_prediction(generator, n_images):

#     Test the model on random predictions 
#     Args:
#     generator: a generator instance
#     n_images : number of images to plot

    i = 1
    # Get the images and the labels from the generator
    images, labels = generator.next()
    # Gets the model predictions
    preds = model.predict(images)
    predictions = np.argmax(preds, axis=1)
    labels = labels.astype('int32')
    plt.figure(figsize=(14, 15))
    for image, label in zip(images, labels):
        plt.subplot(4, 3, i)
        plt.imshow(image)
        if predictions[i] == labels[i]:
            title_obj = plt.title(class_names[label])
            plt.setp(title_obj, color='g') 
            plt.axis('off')
        else:
            title_obj = plt.title(class_names[label])
            plt.setp(title_obj, color='r') 
            plt.axis('off')
        i += 1
        if i == n_images:
            break
    
    plt.show()

validation_gen =  ImageDataGenerator(
        rescale=1./255.)

my_validation_generator = validation_gen.flow_from_directory(
        'C:/Users/USER/dog_cat_images',
        target_size=(150, 150),
        batch_size=64,
        class_mode='binary')

plot_prediction(my_validation_generator, 12)