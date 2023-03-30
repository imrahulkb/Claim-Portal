# Claim-Portal

for Frontend: npm run dev
for backend: npm run start

on front end, add /dashboard to the url to access the dashboard.

db schema: server/db/schema.sql

to run the backend,

add your database credentials in .env file

run models.py once to create the tables in the database.

1. create a virtual environment: `python3 -m venv .venv`
2. activate the virtual environment: `source .venv/bin/activate`
3. install the dependencies: `pip install -r requirements.txt`
4. launch the development server: `flask run` or launch the production server: `gunicorn wsgi:application`

I am documenting the expected api calls and responses here in REST.json. This is a work in progress. Update as required.
