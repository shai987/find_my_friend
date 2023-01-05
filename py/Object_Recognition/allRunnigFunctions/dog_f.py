import numpy as np
import matplotlib.pyplot as plt
import json
import sys

from keras.models import load_model

# load dog breed model
dogs_breeds_model = load_model('../models/Dogs_Breeds.h5')

# JSON file
dogs_breeds = open ('../jsonData/dog.json', "r")

# Reading from file
dogs_breeds = json.loads(dogs_breeds.read())

label_maps_dogs = {}
label_maps_rev_dogs = {}
for i, v in enumerate(dogs_breeds):
    label_maps_dogs.update({v: i})
    label_maps_rev_dogs.update({i : v})

def dogs_breeds_classifier_short(test_image):
    probs = dogs_breeds_model.predict(np.expand_dims(test_image, axis=0))
    breeds = []
    for idx in probs.argsort()[0][::-1][:5]:
        # print("{:.2f}%".format(probs[0][idx]*100), "\t", label_maps_rev_dogs[idx].split("-")[-1])
        percent = probs[0][idx]*100
        if(percent > 2):
            breeds.append(f'{label_maps_rev_dogs[idx].split("-")[-1]} ({"{:.2f}%".format(probs[0][idx]*100)})')
    plt.show()    
    return breeds

sys.modules[__name__] = dogs_breeds_classifier_short