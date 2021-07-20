from app.models import db, Walk

def seed_walks():
    walk1 = Walk(name='Marley', distance=2, duration=40, date='2021-03-11', rating=0, status=True, routeData={}, user_id=1)
    walk2 = Walk(name='Luna', distance=8, duration=25, date='2021-03-12', rating=0, status=True, routeData={}, user_id=2)
    walk3 = Walk(name='Marley', distance=10, duration=50, date='2021-03-13', rating=0, status=True, routeData={}, user_id=2)
    walk4 = Walk(name='Luna', distance=12, duration=75, date='2021-03-14', rating=0, status=True, routeData={}, user_id=3)

    db.session.add_all([walk1, walk2, walk3, walk4])

    db.session.commit()

def undo_walks():
    db.session.execute('TRUNCATE walks RESTART IDENTITY CASCADE;')
    db.session.commit()
