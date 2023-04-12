import tensorflow as tf
import tensorflow_hub as hub
import numpy as np
import os
from PIL import Image
from scipy.spatial import distance

model_url = "https://tfhub.dev/tensorflow/efficientnet/lite0/feature-vector/2"

IMAGE_SHAPE = (224, 224)

layer = hub.KerasLayer(model_url)
model = tf.keras.Sequential([layer])

class imageSimilarityClass : 
        def imagePreprocessing(self, file):
                # Resizing to the size the model was trained on
                file = Image.open(file).convert('L').resize(IMAGE_SHAPE)
                # Converting the image into a color representation for each pixel
                file = np.stack((file,)*3, axis=-1)
                # Normalizing the values between 0 and 1
                file = np.array(file)/255.0

                embedding = model.predict(file[np.newaxis, ...])
                vgg16_feature_np = np.array(embedding)
                flattended_feature = vgg16_feature_np.flatten()

                return flattended_feature

        def imageSimilarity(self, petType):
                metric = 'cosine'
                dir_list = os.listdir("../pets")
                image_address = f"../pets/{dir_list[0]}"
                print(image_address)
                test_image = self.imagePreprocessing(image_address)
                test_nico = self.imagePreprocessing(image_address)
                dc = distance.cdist([test_image], [test_nico], metric)[0]
                result = dc[0]
                resultArray = []
                print(result)

                if petType=="cat":
                        if result<0.4:
                                # fill array of similar photos
                                resultArray.append("V")      
                else: # dog
                        if result<0.3:
                                # fill array of similar photos
                                resultArray.append("V") 

                return resultArray     