import tensorflow as tf
import matplotlib.pyplot as plt
import sys

from keras.models import load_model
from keras_preprocessing.image import img_to_array, load_img

# load Dogs_vs_Cats model
model = load_model('Dogs_vs_Cats_best.h5')

def dogs_cats_classifier_short(filename):
    plt.show()
    test_image = load_img(filename, target_size=(160, 160))
    test_image_array = img_to_array(test_image)
    new_image = tf.expand_dims(test_image_array, 0)
    pred = model.predict(new_image)
    plt.imshow(test_image)
    if pred[0] < 0:
        return "cat"
    else:
        return "dog"

sys.modules[__name__] = dogs_cats_classifier_short