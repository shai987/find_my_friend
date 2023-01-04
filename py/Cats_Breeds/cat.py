from keras_preprocessing.image import load_img

model.save('Cats_Breeds1.h5')

label_maps = {}
label_maps_rev = {}
for i, v in enumerate(class_names):
    label_maps.update({v: i})
    label_maps_rev.update({i : v})
    
def download_and_predict(filename):
    
    """test_image_array = img_to_array(test_image)
    new_image = tf.expand_dims(test_image_array,0)
    predicted_batch = model.predict(new_image)
    """
    # download and save
    img = image.load_img(filename, target_size=(224, 224))
    # show image
    plt.figure(figsize=(4, 4))
    plt.imshow(img)
    plt.axis('off')
    # predict
    #img = preprocess_input(img)
    probs = model.predict(np.expand_dims(img, axis=0))
    for idx in probs.argsort()[0][::-1][:5]:
        print("{:.2f}%".format(probs[0][idx]*100), "\t", label_maps_rev[idx].split("-")[-1])