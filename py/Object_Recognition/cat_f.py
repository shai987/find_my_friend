import numpy as np
import matplotlib.pyplot as plt
import sys

from keras.models import load_model
from keras_preprocessing.image import load_img

# load cat breed model
cats_breeds_model = load_model('Cats_Breeds1.h5')

cats_breeds = ['Abyssinian', 'American Bobtail', 'American Shorthair', 'Bengal', 'Birman', 'Bombay', 'British Shorthair', 'Egyptian Mau', 'Maine Coon', 'Persian', 'Ragdoll', 'Russian Blue', 'Siamese', 'Sphynx', 'Tuxedo']
label_maps_cats = {}
label_maps_rev_cats = {}
for i, v in enumerate(cats_breeds):
    label_maps_cats.update({v: i})
    label_maps_rev_cats.update({i : v})

def cats_breeds_classifier_short(filename):
    img = load_img(filename, target_size=(224, 224))
    # predict
    probs = cats_breeds_model.predict(np.expand_dims(img, axis=0))
    breeds = []
    for idx in probs.argsort()[0][::-1][:5]:
        # print("{:.2f}%".format(probs[0][idx]*100), "\t", label_maps_rev_cats[idx].split("-")[-1])
        percent = probs[0][idx]*100
        if(percent > 2):
            breeds.append(f'{label_maps_rev_cats[idx].split("-")[-1]} ({"{:.2f}%".format(probs[0][idx]*100)})')
        plt.show()    
    return breeds

sys.modules[__name__] = cats_breeds_classifier_short