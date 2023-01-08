import os
import sys

from flask import Flask

app = Flask(__name__)

PROJECT_ROOT = os.path.abspath(os.path.join(
                  os.path.dirname(__file__), 
                  os.pardir)
)
sys.path.append(PROJECT_ROOT)
# from py.pets_classifier.pet_details.dog_cat import pet_details  
import pet_details  

class Pet:
    pet_type = ""
    breeds = []

@app.route('/flask/pets_details', methods=['GET'])
def index():
    test_image = r"C:\Users\USER\dog_cat_images\dogs\blondi5.jpeg"
    pet1 = pet_details.pet_details(test_image) 
    return [pet1.pet_type, pet1.breeds]

if __name__ == "__main__":
    app.run(port=5000, debug=True)