from os import environ, path
from dotenv import load_dotenv

basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, '.env'))

class Config(object):
    SQLALCHEMY_DATABASE_URI = environ.get('SQLALCHEMY_DATABASE_URI')
    SQLALCHEMY_ECHO = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SERVER_NAME = environ.get('SERVER_NAME') or 'localhost:5000'
    DEBUG = True


class ProductionConfig(Config):
    """Production configuration."""
    DEBUG = False