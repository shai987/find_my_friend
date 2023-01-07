"""from all_funcs.base_classifier import dogs_cats_classifier_short as base_classifier
from all_funcs.dogs_breeds import dogs_breeds_classifier_short as dogs_breeds
from all_funcs.cats_breeds import cats_breeds_classifier_short as cats_breeds"""

import os
import sys
PROJECT_ROOT = os.path.abspath(os.path.join(
                  os.path.dirname(__file__), 
                  os.pardir)
)
sys.path.append(PROJECT_ROOT)
import all_funcs



from keras_preprocessing.image import load_img

class Pet:
    pet_type = ""
    breeds = []
        
def pet_details(file_name):
    p_instance = Pet()
    test_image = load_img(file_name, target_size=(224, 224))
    a1 = all_funcs.dogs_cats_classifier_short(test_image)
    if a1 == "dog":
        p_instance.pet_type = a1
        a2 = all_funcs.dogs_breeds_classifier_short(test_image)
        p_instance.breeds = a2
    else: 
        p_instance.pet_type = a1
        a2 = all_funcs.cats_breeds_classifier_short(test_image)
        p_instance.breeds = a2
    print(f"pet type: {p_instance.pet_type}\nbreeds: {p_instance.breeds}")
    return p_instance

