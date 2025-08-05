import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

const AIChatbot = () => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  return (
    <div className="fixed z-50">
      {/* Chatbot Toggle Button */}
      <button
        className="fixed bottom-6 right-6 bg-pink-700 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition"
        onClick={() => setIsChatbotVisible(!isChatbotVisible)}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chatbot Container */}
      {isChatbotVisible && (
        <div className="fixed bottom-20 right-6 w-80 h-[500px] bg-black shadow-lg border rounded-lg flex flex-col shadow-pink-800">
          {/* Chatbot Header */}
          <div className="bg-black text-white px-4 py-2 flex justify-between items-center">
            <span>Chatbot</span>
            <button onClick={() => setIsChatbotVisible(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chatbot Iframe */}
          <iframe
            src="https://app.thinkstack.ai/bot/previews/iframeview.html?bot=aHR0cHM6Ly9hcHAudGhpbmtzdGFjay5haS9ib3QvaW5kZXguaHRtbD9jaGF0Ym90X2lkPTY3ZDgxYWY5NmJmZDdmMWY2NjdmMWVmOSZ0eXBlPWlubGluZQ=="
            frameBorder="0"
            width="100%"
            height="100%"
            style={{ minHeight: "500px" }}
            title="AI Chatbot"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default AIChatbot;