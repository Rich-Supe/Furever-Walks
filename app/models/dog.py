from .db import db
from .dogwalk import dogwalks_table

class Dog(db.Model):
    __tablename__ = 'dogs'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    breed = db.Column(db.String, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    dog_total_distance = db.Column(db.Integer)
    dog_total_walks = db.Column(db.Integer)
    dog_total_duration = db.Column(db.Integer)
    image_url = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    dogwalk_dog = db.relationship('Walk', secondary=dogwalks_table, back_populates='dogwalk_walk')
    
    user = db.relationship('User', back_populates='dogs')
    #  parent_id = Column(Integer, ForeignKey('parent.id'))

    def __repr__(self):
        print(self.name)
        return f'<Dog {self.id}>'

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'breed': self.breed,
            'age': self.age,
            'dog_total_distance': self.dog_total_distance,
            'dog_total_walks': self.dog_total_walks,
            'dog_total_duration': self.dog_total_duration,
            'image_url': self.image_url
        }
