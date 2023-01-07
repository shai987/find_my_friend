import os
import sys

from flask import Flask

app = Flask(__name__)

PROJECT_ROOT = os.path.abspath(os.path.join(
                  os.path.dirname(__file__), 
                  os.pardir)
)
sys.path.append(PROJECT_ROOT)
from py.pets_classifier.pet_details.dog_cat import pet_details  

@app.route('/flask/pets_details', methods=['GET'])
def index():
    res = pet_details(r"C:\Users\USER\dog_cat_images\dogs\blondi5.jpeg")
    return res 

if __name__ == "__main__":
    app.run(port=5000, debug=True)