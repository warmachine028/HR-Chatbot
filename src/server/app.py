import pickle
from flask import Flask, make_response, request, jsonify

MODEL_PATH = "../python/data/model.pkl"

model = pickle.load(open(MODEL_PATH, "rb"))

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello from Chatbot Flask!"


@app.route("/chat", methods=["GET"])
def getResponse():
    try:
        user_query = request.args.get("query")
        if not user_query:
            return make_response(jsonify({"error": "No query parameter provided"}), 400)
        response = {
            "query": user_query,
            "response": model.predict([user_query]).tolist()[0],
        }
        return make_response(jsonify(response), 200)
    except Exception as error:
        return make_response(jsonify({"error": str(error)}), 500)


if __name__ == "__main__":
    app.run()
