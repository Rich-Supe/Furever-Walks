from flask import Blueprint, jsonify
from app.forms import NewDogForm
from app.models import Dog, db


dog_routes = Blueprint('dogs', __name__)


# def validation_errors_to_error_messages(validation_errors):
#     """
#     Simple function that turns the WTForms validation errors into a simple list
#     """
#     errorMessages = []
#     for field in validation_errors:
#         for error in validation_errors[field]:
#             errorMessages.append(f'{field} : {error}')
#     return errorMessages

# Get dog by ID
@dog_routes.route('/<int:dog_id>', methods=['GET'])
def get_dog(dog_id):
    dog = Dog.query.get(dog_id)
    return dog.to_dict()

# Get dogs by userID
@dog_routes.route('/all/<int:user_id>', methods=['GET'])
# @dog_routes.route('/all/:user_id', methods=['GET'])
def get_all_dogs(user_id):
    print('UserId from get dog api route---------------------------------', user_id)
    dogs = Dog.query.filter_by(user_id=user_id)
    print('DOGGOS from api get all------------', dogs)
    return {"dogs": [dog.to_dict() for dog in dogs]}

#Crate a new dog
@dog_routes.route('/', methods=['POST'])
def create_dog():
    form = NewDogForm()
    if form.validate_on_submit():
        dog = Dog(form.name.data, form.breed.data, form.age.data, form.image_url.data, form.user_id, form.dog_total_distance, form.dog_total_duration, form.dog_total_walks)
        db.session.add(dog)
        db.session.commit()
        return dog.to_dict()
    # return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    return "bad data"
# update a dog
# @dog_routes.route('/<int:dog_id>', methods=['PUT'])
# def update_dog(dog_id):
#     dog = Dog.query.get(dog_id)
    

# Remove Doggo



