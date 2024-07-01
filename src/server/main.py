from flask import Flask, render_template, request, jsonify
from flask_socketio import SocketIO, emit
import Model_ip
import numpy as np

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/') # Home page rendering
def Home():
    return render_template('Home.html')

@app.route('/login') #login page rendering
def login():
    return render_template('login.html')

@app.route('/post', methods=['POST']) # getting message from chat page and using it as a input for bot response
def handle_post_request():
    data = request.get_json()
    message = data.get('message')
    
    if message:
        response = Model_ip.get_response(message)
        # Convert NumPy ndarray to Python list
        response_serializable = response.tolist() if isinstance(response, np.ndarray) else response
        return jsonify(response_serializable)
    else:
        return jsonify({'error': 'No message received'}), 400

@app.route('/BOT')# chatbot page rendering
def BOT():
    return render_template('BOT.html')

if __name__ == '__main__':
    app.run()

# @app.route('/operator')
# def hrchat():
#     return render_template('operator.html')

# @socketio.on('connect', namespace='/BOT')
# def bot_connect():
#     print("Chatbot client connected")

# @socketio.on('connect', namespace='/operator')
# def operator_connect():
#     print("Operator client connected")

# @socketio.on('message', namespace='/BOT')
# def handle_user_message(message):
#     print("User message: " + message)
#     if "human help" not in message:
#         print('inside bot')
#         response = Model_ip.get_response(message)
#         print(response)
#         if isinstance(response, np.ndarray):
#                 print('Response is an ndarray, converting to list and string')
#                 response = response.tolist()           
#         response_str = str(response)
#         print(type(response_str))
#         print(f"Bot response: {response_str}")
#         emit('message', response_str, namespace='/BOT')
#         print('done')
#     else:
#         emit('message', "Forwarding to human help...", namespace='/BOT')
#         emit('message', message, namespace='/operator', broadcast=True)

# @socketio.on('message', namespace='/operator')
# def handle_operator_message(msg):
#     print("Operator message: " + msg)
#     emit('message', msg, namespace='/BOT',broadcast=True)








