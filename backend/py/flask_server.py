# Import libraries
from flask import Flask, request
from pymongo import MongoClient
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
    print(name)
    test_image = f"../pets/{name}.jpg"
    pet1 = all_classifiers.pet_details(test_image) 
    return [pet1.pet_type, pet1.breeds]
    
if __name__ == "__main__":
    app.run(port=5000, debug=True)