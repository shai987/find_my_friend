import sys
import defenition
import dog_f
import cat_f

from keras_preprocessing.image import load_img

class Pet:
    pet_type = ""
    breeds = []
        
def pet_details(file_name):
    p_instance = Pet()
    test_image = load_img(file_name, target_size=(224, 224))
    a1 = defenition(test_image)
    if a1 == "dog":
        p_instance.pet_type = a1
        a2 = dog_f(test_image)
        p_instance.breeds = a2
    else: 
        p_instance.pet_type = a1
        a2 = cat_f(test_image)
        p_instance.breeds = a2
    print(f"pet type: {p_instance.pet_type}\nbreeds: {p_instance.breeds}")
    return p_instance

sys.modules[__name__] = pet_details