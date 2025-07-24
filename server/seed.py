from app import app, db
from models import db, Users, GymClass , Bookings, Progress, Workouts
from datetime import datetime


def seed():
    with app.app_context():
            print("Clearing existing data...")
           
            db.drop_all()
            db.create_all()

    
            print("Seeding users...")
            users = [
                Users(name='Job', email='job@gmail.com', password='6578975', role='Trainer'),
                Users(name='Allen', email='allen@gmail.com', password='765567', role='Member'),
                Users(name='Ben', email='ben@gmail.com', password='53424', role='Trainer'),
                Users(name='Alice', email='alice@gmail.com', password='67832', role='Member'),
                Users(name="Allison", email="allison@example.com", password="password123", role="Member"),
                Users(name="Bob", email="bob@example.com", password="password123", role="Trainer"),
                Users(name="Carol", email="carol@example.com", password="password123", role="Member"),
                Users(name="Dave", email="dave@example.com", password="password123", role="Trainer"),
                Users(name="Eve", email="eve@example.com", password="password123", role="Member"),
                Users(name="Frank", email="frank@example.com", password="password123", role="Trainer"),
                Users(name="Grace", email="grace@example.com", password="password123", role="Member")
]
            db.session.add_all(users)
            db.session.commit()

            print(" Seeding Users complete..")


            print("Seeding gym classes...")
            gym_classes= [
                GymClass(title='Morning yoga', user_id=users[0].id,time=datetime(2025,6,25,7,30)),
                GymClass(title='Hit blast', user_id=users[1].id, time=datetime(2025,9,8,8,54)),
                GymClass(title='Evening walk', user_id=users[2].id, time=datetime(2025,2,6,9,10)),
                GymClass(title="Pilates", user_id=users[3].id, time=datetime(2025,10,7,5,18)),
                GymClass(title="Zumba", user_id=users[4].id, time=datetime(2025,11,5,19)),
                GymClass(title="Strength Training", user_id=users[5].id, time=datetime(2025,4,23,7,40)),
                GymClass(title="Boxing Basics", user_id=users[6].id,time=datetime(2025,6,3,13,20)),
                GymClass(title="Spin Class", user_id=users[7].id, time=datetime(2025,12,4,3,11)),
                GymClass(title="Core Crusher", user_id=users[8].id, time=datetime(2025,6,6,7,30)),
                GymClass(title="Mobility Flow", user_id=users[9].id, time=datetime(2025,4,22,6,21)),
                GymClass(title="Full Body Bootcamp", user_id=users[10].id, time=datetime(2025,6,3,7,32)),
            ]
            db.session.add_all(gym_classes)
            db.session.commit()
    
            print("Seeding Bookings...")
            bookings= [
                 Bookings(user_id=users[0].id, gymclass_id=gym_classes[0].id),
                 Bookings(user_id=users[1].id, gymclass_id=gym_classes[1].id),
                 Bookings(user_id=users[2].id, gymclass_id=gym_classes[2].id),

            ]
            db.session.add_all(bookings)
            db.session.commit()

            print("Bookings Seeding complete..")

            print("Seeding Progress")
            progress=[
                Progress(user_id=users[0].id, weight=70, notes="Looking for flexibility improvement"),
                Progress(user_id=users[1].id, weight=60, notes="Preparing for a marathon"),
                Progress(user_id=users[2].id, weight=59, notes="Strength training for upper body"),
            ]
            db.session.add_all(progress)
            db.session.commit()

            print("Progress seeded successfully")

            print("Seeding workouts")
            workouts=[
                Workouts(title='Chest Day', description='Bench press, push-ups, and dips.', image_url="https://media.istockphoto.com/id/2177919347/photo/african-american-athletic-woman-exercising-in-plank-position-in-a-gym.jpg?s=612x612&w=0&k=20&c=QonFlvJFdoIV_5e-pAsd5jQsIWXURvFTl-fFH-6azzk=", duration=45),
                Workouts(title='Leg Day', description='Squats, lunges, and leg press.', image_url="https://media.istockphoto.com/id/1287874606/photo/muscular-man-using-weights-machine-for-legs-at-the-gym-hard-training.jpg?s=612x612&w=0&k=20&c=dOU3rsfCKO_9XvfgNqJ4wJA6ZIdI3BLAgpAFomEgR54=" ,duration=60),
                Workouts(title='Cardio Burn', description='Treadmill, cycling, and jumping rope.', image_url="https://media.istockphoto.com/id/868604012/photo/sportive-young-lady-doing-crisscross-crunch-exercise-lying-on-a-rug-at-modern-studio.jpg?s=612x612&w=0&k=20&c=ODHecGmRRgUFVCHa9W1ILpgtRYVaM-xeL9jQYe0xOvQ=", duration=30),
                Workouts(title='Full Body Circuit', description='Mix of strength and cardio exercises.', image_url="https://media.istockphoto.com/id/2205693259/photo/woman-using-back-exercise-machine-in-gym.jpg?s=612x612&w=0&k=20&c=6tQ_rn2n1NdI0NHALAdj9nfXRe1WT95_-wh95wE4604=", duration=50),
                Workouts(title="Push Day", description="Enhance joint mobility and muscle flexibility.",image_url="https://media.istockphoto.com/id/2205693103/photo/woman-using-leg-press-machine-in-gym.jpg?s=612x612&w=0&k=20&c=NQYhlculW_3IOG63RxPfTUQ0bZiM1asgjGK-k0dFvVg=",duration=45,),
                Workouts(title="Cardio Blast",description="High-intensity interval training to improve heart health.",image_url="https://media.istockphoto.com/id/2218631728/photo/focused-man-performing-battle-rope-lunges-with-intense-determination-while-male-trainer.jpg?s=612x612&w=0&k=20&c=-PeLkKrHoozW3FS0AG4fTH5Hl8pIfF39usoBrwQZ1Ds=",duration=30, ),
                Workouts(title="Stretch & Recover", description="Low-intensity flexibility and recovery session.",image_url="https://media.istockphoto.com/id/2209789955/photo/group-of-people-having-pilates-workout-on-equipment.jpg?s=612x612&w=0&k=20&c=bSdNYQRc-o1-zwba3yXnhku7S4woEy5EkEzytcKAcC0=",duration=40, ),
                Workouts(title="Core Stability", description="Engage core muscles with stability and control.",image_url="https://media.istockphoto.com/id/2197916106/photo/athlete-performing-push-up-exercise-on-balance-trainer-in-outdoor-park-setting-during-late.jpg?s=612x612&w=0&k=20&c=Y4Lx7PkZcQO4H4PMC5mdjQUrEJxYiQdBVrjIOQDZQLo=",duration=30, ),
                Workouts(title="Endurance Ride", description="Stationary bike workout focused on endurance and stamina.",image_url="https://media.istockphoto.com/id/1127485222/photo/gym-training-on-stationary-bikes.jpg?s=612x612&w=0&k=20&c=iBD_Cksse1_7FRoWgnxMI1fz34eheOEUexYzGYIEaDI=",duration=50, ),
                Workouts(title="Bodyweight Circuit", description="No equipment needed; full-body bodyweight routine.",image_url="https://media.istockphoto.com/id/935818668/photo/fit-and-flexible.jpg?s=612x612&w=0&k=20&c=vKrz5fhf0MUnuIYcyC9Vt1p1Le3WljTPPAeTzbkF_Ms=",duration=35, ),
                Workouts(title="Dumbbell Strength",description="Strength training using dumbbells for all major groups.",image_url="https://media.istockphoto.com/id/503416862/photo/man-ready-to-exercise-with-kettle-bell.jpg?s=612x612&w=0&k=20&c=LOP7VZUq1-A7Ct4kMkxXp8UV5hUahetCliwef9tiQoI=", duration=40, ),
                Workouts(title="Mobility and Flexibility", description="Enhance joint mobility and muscle flexibility." ,image_url="https://media.istockphoto.com/id/1727562161/photo/wellness-gym-or-woman-stretching-body-or-ready-to-start-gymnastics-performance-in-yoga.jpg?s=612x612&w=0&k=20&c=TRJ9W6Dohq81e218f0r10jC9ajJiOHLx-2dyDx01LLc=", duration=25,)
            ]
            db.session.add_all(workouts)
            db.session.commit()

            print("Workouts seeded successfuly")











if __name__ == '__main__':
   seed()
      
        