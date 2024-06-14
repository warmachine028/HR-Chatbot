# from flask import Flask, render_template, request
# from flask_socketio import SocketIO, send

# app = Flask(__name__)
# socketio = SocketIO(app, cors_allowed_origins="*")


# @socketio.on("message")
# def sendMessage(message):
#     send(message, broadcast=True)
#     # send() function will emit a message vent by default


# @app.route("/")
# def message():
#     return render_template("FrontPage.html")

# if __name__ == '__main__':
#     app.run(debug=True)
from flask import Flask, render_template
from flask_socketio import SocketIO, send

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def sessions():
    return render_template('chatbot.html')

@app.route('/operator')
def operator():
    return render_template('operator.html')

@socketio.on('message')
def handle_message(msg):
    print('Message: ' + msg)
    send(msg, broadcast=True)

if __name__ == '__main__':
    socketio.run(app, debug=True)
