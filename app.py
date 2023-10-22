from flask import Flask 

app = Flask(__name__)
app.debug = False

@app.route("/")
def landing():
	return "life of a mavrick"

