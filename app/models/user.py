from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    username = db.Column(db.String(40), nullable=False, unique=True)
    bio = db.Column(db.String, nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    image_url = db.Column(db.String, nullable=False)
    hashed_password = db.Column(db.String, nullable=False)
    user_total_distance = db.Column(db.Integer)
    user_total_walks = db.Column(db.Integer)
    user_total_duration = db.Column(db.Integer)


    dogs = db.relationship('Dog', backref='user')
    walks = db.relationship('Walk', backref='user')

    @property
    def password(self):
        return self.hashed_password


    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'username': self.username,
            'bio': self.bio,
            'email': self.email,
            'image_url': self.image_url,
            'hashed_password': self.hashed_password,
            'user_total_distance': self.user_total_distance,
            'user_total_walks': self.user_total_walks,
            'user_total_duration': self.user_total_duration
        }
