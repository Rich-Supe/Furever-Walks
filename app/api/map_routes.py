# import from config.py
from app.config import Config
from flask import Blueprint, jsonify

googleMapsAPIKey = {Config.GOOGLE_MAPS_API_KEY}

map_routes = Blueprint('maps', __name__)

#key
@map_routes.route('/key')
def maps_key():
    print("MAPS API KEY ================", googleMapsAPIKey)
    return googleMapsAPIKey

