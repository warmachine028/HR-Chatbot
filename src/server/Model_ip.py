import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline

data = pd.read_csv('C:/Users/AninditaMukherjee/Desktop/BotProject/models/knowledge_base.csv')

queries, responses = data['Query'], data['Response']

tfIdModel = TfidfVectorizer()
multinominalModel = MultinomialNB()

chatbotModel = make_pipeline(tfIdModel, multinominalModel)

chatbotModel.fit(queries, responses)

def get_response(query: str) -> ...:
    return chatbotModel.predict([query])

print(get_response("how do I get my last 6 months payslip?"))


