from .db import db
from .dog import Dog
from .walk import Walk

dogwalks = db.Table('dogwalks', 
    db.Column('dog_id', db.Integer, db.ForeignKey(Dog.id), primary_key=True),
    db.Column('walk_id', db.Integer, db.ForeignKey(Walk.id), primary_key=True),
)
