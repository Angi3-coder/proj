import React, { useEffect, useState } from 'react'

function Bookings() {

    const [user_id, setUser_id]=useState('')
    const [gymclass_id,setGymclass_id] =useState('')
    const [booking, setBooking]=useState([])

    const new_booking={user_id, gymclass_id}





    
        useEffect(()=>{
            fetch('/progress')
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setBooking(data);
            })
            .catch(err => console.error("Error loading Booking:", err));
        },[])
    
        function handleSubmit() {
            fetch('http://127.0.0.1:5000/bookings', {
                method:'POST',
                headers: {
                    'Content-Type':"application/json"
                },
                body:JSON.stringify(new_booking)
            })
            .then(res=>res.json())
            .then(data=> {
                console.log(data)
                setUser_id('')
                setGymclass_id('')
                setBooking([...booking,data])
            })
            .catch(err=> console.error("Failed to load bookings:", err))
        }
    
    


    return (
    <div>
        
        <ul onChange={handleSubmit}>
        <h1 id='bok'>See your current bookings</h1>
        {booking.map((b, index) => (
          <li key={index}>
            <strong>{b.user_id}</strong>:  ({b.gymclass_id})
          </li>
        ))}
      </ul>
    </div>
    
  )
}

export default Bookings