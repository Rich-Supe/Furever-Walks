from .db import db
# from .dog import Dog
# from .walk import Walk

dogwalks_table = db.Table('dogwalks', 
    db.Column('dog_id', db.Integer, db.ForeignKey("dogs.id"), primary_key=True),
    db.Column('walk_id', db.Integer, db.ForeignKey("walks.id"), primary_key=True),
)
