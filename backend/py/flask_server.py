# Import libraries
from flask import Flask, request
import json
import os
# Import our modules
from all_classifiers_func import all_classifiers
from Pet import Pet
from imageSimilarity import imageSimilarityClass

app = Flask(__name__)

@app.route('/flask/pets_details', methods=['GET'])
def pets_details():
    args = request.args
    name = args.get("name", default="", type=str)
    test_image = f"../pets/{name}"
    p = all_classifiers.pet_details(test_image)
    pet = Pet(p.pet_type, p.breeds)
    # convert into JSON:
    pet_json = json.dumps(pet.__dict__) #you must add __dict__ in order to parse the object into json format
    return pet_json

@app.route('/flask/imageSimilarity', methods=['GET'])
def imageSimilarity():
    args = request.args
    petType = args.get("petType", default="", type=str)
    #dir_list = os.listdir("../pets")
    #image_address = f"../pets/{dir_list[0]}"
    image_address = "../pets/nico.jpg"
    result = imageSimilarityClass.imageSimilarity(petType, image_address)
    result_json = json.dumps(result.__dict__)
    return result_json
    
if __name__ == "__main__":
    app.run(port=5000, debug=True)