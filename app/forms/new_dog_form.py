from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, 
from wtforms.validators import ValidationError, DataRequired
from app.models import Dog

class NewDogForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    age = IntegerField('age', validators=[DataRequired()])
    breed = StringField('breed', validators=[DataRequired()])
    image_url = StringField('image_url')
    user_id = IntegerField('user_id')
    dog_total_distance = IntegerField('dog_total_distance', validators=[DataRequired()])
    dog_total_duration = IntegerField('dog_total_duration', validators=[DataRequired()])
    dog_total_walks = IntegerField('dog_total_walks', validators=[DataRequired()])

