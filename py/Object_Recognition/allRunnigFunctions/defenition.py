import numpy as np
import matplotlib.pyplot as plt
import sys

from keras.models import load_model

# load Dogs_vs_Cats model
model = load_model('../models/Dogs&Cats.h5')

def dogs_cats_classifier_short(test_image):
    plt.show()
    probs = model.predict(np.expand_dims(test_image, axis=0))
    plt.imshow(test_image)
    if probs[0] < 0:
        return "cat"
    else:
        return "dog"

sys.modules[__name__] = dogs_cats_classifier_short