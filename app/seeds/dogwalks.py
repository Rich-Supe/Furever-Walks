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
    walk11 = Walk.query.filter(Walk.id == 11).first()
    walk12 = Walk.query.filter(Walk.id == 12).first()
    walk13 = Walk.query.filter(Walk.id == 13).first()
    walk14 = Walk.query.filter(Walk.id == 14).first()
    walk15 = Walk.query.filter(Walk.id == 15).first()
    walk16 = Walk.query.filter(Walk.id == 16).first()

    dog1 = Dog.query.filter(Dog.id == 1).first()
    dog2 = Dog.query.filter(Dog.id == 2).first()
    dog3 = Dog.query.filter(Dog.id == 3).first()
    dog4 = Dog.query.filter(Dog.id == 4).first()
    dog5 = Dog.query.filter(Dog.id == 5).first()
    dog6 = Dog.query.filter(Dog.id == 6).first()

    walk1.dogwalk_walk.append(dog1)
    walk1.dogwalk_walk.append(dog2)

    walk2.dogwalk_walk.append(dog1)
    walk2.dogwalk_walk.append(dog2)

    walk3.dogwalk_walk.append(dog1)
    walk3.dogwalk_walk.append(dog2)
    walk3.dogwalk_walk.append(dog3)
    walk3.dogwalk_walk.append(dog5)

    walk4.dogwalk_walk.append(dog3)
    walk4.dogwalk_walk.append(dog5)

    walk5.dogwalk_walk.append(dog1)
    walk5.dogwalk_walk.append(dog2)
    walk5.dogwalk_walk.append(dog3)
    walk5.dogwalk_walk.append(dog6)

    walk6.dogwalk_walk.append(dog1)
    walk6.dogwalk_walk.append(dog2)
    walk6.dogwalk_walk.append(dog4)
    
    walk7.dogwalk_walk.append(dog2)
    walk7.dogwalk_walk.append(dog3)
    walk7.dogwalk_walk.append(dog4)
    walk7.dogwalk_walk.append(dog5)
    walk7.dogwalk_walk.append(dog6)

    walk8.dogwalk_walk.append(dog1)
    walk8.dogwalk_walk.append(dog3)
    walk8.dogwalk_walk.append(dog4)
    walk8.dogwalk_walk.append(dog5)
    walk8.dogwalk_walk.append(dog6)

    walk9.dogwalk_walk.append(dog1)
    walk9.dogwalk_walk.append(dog3)
    walk9.dogwalk_walk.append(dog5)

    walk10.dogwalk_walk.append(dog4)
    walk10.dogwalk_walk.append(dog5)

    walk11.dogwalk_walk.append(dog1)
    walk11.dogwalk_walk.append(dog6)

    walk12.dogwalk_walk.append(dog6)

    walk13.dogwalk_walk.append(dog1)

    walk14.dogwalk_walk.append(dog1)
    walk14.dogwalk_walk.append(dog2)
    walk14.dogwalk_walk.append(dog3)
    walk14.dogwalk_walk.append(dog4)
    walk14.dogwalk_walk.append(dog5)
    walk14.dogwalk_walk.append(dog6)

    walk15.dogwalk_walk.append(dog2)
    walk15.dogwalk_walk.append(dog3)
    walk15.dogwalk_walk.append(dog6)

    walk16.dogwalk_walk.append(dog4)
    walk16.dogwalk_walk.append(dog5)
    walk16.dogwalk_walk.append(dog6)

    db.session.commit()
