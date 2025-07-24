from flask import Flask, jsonify, request, session
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from models import db,Users, GymClass ,Bookings, Progress, Workouts
from datetime import timedelta


app = Flask(__name__)
app.secret_key='My secret key'
CORS(app, supports_credentials=True, origins=['http://localhost:3000'])


# Configure database URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///gym.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#session timeout - auto logout after 30mins
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(hours=2)

db.init_app(app)
migrate=Migrate(app,db)


@app.route('/')
def Home():
    return "Welcome to my home page"


#get users
@app.route('/users',methods=['GET'])
def get_users():
    users=Users.query.all()
    output=[]

    for user in users:
        user_Dict={
            'id':user.id,
            'email':user.email,
            'password':user.password,
            'role':user.role
        }
        output.append(user_Dict)
    return jsonify(output)


#Add user
@app.route('/signup', methods=['POST'])
def add_user():
    data =request.get_json()
    new_user=Users(name=data['name'],email=data['email'], password=data['password'], role=data['role'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message":"User Created Successfully"}),201

#login user
@app.route('/login', methods=['POST'])
def login():
    data=request.get_json()
    user=Users.query.filter_by(name=data['name']).first()
    

    if user and user.password==data['password']:
        session.permanent = True
        session['user_id'] = user.id   

        return jsonify({"Message":"Logged in successfully","role": user.role})

    return jsonify({"Error":"Invalid Name or Password"})


#logout user
@app.route('/logout', methods=['POST'])
def logout():
    session.pop('user_id', None)
    return jsonify({"Message": "Logged out successfully"})



@app.route('/profile')
def profile():
    user_id = session.get('user_id')

    if not user_id:
        return jsonify({'error': 'Not logged in'}), 401

    user = Users.query.get(user_id)

    if not user:
        return jsonify({'error': 'User not found'}), 404

    return jsonify({
        'id': user.id,
        'name': user.name,
        'email': user.email,
        'role': user.role,
        
    })

    
#Update users
@app.route('/users/<int:id>', methods=['PUT'])
def update_users(id):
    user=Users.query.get(id)
    data=request.get_json()
    user.name=data.get('name', user.name)
    user.email=data.get('email', user.email)
    user.password=data.get('password', user.password)
    user.role=data.get('role', user.role)

    
    db.session.commit()
    return jsonify({"Message": "User updated successully"})



#create workout plans
@app.route('/workouts', methods=['POST'])
def create_workouts():
    user_id = session.get('user_id')
    data=request.get_json()
    new_workout=Workouts(title=data['title'], user_id=data['user_id'],description=data['description'], duration=data['duration'])
    db.session.add(new_workout)
    db.session.commit()
    user = Users.query.get(user_id)

    if user["role"] != "trainer":
        return jsonify({"error": "Unauthorized"}), 403

    return jsonify({"Message": "Workout created successfully"})





#Update workout
@app.route('/workouts/<int:id>', methods=['PATCH'])
def update_workouts(id):
    workout=Workouts.query.get(id)
    data=request.get_json()
    workout.title=data.get('title', workout.title)
    workout.description=data.get('description', workout.description)
    workout.user_id=data.get('user_id',workout.user_id)
    workout.duration=data.get('duration', workout.duration)

    db.session.commit()
    return jsonify({"Message": "Workout updated successully"})

#delete workout
@app.route('/workouts/<int:id>', methods=['DELETE'])
def delete_workout(id):
    workout=Workouts.query.get(id)
    db.session.delete(workout)
    db.session.commit()

    return jsonify({"Message":"Workout Deleted"})






#get workouts
@app.route('/workouts', methods=['GET'])
def get_workouts():
    workouts=Workouts.query.all()
    output =[]

    for workout in workouts:
        workout_Dict={
            'id':workout.id,
            'title':workout.title,
            'description':workout.description, 
            'duration':workout.duration,
            'image_url':workout.image_url
        }
        output.append(workout_Dict)
    return jsonify(output)

#get gymclass
@app.route('/gymclass', methods=['GET'])
def get_gymclass():
    gymclasses=GymClass.query.all()
    output=[]

    for gymclass in gymclasses :
        gymclassD={
            "id":gymclass.id,
            "title":gymclass.title,
            "user_id":gymclass.user_id,
            "time":gymclass.time
        }
        output.append(gymclassD)
    return jsonify(output)


#post bookings
@app.route('/bookings', methods=['POST'])
def book_class():
    user_id = session.get('Users_id')
    data = request.get_json()
    gymclass_id = data.get('gymclasses_id')

    if not user_id:
        return jsonify({'error': 'Not logged in'}), 401

    
    existing = Bookings.query.filter_by(user_id=user_id, gymclass_id=gymclass_id).first()
    if existing:
        return jsonify({'message': 'Already booked'}), 409

    new_booking = Bookings(user_id=user_id, gymclass_id=gymclass_id)
    db.session.add(new_booking)
    db.session.commit()

    return jsonify({'message': 'Booking successful'}), 201




#Get Bookings
@app.route('/bookings' ,methods=['GET'])
def get_bookings():
    bookings=Bookings.query.all()
    #create an empty list
    output=[]

    for booking in bookings:
        booking_dict={
            "id":booking.id,
            "user_id":booking.user_id,
            "gymclass_id":booking.gymclass_id,
        }
        output.append(booking_dict)
    return jsonify(output)


@app.route('/progress', methods=['POST'])
def post_progress():
    data=request.get_json()
    new_progress=Progress(weight=data['weight'], user_id=data['user_id'],notes=data['notes'])
    db.session.add(new_progress)
    db.session.commit()
    return jsonify({"Message":"Progress posted successfully"})






#get progress
@app.route('/progress', methods=['GET'])
def get_progress():
    progresses=Progress.query.all()
    output=[]

    for progress in progresses:
        progress_dict={
            "id":progress.id,
            "user_id":progress.user_id,
            "weight":progress.weight,
            "notes":progress.notes,
        }
        output.append(progress_dict)
    return jsonify(output)



if __name__=='__main__':
    app.run(port=5000,debug=True)

