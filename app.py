from flask import Flask 

app = Flask(__name__)

@app.route("/")
def landing():
	return "life of a mavrick"

if __name__ == "__main__":
	app.run(debug = False)
