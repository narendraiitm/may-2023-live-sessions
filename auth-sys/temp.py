from model import db
from main import app
from sec import store
from flask_security import hash_password


if __name__ == '__main__':
    with app.app_context():
        # db.create_all()
        if not store.find_user(email='user2@email.com'):
            store.create_user(email='user2@email.com', password=hash_password('1234'))
        db.session.commit()
