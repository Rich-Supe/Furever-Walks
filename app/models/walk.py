from .db import db


class Walk(db.Model):
    __tablename__ = 'walks'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    distance = db.Column(db.Float, nullable=False)
    duration = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    rating = db.Column(db.Integer)
    finished = db.Column(db.Boolean, default=False)
    routeData = db.Column(db.PickleType)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)


    def __repr__(self):
        print(self.name)
        return f'<Walk {self.id}>'

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'distance': self.distance,
            'duration': self.duration,
            'date': self.date,
            'rating': self.rating,
            'finished': self.finished,
            'routeData': self.routeData,
            'user_id': self.user_id
        }
