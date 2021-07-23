from app.models import db, Dog, Walk, User

def seed_dogs():
    leah = Dog(name='Leah', age=7, breed='Pug', image_url="https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/pug-detail.jpg?bust=1535566394&width=630", dog_total_distance=0, dog_total_duration=0, dog_total_walks=0, user_id=1)
    mitchell = Dog(name='Mitchell', age=3, breed='Golden', image_url="https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/golden-retriever-detail.jpg?bust=1535565857&width=630", dog_total_distance=0, dog_total_duration=0, dog_total_walks=0, user_id=1)   
    milo = Dog(name='Milo', age=1, breed='Poodle', image_url="https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/miniature-poodle-detail.jpg?bust=1535566357&width=630", dog_total_distance=0, dog_total_duration=0, dog_total_walks=0, user_id=1)
    warren = Dog(name='Warren', age=5, breed='Malamute', image_url="https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/alaskan-malamute-detail.jpg?bust=1535565041&width=630", dog_total_distance=0, dog_total_duration=0, dog_total_walks=0, user_id=1)
    marley = Dog(name='Marley', age=2, breed='Labrador', image_url="https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/Labrador-482x260.png?bust=1556226811&width=630", dog_total_distance=0, dog_total_duration=0, dog_total_walks=0, user_id=1)
    luna = Dog(name='Luna', age=8, breed='Shiba', image_url="https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/shiba-inu-detail.jpg?bust=1535566568&width=630", dog_total_distance=0, dog_total_duration=0, dog_total_walks=0, user_id=1)
    # dogWalk1 = Walk.query.filter(Walk.user_id == Dog.user_id)
    # marley.walks.append(dogWalk1)
    # marley.users.walks.append(dogWalk1)
    # marley.dogwalks.append(dogWalk1)

    db.session.add(warren)
    db.session.add(mitchell)
    db.session.add(leah)
    db.session.add(marley)
    db.session.add(luna)
    db.session.add(milo)
    db.session.commit()

def undo_dogs():
    db.session.execute('TRUNCATE dogs RESTART IDENTITY CASCADE;')
    db.session.commit()