from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, db
from app.forms import SignupForm

user_routes = Blueprint('users', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


# Get user info
@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


# Update user info
@user_routes.route('/<int:id>', methods=['PUT'])
@login_required
def updateInfo(id):
    data = request.get_json()
    user = User.query.get(id)
    user.name = data['name']
    user.username = data['username']
    user.bio = data['bio']
    user.email = data['email']
    user.password = data['password']
    db.session.commit()
    return user.to_dict()


# Delete user
@user_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def deleteUser(id):
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()
    return 
    
