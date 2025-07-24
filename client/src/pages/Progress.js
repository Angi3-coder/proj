import React, { useEffect, useState } from 'react'

function Progress() {

    const [weight, setWeight] =useState("")
    const [notes, setNotes]=useState("")
    const [user_id, setUser_id]=useState("")
    const [progress, setProgress] =useState([])

    const new_progress={weight,notes,user_id}


    useEffect(()=>{
        fetch('http://127.0.0.1:5000/progress')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setProgress(data);
        })
        .catch(err => console.error("Error loading Progress:", err));
    },[])

    function handleSubmit() {
        fetch('http://127.0.0.1:5000/progress', {
            method:'POST',
            headers: {
                'Content-Type':"application/json"
            },
            body:JSON.stringify(new_progress)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            setWeight('')
            setNotes('')
            setUser_id('')
            setProgress([...progress,data])
        })
        .catch(err=> console.error("Failed to load progress:", err))
    }



  
    return (
        <div
          style={{
            backgroundColor: "#000",
            color: "#fff",
            fontFamily: "Segoe UI, sans-serif",
            minHeight: "100vh",
            padding: "40px 20px",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1599058917212-d750089bc7f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
              margin: "auto",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 0 25px #e91e63",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                color: "#e91e63",
                marginBottom: "30px",
                fontSize: "36px",
                fontWeight: "bold",
              }}
            >
              🏋️‍♂️ Track Your Progress
            </h1>
    
            <form
              onSubmit={handleSubmit}
              style={{
                display: "grid",
                gap: "15px",
                backgroundColor: "#111",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "40px",
              }}
            >
              <input
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                //style={inputStyle}
              />
              <input
                placeholder="Notes (e.g. feeling strong 💪)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                required
                //style={inputStyle}
              />
              <input
                placeholder="User ID"
                value={user_id}
                onChange={(e) => setUser_id(e.target.value)}
                required
                //style={inputStyle}
              />
              <button type="submit" >
                ➕ Add Progress
              </button>
            </form>
    
            <h2
              style={{
                color: "#03dac6",
                fontSize: "28px",
                fontWeight: "600",
                marginBottom: "150px",
                borderBottom: "10px solid #333",
                paddingBottom: "19px",
              }}
            >
              📊  Progress Entries
            </h2>
    
            <div
              style={{
                display: "grid",
                gap: "20px",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                backgroundColor:"black"
              }}
            >
              {progress.map((p, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#1a1a1a",
                    padding: "10px",
                    borderRadius: "50px",
                    boxShadow: "0 4px 12px rgba(255, 255, 255, 0.05)",
                    border: "1px solid #333",
                  }}
                >
                  <h3 style={{ color: "#ffc107", fontSize: "22px" }}>
                    ⚖️ {p.weight} kg
                  </h3>
                  <p style={{ color: "#ccc", fontSize: "22px" }}>
                    🗒️ {p.notes}
                  </p>
                  <p style={{ color: "#888", fontSize: "14px" }}>👤 User ID: {p.user_id}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
export default Progress