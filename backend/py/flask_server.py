# Import libraries
from flask import Flask, request
from pymongo import MongoClient
import json
# Import our module
from all_classifiers_func import all_classifiers

client = MongoClient('localhost', 27017)
db = client.findMyFriend
col = db.newPet

app = Flask(__name__)

@app.route('/flask/pets_details', methods=['GET'])
def index():
    args = request.args
    name = args.get("name", default="", type=str)
    # test_image = f"../pets/{name}.jpg"
    test_image = f"../pets/{name}"
    pet1 = all_classifiers.pet_details(test_image)
    print(pet1.pet_type,pet1.breeds)
    # convert into JSON:
    pet1_json = json.dumps(pet1)
    print(pet1_json)
    return pet1_json
    
if __name__ == "__main__":
    app.run(port=5000, debug=True)