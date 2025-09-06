import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const aiMsg = { role: "assistant", text: data.reply };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-500 flex flex-col items-center justify-center p-6">
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-lg w-full max-w-md p-6">
        
        {/* 👇 این اسم رو می‌تونی راحت تغییر بدی */}
        <h2 className="text-white text-2xl mb-4 text-center">Hamvaar Terapist</h2>
        
        <div className="h-64 overflow-y-auto mb-4 p-2 bg-white/10 rounded-lg">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`${m.role === "user" ? "text-right" : "text-left"} mb-3`}
            >
              <span
                className={`inline-block px-3 py-2 rounded-xl ${
                  m.role === "user"
                    ? "bg-blue-500 text-white"     // پیام‌های کاربر
                    : "bg-gray-200 text-gray-800"  // پیام‌های هوش مصنوعی
                }`}
              >
                {m.text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            className="flex-1 p-2 rounded-lg text-white bg-white/10 placeholder-white/60 focus:outline-none"
            placeholder="پیامت رو بنویس..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            className="px-4 bg-white/30 text-white rounded-lg hover:bg-white/50 transition"
            onClick={handleSend}
          >
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
