from app.models import db, dogwalks_table, Dog, Walk

def relationships():
    walk1 = Walk.query.filter(Walk.id == 1).first()
    dog1 = Dog.query.filter(Dog.id == 1).first()
    walk1.dogwalk_walk.append(dog1)
    db.session.commit()

