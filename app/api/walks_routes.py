from flask import Blueprint, jsonify
from app.forms import NewWalkForm
from app.models import Walk, db, user, walk

walk_routes = Blueprint('walks', __name__)

# Create a blueprint that gets one walk
@walk_routes.route('/<int:walk_id>', methods=['GET'])
def get_walk(walk_id):
    walk = Walk.query.get(walk_id)
    # return jsonify(walk.serialize())
    return walk.to_dict()

# get all walks by user
@walk_routes.route('/<int:user_id>', methods=['GET'])
def get_walks(user_id):
    walks = Walk.query.filter_by(user_id=user_id).all()
    # return jsonify([walk.to_dict() for walk in walks])
    # return jsonify(walks=[walk.serialize() for walk in walks])
    return {"walks": [walk.to_dict() for walk in walks]}

# Get all walks by dog
@walk_routes.route('/<int:dog_id>', methods=['GET'])
def get_walks_by_dog(dog_id):
    walks = Walk.query.filter_by(dog_id=dog_id).all()
    return {"walks": [walk.to_dict() for walk in walks]}

# add walk
@walk_routes.route('/', methods=['POST'])
def add_walk():
    form = NewWalkForm()
    if form.validate_on_submit():
        walk = Walk(form.name.data, form.user_id.data, form.distance.data, form.duration.data, form.date.data, form.rating.data, form.finished.data)
        db.session.add(walk)
        db.session.commit()
        # return jsonify(walk.to_dict())
        return walk.to_dict()
    return {'message': 'Validation Failed'}


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