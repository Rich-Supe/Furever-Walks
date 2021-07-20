from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, DateTimeField, BooleanField
from wtforms.validators import ValidationError, DataRequired
from app.models import Dog


class NewWalkForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    distance = FloatField('distance', validators=[DataRequired()])
    duration = IntegerField('duration', validators=[DataRequired()])
    date = DateTimeField('date', validators=[DataRequired()])
    rating = IntegerField('rating')
    status = BooleanField('status')
    routeData = StringField('routeData')
    user_id = IntegerField('user_id', validators=[DataRequired()])
