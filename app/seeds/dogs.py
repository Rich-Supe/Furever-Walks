from app.models import db, Dog

def seed_dogs():
    marley = Dog(name='Marley', age=2, breed='Labrador', image_url="", dog_total_distance=0, dog_total_duration=0, dog_total_walks=0, user_id=1)
    luna = Dog(name='Luna', age=8, breed='Shiba', image_url="", dog_total_distance=0, dog_total_duration=0, dog_total_walks=0, user_id=1)

    db.session.add(marley)
    db.session.add(luna)
    db.session.commit()

def undo_dogs():
    db.session.execute('TRUNCATE dogs RESTART IDENTITY CASCADE;')
    db.session.commit()