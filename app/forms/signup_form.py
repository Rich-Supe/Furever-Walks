from flask_wtf import FlaskForm
from wtforms import StringField, HiddenField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignupForm(FlaskForm):
    name=StringField('name', validators=[DataRequired("Please input a name")])
    username = StringField(
        'username', validators=[DataRequired("Please input a username"), username_exists])
    email = StringField('email', validators=[DataRequired("Please input an email"), user_exists])
    password = StringField('password', validators=[DataRequired("Please input a password")])
    image_url = HiddenField('image_url')
    bio = StringField('bio')
    user_total_distance = IntegerField('user_total_distance')
    user_total_duration = IntegerField('user_total_duration')
    user_total_walks = IntegerField('user_total_walks')
