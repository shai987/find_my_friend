import os
import numpy as np
import matplotlib.pyplot as plt
import sys

from keras.models import load_model
from keras_preprocessing.image import load_img

# load dog breed model
dogs_breeds_model = load_model('Stanford_final.h5')

unique_breeds = []

for folders in os.listdir(r"C:\Users\USER\stanford-dogs-dataset\images\Images"):
    breed = "".join(folders.split("-")[1:])
    unique_breeds.append(breed)

label_maps_dogs = {}
label_maps_rev_dogs = {}
for i, v in enumerate(unique_breeds):
    label_maps_dogs.update({v: i})
    label_maps_rev_dogs.update({i : v})

def dogs_breeds_classifier_short(filename):
    img = load_img(filename, target_size=(224, 224))
    # predict
    probs = dogs_breeds_model.predict(np.expand_dims(img, axis=0))
    breeds = []
    for idx in probs.argsort()[0][::-1][:5]:
        # print("{:.2f}%".format(probs[0][idx]*100), "\t", label_maps_rev_dogs[idx].split("-")[-1])
        percent = probs[0][idx]*100
        if(percent > 2):
            breeds.append(f'{label_maps_rev_dogs[idx].split("-")[-1]} ({"{:.2f}%".format(probs[0][idx]*100)})')
        plt.show()    
    return breeds

sys.modules[__name__] = dogs_breeds_classifier_short