from flask import Flask, make_response, render_template, redirect, url_for, session, request

app = Flask(__name__)
app.debug = True
app.secret_key = "secret"

# login_form = """
# <form method='post' action='/login'>
# 	<input name='username'>
#     <input type='submit'>
# </form>
# """

# @app.route("/")
# def home():
#     if 'username' in session:  # Check if the user is already logged in
#         return "life of a mavrick"
#     return redirect(url_for("login"))

@app.after_request
def add_no_cache_headers(response):
    if 'Cache-Control' not in response.headers:
        response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0'
    return response

# @app.route('/login', methods=['GET', 'POST'])
# def login():
#     if 'username' in session:  # Check if the user is already logged in
#         return redirect(url_for('home'))
#     else:
#         if request.method == "POST":
#             username = request.form.get("username")
#             session['username'] = username
#             return redirect(url_for("home"))
#         else:
#             return login_form
        
# @app.route("/logout")
# def logout():
#     session.clear()
#     return redirect(url_for("home"))

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/blogs")
def blogs():
    return render_template("blogs.html")

@app.route("/blog")
def blog():
    return render_template("blog.html")

@app.route("/gallery")
def gallery():
    return render_template("gallery.html")