import numpy as np
import matplotlib.pyplot as plt
import json
import sys

from keras.models import load_model

# load cat breed model
cats_breeds_model = load_model('../models/Cats_Breeds.h5')

# JSON file
cats_breeds = open ('../jsonData/cat.json', "r")

# Reading from file
cats_breeds = json.loads(cats_breeds.read())

label_maps_cats = {}
label_maps_rev_cats = {}
for i, v in enumerate(cats_breeds):
    label_maps_cats.update({v: i})
    label_maps_rev_cats.update({i : v})

def cats_breeds_classifier_short(test_image):
    probs = cats_breeds_model.predict(np.expand_dims(test_image, axis=0))
    breeds = []
    for idx in probs.argsort()[0][::-1][:5]:
        # print("{:.2f}%".format(probs[0][idx]*100), "\t", label_maps_rev_cats[idx].split("-")[-1])
        percent = probs[0][idx]*100
        if(percent > 2):
            breeds.append(f'{label_maps_rev_cats[idx].split("-")[-1]} ({"{:.2f}%".format(probs[0][idx]*100)})')
    plt.show()    
    return breeds


sys.modules[__name__] = cats_breeds_classifier_short