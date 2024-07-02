from flask import Flask, make_response, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello from Chatbot Flask!'

@app.route('/chat', methods=['GET'])
def getResponse():
    try:
        user_query = request.args.get('query')
        if not user_query:
            return make_response(jsonify({'error': 'No query parameter provided'}), 400)
        response = { 'query': user_query, 'message': 'Response from server' }
        return make_response(jsonify(response), 200)
    except Exception as error:
        return make_response(jsonify({'error': str(error) }),500)


if __name__ == '__main__':
    app.run()
