from app.models import db, dogwalks_table, Dog, Walk

def relationships():
    walk1 = Walk.query.filter(Walk.id == 1).first()
    walk2 = Walk.query.filter(Walk.id == 2).first()
    walk3 = Walk.query.filter(Walk.id == 3).first()
    walk4 = Walk.query.filter(Walk.id == 4).first()
    walk5 = Walk.query.filter(Walk.id == 5).first()
    walk6 = Walk.query.filter(Walk.id == 6).first()
    walk7 = Walk.query.filter(Walk.id == 7).first()
    walk8 = Walk.query.filter(Walk.id == 8).first()
    walk9 = Walk.query.filter(Walk.id == 9).first()
    walk10 = Walk.query.filter(Walk.id == 10).first()

    dog1 = Dog.query.filter(Dog.id == 1).first()
    dog2 = Dog.query.filter(Dog.id == 2).first()

    walk1.dogwalk_walk.append(dog1)
    walk2.dogwalk_walk.append(dog1)
    walk3.dogwalk_walk.append(dog1)
    walk4.dogwalk_walk.append(dog1)
    walk5.dogwalk_walk.append(dog1)
    
    walk6.dogwalk_walk.append(dog2)
    walk7.dogwalk_walk.append(dog2)
    walk8.dogwalk_walk.append(dog2)
    walk9.dogwalk_walk.append(dog2)
    walk10.dogwalk_walk.append(dog2)

    db.session.commit()
