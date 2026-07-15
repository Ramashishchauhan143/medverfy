import React from "react";

function Gallery() {

  const media = [
    // Images
    { type: "image", src: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/15315/18-HU611823.jpg" },
    { type: "image", src: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/6737/18-CG163311.jpg" },
    { type: "image", src: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/5044/20-SM134215.jpg" },
    { type: "image", src: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/5044/20-SM135038.jpg" },

    // Extra images (same style)
    { type: "image", src: "https://images.unsplash.com/photo-1588776814546-ec7e1c9a5a7f" },
    { type: "image", src: "https://images.unsplash.com/photo-1580281657527-47d2c8b6b8f0" },
    { type: "image", src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },

    // Videos (free demo videos)
    {
      type: "video",
      src: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      type: "video",
      src: "https://www.w3schools.com/html/movie.mp4"
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Premium Media Gallery</h1>
      <p style={styles.subtext}>
        Explore medicines through images and videos.
      </p>

      <div style={styles.grid}>
        {media.map((item, idx) => (
          <div key={idx} style={styles.card} className="card">

            {item.type === "image" ? (
              <img src={item.src} alt="gallery" style={styles.image} />
            ) : (
              <video
                src={item.src}
                style={styles.image}
                controls
              />
            )}

            <div style={styles.overlay}>
              <h3>Item #{idx + 1}</h3>
              <p>{item.type === "image" ? "Medicine Image" : "Medicine Video"}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "50px 20px",
    fontFamily: "Poppins, sans-serif",
    background: "linear-gradient(to right, #f8fbff, #eef4ff)",
    minHeight: "100vh"
  },

  heading: {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#1e293b"
  },

  subtext: {
    textAlign: "center",
    marginBottom: "40px",
    color: "#64748b"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px"
  },

  card: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "18px",
    cursor: "pointer",
    transition: "all 0.4s ease"
  },

  image: {
    width: "100%",
    height: "240px",
    objectFit: "cover",
    borderRadius: "18px"
  },

  overlay: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    padding: "20px",
    background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
    color: "white",
    opacity: "0",
    transition: "0.4s"
  }
};

// Hover effect
setTimeout(() => {
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
      card.querySelector("div").style.opacity = "1";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "none";
      card.querySelector("div").style.opacity = "0";
    });
  });
}, 500);

export default Gallery;