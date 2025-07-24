import React, { useEffect, useState } from 'react';

function Workouts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImage_url] =useState("")
  const [duration, setDuration] = useState("");
  const [workouts, setWorkouts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [user, setUser] = useState({ role: "member" });
   
  const inputStyle = {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #444",
    backgroundColor: "#222",
    color: "white",
    width: "100%",
    
  };
  
  const buttonStyle = {
    padding: "10px 10px",
    borderRadius: "0px",
    border: "none",
    backgroundColor: "#black",
    color: "white",
    cursor: "pointer",
  };
  
       
      
        

    


  
    useEffect(() => {

      const loggedInUser = JSON.parse(localStorage.getItem("user")); // or fetch from context
    if (loggedInUser) {
      setUser(loggedInUser)
    }
    fetch('http://127.0.0.1:5000/workouts', {
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => {
        setWorkouts(data);
      })
      .catch(err => console.error("Error loading workouts:", err));
  }, []);

    function handleSubmit(e) {
      e.preventDefault();

      const new_workout = { title, description, image_url, duration };

      if (editingId) {
        console.log(editingId)
      
        fetch(`http://127.0.0.1:5000/workouts/${editingId.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(new_workout)
        })
          .then(res => res.json())
          .then(updated => {
            setWorkouts(workouts.map(w => w.id === updated.id ? updated : w));
            setEditingId(null)
            resetForm();
          
          })
          .catch(err => console.error("Failed to update workout:", err));
      } else {
      

        fetch('http://127.0.0.1:5000/workouts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(new_workout)
        })
          .then(res => res.json())
          .then(data => {
          console.log("Workout created:", data);
          setWorkouts([...workouts, data]);
          resetForm();
        })
        .catch(err => console.error("Failed to create workout:", err));

         
        
    }
  }

    function handleEdit(w) {
      setTitle(w.title);
      setDescription(w.description);
      setImage_url(w.image_url);
      setDuration(w.duration);
      setEditingId(w);
    }

    function handleDelete(id) {
      if (window.confirm()) {
        fetch(`http://127.0.0.1:5000/workouts/${id}`, {
          method: 'DELETE'
        })
          .then(res => {
            if (res.ok) {
              setWorkouts(workouts.filter(w => w.id !== id));
            }
          })
          .catch(err => console.error("Failed to delete workout:", err));
      }
    }

    function resetForm() {
      setTitle('');
      setDescription('');
      setImage_url('');
      setDuration('');
      setEditingId(null);
    }
    const isTrainer = user.role === "trainer";
  
    return (
        <div
        style={{
        maxWidth: "1900px",
        margin: "auto",
        padding: "0px",
        backgroundColor: "#000",
        color: "white",
        fontFamily: "Segoe UI, sans-serif",
        minHeight: "100vh",
      }}
    >
      <h2
        id="train"
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#28a745",
        }}
      >
        🧑‍🏫 TRAINERS ONLY
      </h2>
        
      {isTrainer && (
      <form
        id="form"
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#111",
          padding: "20px",
          borderRadius: "18px",
          boxShadow: "0 4px 12px rgba(255, 255, 255, 0.05)",
          marginBottom: "150px",
          display: "grid",
          gap: "12px",
        }}
      >
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          placeholder="Image_url"
          value={image_url}
          onChange={(e) => setImage_url(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          placeholder="Duration (mins)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
          style={inputStyle}
        />
        
        <div style={{ display: "flex", gap: "10px" }}>
          <button type="submit" style={buttonStyle}>
            {editingId ? "Update " : "Create"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              style={{ ...buttonStyle, backgroundColor: "#dc3545" }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
      )}    
      <h1
        id="h2"
        style={{
          textAlign: "left",
          color: "#ffc107",
          marginBottom: "40px",
        }}
      >
        🏋️ Available Workouts
      </h1>

      <div
        style={{
          backgroundColor: "black",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {workouts.map((w) => (
          <div
            key={w.id}
            style={{
              backgroundColor: "#1a1a1a",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(255, 255, 255, 0.05)",
              // height: "500px"
            }}
          >
            <img
                src={w.image_url}
                alt={workouts.title}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  borderColor:"black",
                  marginBottom: "auto"
                }}
              />
            

            <h1 style={{ color: "#28a745", marginBottom: "0px", height: "10px" }}>{w.title}</h1>
            <p style={{ color: "#ccc", fontSize: "20px", height:"10px" }}>{w.description}</p>
            <p style={{ color: "#999" }}>⏱ {w.duration} mins</p>

            <div style={{ marginTop: "5px", display: "flex", gap: "20px", backgroundColor:"black" }}>
            {isTrainer && (
              <>
              <button onClick={() => handleEdit(w)} style={buttonStyle}>
                Edit
              </button>
              <button
                onClick={() => handleDelete(w.id)}
                style={{ ...buttonStyle, backgroundColor: "#dc3545" }}
              >
                Delete
                
              </button>
              </>
            )}
            </div>
          </div>
            
        ))}
      </div>
    </div>
  );
}


export default Workouts;