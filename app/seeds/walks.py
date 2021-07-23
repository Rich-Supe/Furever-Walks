from app.models import db, Walk, Dog

def seed_walks():
    walk1 = Walk(name='Favorite Route', distance=2, duration=40, date='2021-07-21', rating=0, finished=True, routeData={}, user_id=1)
    walk2 = Walk(name='2nd', distance=8, duration=25, date='2021-07-22', rating=0, finished=True, routeData={}, user_id=1)
    walk3 = Walk(name='Boring', distance=10, duration=50, date='2021-07-23', rating=0, finished=True, routeData={}, user_id=1)
    walk4 = Walk(name='Meh', distance=12, duration=75, date='2021-07-24', rating=1, finished=True, routeData={}, user_id=1)
    walk5 = Walk(name='yay', distance=3, duration=40, date='2021-07-20', rating=3, finished=True, routeData={}, user_id=1)
    walk6 = Walk(name='2nd', distance=8, duration=25, date='2021-07-26', rating=5, finished=True, routeData={}, user_id=1)
    walk7 = Walk(name='Boring', distance=10, duration=50, date='2021-07-23', rating=5, finished=True, routeData={}, user_id=1)
    walk8 = Walk(name='Meh', distance=12, duration=75, date='2021-07-24', rating=0, finished=True, routeData={}, user_id=1)
    walk9 = Walk(name='Favorite Route', distance=2, duration=40, date='2021-07-21', rating=0, finished=True, routeData={}, user_id=1)
    walk10 = Walk(name='3nd', distance=8, duration=25, date='2021-07-22', rating=0, finished=True, routeData={}, user_id=1)
    walk11 = Walk(name='Boring', distance=10, duration=50, date='2021-07-25', rating=0, finished=True, routeData={}, user_id=1)
    walk12 = Walk(name='Meh', distance=12, duration=75, date='2021-07-24', rating=2, finished=True, routeData={}, user_id=1)
    walk13 = Walk(name='Favorite Route', distance=2, duration=40, date='2021-07-21', rating=0, finished=True, routeData={}, user_id=1)
    walk14 = Walk(name='12th', distance=8, duration=25, date='2021-07-22', rating=3, finished=True, routeData={}, user_id=1)
    walk15 = Walk(name='long walk', distance=10, duration=50, date='2021-07-23', rating=4, finished=True, routeData={}, user_id=1)
    walk16 = Walk(name='around the park', distance=12, duration=75, date='2021-07-24', rating=5, finished=True, routeData={}, user_id=1)

    db.session.add_all([walk1, walk2, walk3, walk4, walk5, walk6, walk7, walk8, walk9, walk10, walk11, walk12, walk13, walk14, walk15, walk16])
    # db.session.add(walk1)

    db.session.commit()

def undo_walks():
    db.session.execute('TRUNCATE walks RESTART IDENTITY CASCADE;')
    db.session.commit()
