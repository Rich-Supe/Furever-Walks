from .db import db
# from .dog import Dog
# from .walk import Walk

dogwalks = db.Table('dogwalks', 
    db.Column('dog_id', db.Integer, db.ForeignKey("dog_id"), primary_key=True),
    db.Column('walk_id', db.Integer, db.ForeignKey("walk_id"), primary_key=True),
)
