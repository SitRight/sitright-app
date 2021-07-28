from datetime import datetime
import tensorflow as tf
from tensorflow import keras
import numpy as np
from PIL import Image
import base64
import io
from tensorflow.keras.applications.imagenet_utils import decode_predictions


def get_time():
    time = datetime.now()
    time = str(time)
    return time

def load_model():
    model = tf.keras.models.load_model('D:/FASTAPI/Posture/my_model')
    #model = tf.keras.applications.MobileNetV2(weights="imagenet")
    print("Model loaded")
    return model

model = load_model()

def predict(base64str):
    base64str = base64str[23:]
    base64_img_bytes = base64str.encode('utf-8')
    base64bytes = base64.b64decode(base64_img_bytes)
    bytesObj = io.BytesIO(base64bytes)
    img = Image.open(bytesObj)
    img = np.asarray(img.resize((224, 224)))[..., :3]
    img = np.expand_dims(img, 0)
    img = img / 127.5 - 1.0
    result = decode_predictions(model.predict(img), 2)[0]
    response = []
    for i, res in enumerate(result):
        resp = {}
        resp["type"] = res[1]
        resp["confidence"] = f"{res[2]*100:0.2f} %"
        response.append(resp)
    return response

def run_prediction(base64str):
    img_height = 180
    img_width = 220
    base64str = base64str[23:]
    base64_img_bytes = base64str.encode('utf-8')
    base64bytes = base64.b64decode(base64_img_bytes)
    bytesObj = io.BytesIO(base64bytes)
    image_image = Image.open(bytesObj)
    class_names = ['bad', 'good']
    image_path = "D:/FASTAPI/posture/model/tests/tester_image/test.jpg"
    img = keras.preprocessing.image.load_img(image_path, target_size=(img_height, img_width))
    #img = np.asarray(img.resize((224, 224)))[..., :3]
    #img = np.expand_dims(img, 0)
    #img_array = img / 127.5 - 1.0
    img_array = keras.preprocessing.image.img_to_array(img)
    img_array = tf.expand_dims(img_array, 0) # Create a batch
    predictions = model.predict(img_array)
    score = tf.nn.softmax(predictions[0])
    result = class_names[np.argmax(score)]
    print(
        "This image most likely belongs to {} with a {:.2f} percent confidence."
        .format(class_names[np.argmax(score)], 100 * np.max(score))
    )
    print(result)
    return result