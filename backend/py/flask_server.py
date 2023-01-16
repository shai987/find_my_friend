# Import libraries
from flask import Flask, request
import json
# Import our module
from all_classifiers_func import all_classifiers
from Pet import Pet

app = Flask(__name__)

@app.route('/flask/pets_details', methods=['GET'])
def index():
    args = request.args
    name = args.get("name", default="", type=str)
    test_image = f"../pets/{name}"
    p = all_classifiers.pet_details(test_image)
    pet = Pet(p.pet_type, p.breeds)
    # convert into JSON:
    pet_json = json.dumps(pet.__dict__) #you must add __dict__ in order to parse the object into json format
    return pet_json
    
if __name__ == "__main__":
    app.run(port=5000, debug=True)