from flask import Blueprint, jsonify, request
from app.forms import NewWalkForm
from app.models import Walk, db, user, Dog
import datetime

walk_routes = Blueprint('walks', __name__)


# Create a blueprint that gets one walk
@walk_routes.route('/<int:walk_id>', methods=['GET'])
def get_walk(walk_id):
    walk = Walk.query.get(walk_id)
    # return jsonify(walk.serialize())
    return walk.to_dict()


# get all walks by user
@walk_routes.route('/all/<int:user_id>', methods=['GET'])
def get_walks(user_id):
    # print("HERE @@@@@@@@'/all/<int:user_id>'", user_id)
    walks = Walk.query.filter_by(user_id=user_id).all()
    # print("###################", walks)
    # return jsonify([walk.to_dict() for walk in walks])
    # return jsonify(walks=[walk.serialize() for walk in walks])
    return {"walks": [walk.to_dict() for walk in walks]}


# Get all walks by dog
# @walk_routes.route('/all/<int:dog_id>', methods=['GET'])
# def get_walks_by_dog(dog_id):
#     walks = Walk.query.filter_by(dog_id=dog_id).all()
#     return {"walks": [walk.to_dict() for walk in walks]}


# Get all walks by dogID
@walk_routes.route('/all/dogs/<int:dog_id>', methods=['GET'])
def get_walks_by_dog(dog_id):
    walks = Walk.query.join(Dog).filter(Dog.id == dog_id).all()
    return {"walks": [walk.to_dict() for walk in walks]}


# add walk
@walk_routes.route('/', methods=['POST'])
def add_walk():
    form = NewWalkForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print('this is 47', form.data)
    print('48', request.data)
    if form.validate_on_submit():
        walk = Walk(
            name=form.name.data, 
            user_id=int(form.user_id.data), 
            distance=float(form.distance.data), 
            duration=int(form.duration.data), 
            date=datetime.date.today(), 
            rating=int(form.rating.data), 
            finished=form.finished.data 
            # routeData=form.routeData.data
            )

        string = request.data
        obj = string.decode()
        print(type(obj))
        start = obj.index('walkingdogs') + 14
        end = len(obj) - 2
        # print('start', start)
        # print('end', obj[start:end])
        str = obj[start:end]
        arr = str.split(',')
        # print('arrrrrr', arr)
        # print('0 index', arr[0])

        for num in arr:
            dog = Dog.query.filter(Dog.id == num).first()
            walk.dogwalk_walk.append(dog)
            print('heres a dog', dog)

        db.session.add(walk)
        db.session.commit()

        return walk.to_dict()
    return {'message': form.errors}

@walk_routes.route('/dogs/<int:dog_id>')
def add_dog_to_walk(dogId, walkId):
    walk = Walk.query.filter(Walk.id == walkId).first()
    walk.dogwalk_walk.append(dogId)



# write a route to update or edit a walk
@walk_routes.route('/<int:walk_id>', methods=['PUT'])
def update_walk(walk_id):
    form = NewWalkForm()
    walk = Walk.query.get(walk_id)
    if form.validate_on_submit():
        walk.name = form.name.data
        walk.user_id = form.user_id.data
        walk.distance = form.distance.data
        walk.duration = form.duration.data
        walk.date = form.date.data
        walk.rating = form.rating.data
        walk.finished = form.finished.data
        db.session.commit()
        return walk.to_dict()
    return {'message': 'Validation Failed'}


# remove walk
@walk_routes.route('/<int:walk_id>', methods=['DELETE'])
def remove_walk(walk_id):
    walk = Walk.query.get(walk_id)
    db.session.delete(walk)
    db.session.commit()
    return {'message': 'Walk removed'}
