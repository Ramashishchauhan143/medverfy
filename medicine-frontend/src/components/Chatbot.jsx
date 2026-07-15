import { useState, useRef, useEffect } from "react";

function Chatbot() {

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = message;

    setChat((prev) => [
      ...prev,
      {
        user: userMessage,
        bot: null
      }
    ]);

    setMessage("");

    try {

      setLoading(true);

      const res = await fetch(
        "http://localhost:5000/chat",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify({
            message: userMessage
          })
        }
      );

      const data =
        await res.json();

      setChat((prev) =>
        prev.map((item, index) =>
          index === prev.length - 1
            ? {
                ...item,
                bot: data.reply
              }
            : item
        )
      );

    }
    catch {

      setChat((prev) =>
        prev.map((item, index) =>
          index === prev.length - 1
            ? {
                ...item,
                bot: "Server Error"
              }
            : item
        )
      );

    }
    finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    chatEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });

  }, [chat, loading]);

  return (

    <div style={styles.container}>

      <div style={styles.header}>
        🤖 MedVerify Assistant
      </div>

      <div style={styles.chatArea}>

        {chat.map((c, i) => (

          <div
            key={i}
            style={{
              marginBottom: "12px"
            }}
          >

            <div
              style={{
                textAlign: "right"
              }}
            >
              <span style={styles.userMsg}>
                {c.user}
              </span>
            </div>

            {c.bot && (

              <div
                style={{
                  textAlign: "left",
                  marginTop: "6px"
                }}
              >
                <span style={styles.botMsg}>
                  {c.bot}
                </span>
              </div>

            )}

          </div>

        ))}

        {loading && (

          <div
            style={{
              textAlign: "left"
            }}
          >
            <span style={styles.botMsg}>
              🤖 Thinking...
            </span>
          </div>

        )}

        <div ref={chatEndRef}></div>

      </div>

      <div style={styles.inputArea}>

        <input
          type="text"
          placeholder="Ask about medicines..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={(e) =>
            e.key === "Enter" &&
            sendMessage()
          }
          style={styles.input}
        />

        <button
          onClick={sendMessage}
          style={styles.button}
        >
          ➤
        </button>

      </div>

    </div>

  );

}

const styles = {
  container: {
    maxWidth: "420px",
    margin: "40px auto",
    borderRadius: "22px",
    overflow: "hidden",
    background:
      "linear-gradient(145deg,#020617,#0f172a)",
    border:
      "1px solid rgba(255,255,255,0.08)",
    boxShadow:
      "0 25px 60px rgba(0,0,0,0.8)"
  },

  header: {
    padding: "16px",
    background:
      "linear-gradient(135deg,#2563eb,#1e40af)",
    color: "white",
    textAlign: "center",
    fontWeight: "600"
  },

  chatArea: {
    height: "320px",
    overflowY: "auto",
    padding: "15px",
    background: "#020617"
  },

  userMsg: {
    background:
      "linear-gradient(135deg,#2563eb,#3b82f6)",
    color: "white",
    padding: "9px 14px",
    borderRadius: "14px",
    display: "inline-block"
  },

  botMsg: {
    background: "#1e293b",
    color: "#e2e8f0",
    padding: "9px 14px",
    borderRadius: "14px",
    display: "inline-block",
    maxWidth: "90%",
    whiteSpace: "pre-wrap"
  },

  inputArea: {
    display: "flex",
    padding: "12px",
    background: "#020617"
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "12px",
    border:
      "1px solid rgba(255,255,255,0.1)",
    background: "#0f172a",
    color: "white"
  },

  button: {
    marginLeft: "10px",
    padding: "10px 16px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    color: "white",
    background:
      "linear-gradient(135deg,#2563eb,#1e40af)"
  }
};

export default Chatbot;