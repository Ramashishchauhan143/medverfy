import { useState } from "react";

function Feedback() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating || !comment) {
      alert("Please fill all fields");
      return;
    }

    setSubmitted(true);
  };

  return (
   <div
  style={{
    maxWidth: "500px",
    margin: "50px auto",
    padding: "25px",
    borderRadius: "20px",

    // 🔥 DARK PREMIUM CARD
    background: "linear-gradient(145deg, #020617, #0f172a)",
    border: "1px solid rgba(255,255,255,0.08)",

    // 🔥 glow shadow
    boxShadow: "0 25px 60px rgba(0,0,0,0.8), 0 0 20px rgba(37,99,235,0.15)"
  }}
>
  <h3
    style={{
      textAlign: "center",
      marginBottom: "20px",
      color: "white",
      letterSpacing: "1px"
    }}
  >
    💬 Share Your Feedback
  </h3>

  {submitted ? (
    <div style={{ textAlign: "center" }}>
      <h4 style={{ color: "#22c55e" }}>✅ Thank You!</h4>
      <p style={{ color: "#cbd5f5" }}>
        Your feedback helps us improve the system.
      </p>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>

      {/* ⭐ STAR RATING */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              fontSize: "30px",
              cursor: "pointer",

              // 🔥 glowing star
              color:
                star <= (hover || rating) ? "#facc15" : "#334155",

              textShadow:
                star <= (hover || rating)
                  ? "0 0 10px rgba(250,204,21,0.8)"
                  : "none",

              transition: "0.2s"
            }}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            ⭐
          </span>
        ))}
      </div>

      {/* COMMENT */}
      <textarea
        placeholder="Write your experience..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.1)",
          minHeight: "110px",
          marginBottom: "18px",

          // 🔥 dark input
          background: "#020617",
          color: "white",
          outline: "none"
        }}
      />

      {/* BUTTON */}
      <button
        type="submit"
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          color: "white",

          // 🔥 gradient + glow
          background: "linear-gradient(135deg, #2563eb, #1e40af)",
          boxShadow: "0 5px 20px rgba(37,99,235,0.6)",

          transition: "0.3s"
        }}
        onMouseEnter={(e) =>
          (e.target.style.transform = "scale(1.03)")
        }
        onMouseLeave={(e) =>
          (e.target.style.transform = "scale(1)")
        }
      >
        Submit Feedback
      </button>
    </form>
  )}
</div>
  );
}

export default Feedback;