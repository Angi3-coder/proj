import React from "react";

function Home() {
  return (
    <div
      style={{
        fontFamily: "Segoe UI, sans-serif",
        color: "#fff",
        backgroundColor: "#000",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1599059813957-37ec2c8f3d4a?auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        padding: "50px 20px",
      }}
    >
      {/* HERO Section */}
      <section
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          padding: "40px",
          borderRadius: "16px",
          marginBottom: "60px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            color: "#28a745",
            marginBottom: "20px",
            letterSpacing: "2px",
          }}
        >
          CORE CULT
        </h1>
        <p
          style={{
            fontSize: "43px",
            lineHeight: "1.6",
            maxWidth: "1500px",
            margin: "auto",
            backgroundImage:"url('https://media.istockphoto.com/id/1758416916/photo/excercise-equipment-in-a-modern-gym.jpg?s=612x612&w=0&k=20&c=m6kXcTSXHboGOMUFjgVd0-YQi77Vq_gcrtt80obfDFg=')",
            backgroundSize:"cover",
            paddingBottom:"170px",
            color:"orange"
          }}
        >
          At <strong>Core Cult</strong>, we don’t just train — we **commit**. This is more than a gym; it’s your
          transformation zone. Whether you’re building strength, grinding out endurance, or unlocking
          your full potential — this is your sanctuary.
        </p>
      </section>

      {/* OFFERINGS Section */}
      <section
        style={{
          backgroundColor: "rgba(20, 20, 20, 0.9)",
          padding: "30px",
          borderRadius: "12px",
          marginBottom: "50px",
        }}
      >
        <h2
          style={{
            fontSize: "60px",
            color: "#ffc107",
            marginBottom: "20px",
            borderBottom: "2px solid #ffc107",
            paddingBottom: "10px",
          }}
        >
          💥 What We Offer
        </h2>
        <ul style={{ fontSize: "29px", lineHeight: "1.8" }}>
          <li>🏋️‍♂️ <strong>Strength Training</strong>: Barbells, dumbbells, power racks, and heavy beats.</li>
          <li>🔥 <strong>Functional Fitness</strong>: HIIT circuits, mobility flows, and core mastery.</li>
          <li>👥 <strong>Group Energy</strong>: High-intensity classes that push you harder together.</li>
          <li>🎯 <strong>Personal Coaching</strong>: Goal-driven programs with real, lasting results.</li>
          <li>🧘 <strong>Recovery Zone</strong>: Roll it out, breathe it in, bounce back stronger.</li>
        </ul>
      </section>

      {/* WHY CORE CULT Section */}
      <section
        style={{
          backgroundColor: "rgba(10, 10, 10, 0.95)",
          padding: "30px",
          borderRadius: "12px",
          backgroundImage:"url('https://media.istockphoto.com/id/2027278927/photo/young-athletic-woman-exercising-with-barbell-during-sports-training-in-a-gym.jpg?s=612x612&w=0&k=20&c=ifFL7Mqc8NwTj25PAx4ONy1OOQZvc1S_kVOofsbLgFw=')",
          backgroundSize:"cover",
          paddingBottom:"40px"
        }}
      >
        <h2
          style={{
            fontSize: "60px",
            color: "orange",
            marginBottom: "20px",
            borderBottom: "2px solidrgb(1, 5, 6)",
            paddingBottom: "10px",
          }}
        >
          ⚡ Why Core Cult?
        </h2>
        <ul style={{ fontSize: "33px", lineHeight: "1.8" ,color:"orange"}}>
          <li>⏱️ <strong>24/7 Access</strong>: Because legends don’t punch clocks.</li>
          <li>💪 <strong>Cult Community</strong>: Relentless, raw, and unapologetically strong.</li>
          <li>🏢 <strong>Industrial Aesthetic</strong>: A space built for sweat and success.</li>
          <li>📍 <strong>Rooted in Nairobi</strong>: Locally grown. Globally fierce.</li>
        </ul>
      </section>

      {/* CONTACT / JOIN THE CULT Section */}
      <section
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          padding: "40px",
          borderRadius: "12px",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            fontSize: "50px",
            color: "#e83e8c",
            marginBottom: "20px",
            borderBottom: "2px solid #e83e8c",
            paddingBottom: "10px",
            paddingTop:"60px"
          }}
        >
          🫱 JOIN THE CULT
        </h2>
        <p style={{ fontSize: "38px", marginBottom: "20px" }}>
          Ready to change your life? Reach out now or visit us at our facility!
        </p>
        <p style={{ fontSize: "36px", marginBottom: "10px" }}>
          📞 <strong>Call:</strong> +254 792648398
        </p>
        <p style={{ fontSize: "36px", marginBottom: "10px" }}>
          📧 <strong>Email:</strong> join@corecult.fit
        </p>
        <p style={{ fontSize: "36px", marginBottom: "10px" }}>
          📍 <strong>Visit:</strong> Core Cult Gym, Ngong Road, Nairobi
        </p>
        <a
          href="/signup"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "13px 28px",
            backgroundColor: "#28a745",
            color: "#fff",
            borderRadius: "6px",
            fontWeight: "bold",
            fontSize: "16px",
            textDecoration: "none",
            transition: "0.3s",
          }}
        >
          Become a Member 💪
        </a>
      </section>
    </div>
  );
}
    

export default Home;
