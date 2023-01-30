import numpy as np
import matplotlib.pyplot as plt

from keras.models import load_model
from keras_preprocessing.image import load_img

model = load_model('../model_file/Dogs_vs_Cats_Classifier.h5')

def plot_single_prediction(image_adr):
    # Input image
    test_image = load_img(image_adr,target_size=(150,150))
    # Convert the input to an array
    test_image = np.asarray(test_image)
    # Convert from integers to floats
    test_image = test_image.astype('float32')
    # Normalize to the range 0-1
    test_image /= 255.0
    # For show image
    plt.imshow(test_image)
    # Expand dimension to one sample
    test_image = np.expand_dims(test_image, axis=0)
    # Gets the model predictions
    preds = model.predict(test_image)
    prediction = np.argmax(preds, axis=1)
    if prediction[0] == 1:
        print("dog")
    else:
        print("cat")
    plt.show()

plot_single_prediction('C:/Users/USER/dog_cat_images/dogs/nico1.jpeg')

