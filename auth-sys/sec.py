from flask_security import SQLAlchemyUserDatastore
from model import db, User, Role 

store = SQLAlchemyUserDatastore(db, User, Role)