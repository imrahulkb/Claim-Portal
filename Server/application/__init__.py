from flask import Flask
from .models import db

def create_app():
    """Initialize the core application."""
    app = Flask(__name__, instance_relative_config=False, static_folder='dist', static_url_path='/')
    app.config.from_object('config.Config')

    db.init_app(app)

    with app.app_context():
        # Imports
        from .routes import api
        app.register_blueprint(api)

        @app.route('/', defaults={'path': ''})
        @app.route('/<path:path>')
        def _(path):
            return app.send_static_file('index.html')

        return app
        