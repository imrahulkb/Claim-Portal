from os import environ, path
from dotenv import load_dotenv

basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, '.env'))

class Config(object):
    SQLALCHEMY_DATABASE_URI = f"mysql+pymysql://{environ.get('DB_USER')}:{environ.get('DB_PASSWORD')}@{environ.get('DB_HOST')}:{environ.get('DB_PORT')}/{environ.get('DB_NAME')}"
    SQLALCHEMY_ECHO = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SERVER_NAME = environ.get('SERVER_NAME')
    DEBUG = True


class ProductionConfig(Config):
    """Production configuration."""
    DEBUG = False