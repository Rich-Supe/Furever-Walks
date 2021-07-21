from flask import Blueprint, jsonify, request
from app.forms import NewDogForm
from app.models import Dog, db


dog_routes = Blueprint('dogs', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

# Get dog by ID
@dog_routes.route('/<int:dog_id>', methods=['GET'])
def get_dog(dog_id):
    dog = Dog.query.get(dog_id)
    return dog.to_dict()

# Get dogs by userID
@dog_routes.route('/all/<int:user_id>', methods=['GET'])
# @dog_routes.route('/all/:user_id', methods=['GET'])
def get_all_dogs(user_id):
    # print('UserId from get dog api route---------------------------------', user_id)
    dogs = Dog.query.filter_by(user_id=user_id)
    # print('DOGGOS from api get all------------', dogs)
    return {"dogs": [dog.to_dict() for dog in dogs]}

#Crate a new dog
@dog_routes.route('/create', methods=['POST'])
def create_dog():
    form = NewDogForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        dog = Dog(
            name=form.name.data,
            breed=form.breed.data,
            age=form.age.data,
            image_url=form.image_url.data,
            user_id=form.user_id.data,
            dog_total_distance=form.dog_total_distance.data,
            dog_total_duration=form.dog_total_duration.data,
            dog_total_walks=form.dog_total_walks.data)
        db.session.add(dog)
        db.session.commit()
        return dog.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# write a route to update a dog
@dog_routes.route('/<int:dog_id>', methods=['PUT'])
def update_dog(dog_id):
    dog = Dog.query.get(dog_id)
    if dog is None:
        return {'message': 'No dog found'}, 404
    data = request.get_json()
    dog.name = data['name']
    dog.breed = data['breed']
    dog.age = data['age']
    dog.image_url = data['image_url']
    db.session.commit()
    return dog.to_dict()
    

# Remove Doggo
@dog_routes.route('/<int:dog_id>', methods=['DELETE'])
def delete_dog(dog_id):
    dog = Dog.query.get(dog_id)
    db.session.delete(dog)
    db.session.commit()
    return {'message': 'Doggo removed'}



