from flask import Flask, jsonify, render_template
from flask_security import Security, auth_required
import config
from model import db
from sec import store

app = Flask(__name__)
app.config.from_object(config)
db.init_app(app)
app.security = Security(app, store)


@app.get('/')
def home():
    return render_template('index.html')

@app.get('/user')
@auth_required('token')
def user():
    return jsonify({'name':'narendra', 'country':'india'})


if __name__ == '__main__':
    app.run(debug=True)