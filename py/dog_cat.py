import matplotlib.pyplot as plt
import sys
import defenition
import dog_f
import cat_f

class Pet:
    pet_type = ""
    breeds = []
        
def pet_details(file_name):
    p_instance = Pet()
    a1 = defenition(file_name)
    if a1 == "dog":
        p_instance.pet_type = a1
        a2 = dog_f(file_name)
        p_instance.breeds = a2
    else: 
        p_instance.pet_type = a1
        a2 = cat_f(file_name)
        p_instance.breeds = a2
    print(f"pet type: {p_instance.pet_type}\nbreeds: {p_instance.breeds}")
    return p_instance

sys.modules[__name__] = pet_details