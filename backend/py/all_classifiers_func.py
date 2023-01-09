# Import our modules
from base_classifier import base_classifier
from dogs_breeds import dogs_breeds
from cats_breeds import cats_breeds
from Pet import Pet
# Import library from from keras
from keras_preprocessing.image import load_img

class all_classifiers :

    def pet_details(file_name):
        p_instance = Pet()
        test_image = load_img(file_name, target_size=(224, 224))
        a1 = base_classifier.dogs_cats_classifier(test_image)
        if a1 == "dog":
            p_instance.pet_type = a1
            a2 = dogs_breeds.dogs_breeds_classifier(test_image)
            p_instance.breeds = a2
        else: 
            p_instance.pet_type = a1
            a2 = cats_breeds.cats_breeds_classifier(test_image)
            p_instance.breeds = a2
        print(f"pet type: {p_instance.pet_type}\nbreeds: {p_instance.breeds}")
        return p_instance

    # pet_details(r"C:\Users\USER\dog_cat_images\dogs\nico.jpg")