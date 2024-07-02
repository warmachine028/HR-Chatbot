from flask import Flask, render_template,request
from flask import jsonify
import numpy as np
import Model_ip

app = Flask(__name__)

@app.route('/') # Home page rendering
def Home():
    return render_template('Home.html')

@app.route('/registration') # Home page rendering
def registartion():
    return render_template('registration.html')

@app.route('/login') #login page rendering
def login():
    return render_template('login.html')

@app.route('/post', methods=['POST']) # getting message from chat page and using it as a input for bot response
def handle_post_request():
    data = request.get_json()
    message = data.get('message')
    
    if message:
        response =Model_ip.get_response(message)
        # Convert NumPy ndarray to Python list
        response_serializable = response.tolist() if isinstance(response, np.ndarray) else response
        return jsonify(response_serializable)
    else:
        return jsonify({'error': 'No message received'}), 400

# @app.route('/api/add', methods=['POST'])
# def add():
#     result = mic.takeCommand()
#     if result != 'None':
#         print('inside if')
#         response = Model_ip.get_response(result)
#         response_serializable = response.tolist() if isinstance(response, np.ndarray) else response
#         return jsonify({'result': result, 'response': response_serializable})
#     res ='---'
#     resp="Say that again please..."
#     return jsonify({'result': res, 'response': resp})

@app.route('/BOT')# chatbot page rendering
def BOT():
    return render_template('BOT.html')

if __name__ == '__main__':
    app.run(debug=True)


