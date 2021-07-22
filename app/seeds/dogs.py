from app.models import db, Dog, Walk, User

def seed_dogs():
    marley = Dog(name='Marley', age=2, breed='Labrador', image_url="", dog_total_distance=0, dog_total_duration=0, dog_total_walks=0, user_id=1)
    luna = Dog(name='Luna', age=8, breed='Shiba', image_url="", dog_total_distance=0, dog_total_duration=0, dog_total_walks=0, user_id=1)

    # dogWalk1 = Walk.query.filter(Walk.user_id == Dog.user_id)
    # marley.walks.append(dogWalk1)
    # marley.users.walks.append(dogWalk1)
    # marley.dogwalks.append(dogWalk1)

    db.session.add(marley)
    db.session.add(luna)
    db.session.commit()

def undo_dogs():
    db.session.execute('TRUNCATE dogs RESTART IDENTITY CASCADE;')
    db.session.commit()