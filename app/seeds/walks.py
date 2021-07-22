from app.models import db, Walk

def seed_walks():
    walk1 = Walk(name='Favorite Route', distance=2, duration=40, date='2021-03-11', rating=0, finished=True, routeData={}, user_id=1)
    walk2 = Walk(name='2nd', distance=8, duration=25, date='2021-03-12', rating=0, finished=True, routeData={}, user_id=2)
    walk3 = Walk(name='Boring', distance=10, duration=50, date='2021-03-13', rating=0, finished=True, routeData={}, user_id=2)
    walk4 = Walk(name='Meh', distance=12, duration=75, date='2021-03-14', rating=1, finished=True, routeData={}, user_id=1)
    walk5 = Walk(name='yay', distance=3, duration=40, date='2021-03-20', rating=3, finished=True, routeData={}, user_id=1)
    walk6 = Walk(name='2nd', distance=8, duration=25, date='2021-03-12', rating=5, finished=True, routeData={}, user_id=1)
    walk7 = Walk(name='Boring', distance=10, duration=50, date='2021-03-13', rating=5, finished=True, routeData={}, user_id=2)
    walk8 = Walk(name='Meh', distance=12, duration=75, date='2021-03-14', rating=0, finished=True, routeData={}, user_id=1)
    walk9 = Walk(name='Favorite Route', distance=2, duration=40, date='2021-03-11', rating=0, finished=True, routeData={}, user_id=1)
    walk10 = Walk(name='3nd', distance=8, duration=25, date='2021-03-12', rating=0, finished=True, routeData={}, user_id=2)
    walk11 = Walk(name='Boring', distance=10, duration=50, date='2021-03-13', rating=0, finished=True, routeData={}, user_id=2)
    walk12 = Walk(name='Meh', distance=12, duration=75, date='2021-03-14', rating=2, finished=True, routeData={}, user_id=3)
    walk13 = Walk(name='Favorite Route', distance=2, duration=40, date='2021-03-11', rating=0, finished=True, routeData={}, user_id=1)
    walk14 = Walk(name='12th', distance=8, duration=25, date='2021-03-12', rating=3, finished=True, routeData={}, user_id=1)
    walk15 = Walk(name='long waaalk', distance=10, duration=50, date='2021-03-13', rating=4, finished=True, routeData={}, user_id=2)
    walk16 = Walk(name='arond the park', distance=12, duration=75, date='2021-03-14', rating=5, finished=True, routeData={}, user_id=1)

    db.session.add_all([walk1, walk2, walk3, walk4, walk5, walk6, walk7, walk8, walk9, walk10, walk11, walk12, walk13, walk14, walk15, walk16])
    # db.session.add(walk1)

    db.session.commit()

def undo_walks():
    db.session.execute('TRUNCATE walks RESTART IDENTITY CASCADE;')
    db.session.commit()
