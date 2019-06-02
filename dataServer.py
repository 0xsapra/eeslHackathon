import requests, json
import pandas as pd
import flask
from flask import Flask, jsonify

app = Flask(__name__)
class AnalyticsProvide():
    def __init__(self):
        URL = "http://192.168.31.13:1337/data"
        r = requests.get(url = URL)
        self.data = r.json()
        self.data = pd.DataFrame(self.data) 
    
    def print_data(self):
        print(self.data.head())
    
    def get_todays_consumption(self, user):
        data = self.data[self.data['user'] == user]
        data = data.set_index('ts')
        data = data.groupby(pd.TimeGrouper(freq='60Min', base=0, label='left')).mean()
        return data['kwhi'].sum() * 6
        
a = AnalyticsProvide()
a.print_data()


@app.route('/totalconsumption', methods=['POST'])
def get_todays_consumption():
    user = flask.request.data.decode('utf-8')
    print(user)
    consump = a.get_todays_consumption(json.loads(user)['user'])
    return jsonify({'data': consump})

@app.route('/areaavg', methods=['POST'])
def get_area_avg():
    user = flask.request.data.decode('utf-8')
    print(user)
    consump = a.get_todays_consumption(user)
    return jsonify({'data': consump})



if __name__ == '__main__':
    app.run(host="0.0.0.0",port=5000,debug=False)
    print("hi")
    
