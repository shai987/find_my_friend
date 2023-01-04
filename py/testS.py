import os
import numpy as np
import tensorflow as tf
import matplotlib.pyplot as plt
import sys

from keras.models import load_model
from keras_preprocessing.image import img_to_array, load_img

# load Dogs_vs_Cats model
model = load_model('Dogs_vs_Cats_best.h5')

# load dog breed model
dogs_breeds_model = load_model('Stanford_final.h5')

# load cat breed model
cats_breeds_model = load_model('Cats_Breeds1.h5')

unique_breeds = []

for folders in os.listdir(r"C:\Users\USER\stanford-dogs-dataset\images\Images"):
    breed = "".join(folders.split("-")[1:])
    unique_breeds.append(breed)

label_maps_dogs = {}
label_maps_rev_dogs = {}
for i, v in enumerate(unique_breeds):
    label_maps_dogs.update({v: i})
    label_maps_rev_dogs.update({i : v})

cats_breeds = ['Abyssinian', 'American Bobtail', 'American Shorthair', 'Bengal', 'Birman', 'Bombay', 'British Shorthair', 'Egyptian Mau', 'Maine Coon', 'Persian', 'Ragdoll', 'Russian Blue', 'Siamese', 'Sphynx', 'Tuxedo']
label_maps_cats = {}
label_maps_rev_cats = {}
for i, v in enumerate(cats_breeds):
    label_maps_cats.update({v: i})
    label_maps_rev_cats.update({i : v})

def dogs_cats_classifier_short(filename):
    plt.show()
    test_image = load_img(filename, target_size=(160, 160))
    test_image_array = img_to_array(test_image)
    new_image = tf.expand_dims(test_image_array,0)
    pred = model.predict(new_image)
    plt.imshow(test_image)
    if pred[0] < 0:
        return "cat"
    else:
        return "dog"

def dogs_breeds_classifier_short(filename):
    plt.show()
    img = load_img(filename, target_size=(224, 224))
    # predict
    probs = dogs_breeds_model.predict(np.expand_dims(img, axis=0))
    breeds = []
    for idx in probs.argsort()[0][::-1][:5]:
        # print("{:.2f}%".format(probs[0][idx]*100), "\t", label_maps_rev_dogs[idx].split("-")[-1])
        breeds.append({"{:.2f}%".format(probs[0][idx]*100), label_maps_rev_dogs[idx].split("-")[-1]})
    return breeds

def cats_breeds_classifier_short(filename):
    plt.show()
    img = load_img(filename, target_size=(224, 224))
    # predict
    probs = cats_breeds_model.predict(np.expand_dims(img, axis=0))
    breeds = []
    for idx in probs.argsort()[0][::-1][:5]:
        # print("{:.2f}%".format(probs[0][idx]*100), "\t", label_maps_rev_cats[idx].split("-")[-1])
        breeds.append({"{:.2f}%".format(probs[0][idx]*100), label_maps_rev_cats[idx].split("-")[-1]})
    return breeds

# Combination Func
class Pet:
    pet_type = ""
    breeds = []
    color = ""
    
def pet_details(file_name):
    plt.show()
    p_instance = Pet()
    a1 = dogs_cats_classifier_short(file_name)
    if a1 == "dog":
        p_instance.pet_type = a1
        a2 = dogs_breeds_classifier_short(file_name)
        p_instance.breeds = a2
    else: 
        p_instance.pet_type = a1
        a2 = cats_breeds_classifier_short(file_name)
        p_instance.breeds = a2
    print(f"pet type: {p_instance.pet_type}\nbreeds: {p_instance.breeds}")
    return p_instance

# pet_details(r"C:\Users\USER\dog_cat_images\cats\cat10.jpeg")
# pet_details(r"C:\Users\USER\dog_cat_images\dogs\nico1.jpeg")
# pet_details(r"C:\Users\USER\dog_cat_images\dogs\blondi1.jpeg")
# pet_details(r"C:\Users\USER\dog_cat_images\dogs\blondi2.jpeg")
# pet_details(r"C:\Users\USER\dog_cat_images\dogs\bobo.jpeg")
# pet_details(r"C:\Users\USER\dog_cat_images\dogs\blondi3.jpeg")
# pet_details(r"C:\Users\USER\dog_cat_images\dogs\blondi4.jpeg")

sys.modules[__name__] = pet_details