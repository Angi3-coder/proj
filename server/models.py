from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

# User model
class Users(db.Model):
    __tablename__ = 'Users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(30), unique=True, nullable=False)
    password = db.Column(db.String(250), nullable=False)
    role = db.Column(db.String, nullable=False) 

    gym_classes = db.relationship('GymClass', back_populates='user', cascade='all, delete-orphan')
    bookings = db.relationship('Bookings', back_populates='user', cascade='all, delete-orphan')
    progress = db.relationship('Progress', back_populates='user', cascade='all, delete-orphan')
    registrations=db.relationship('Registration', back_populates='user', cascade='all, delete-orphan')

# Workouts model
class Workouts(db.Model):
    __tablename__ = 'workouts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    duration = db.Column(db.Integer)
    image_url=db.Column(db.String, nullable=False)



# GymClass model
class GymClass(db.Model):
    __tablename__ = 'gymclasses'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('Users.id'), nullable=False)
    time = db.Column(db.DateTime)

    user = db.relationship('Users', back_populates='gym_classes')
    bookings = db.relationship('Bookings', back_populates='gym_class', cascade='all, delete-orphan')
    registrations=db.relationship('Registration', back_populates='gym_class', cascade='all, delete-orphan')
    

# Bookings model
class Bookings(db.Model):
    __tablename__ = 'Bookings'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('Users.id'), nullable=False)
    gymclass_id = db.Column(db.Integer, db.ForeignKey('gymclasses.id'), nullable=False)

    user = db.relationship('Users', back_populates='bookings')
    gym_class = db.relationship('GymClass', back_populates='bookings')


# Progress model
class Progress(db.Model):
    __tablename__ = 'Progress'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('Users.id'), nullable=False)
    weight = db.Column(db.Integer, default=0, nullable=False)
    notes = db.Column(db.String, nullable=False)

    user = db.relationship('Users', back_populates='progress')

#Registration model
class Registration(db.Model):
    __tablename__='registration'

    id=db.Column(db.Integer,primary_key=True)
    user_id=db.Column(db.Integer, db.ForeignKey('Users.id'), nullable=False)
    gymclass_id=db.Column(db.Integer, db.ForeignKey('gymclasses.id'), nullable=False)
    date=db.Column(db.DateTime)
    
    user=db.relationship('Users', back_populates='registrations')
    gym_class=db.relationship('GymClass', back_populates='registrations')
