from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField
from wtforms.validators import ValidationError, DataRequired
from app.models import Dog


class NewWalkForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    distance = StringField('distance', validators=[DataRequired()])
    duration = StringField('duration', validators=[DataRequired()])
    # date = StringField('date', validators=[DataRequired()])
    rating = StringField('rating')
    finished = BooleanField('finished')
    routeData = StringField('routeData')
    user_id = StringField('user_id', validators=[DataRequired()])
