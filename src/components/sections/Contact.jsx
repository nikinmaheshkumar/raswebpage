import React, { useState } from "react";
import axios from "axios";
import { User, Mail, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showSuccessPopup = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 4000);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const payload = {
      access_key: import.meta.env.VITE_API_KEY,
      ...formData,
    };

    try {
      const response = await axios.post(import.meta.env.VITE_BASE_API_URL, payload, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.data.success) {
        showSuccessPopup();
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Failed to send:", response.data.message);
      }
    } catch (error) {
      console.error("Network Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const Field = ({ label, name, type = "text", Icon, isTextArea = false }) => (
    <div className="flex flex-col mb-5">
      <label className="text-lg font-semibold mb-2 flex items-center gap-2">
        <Icon className="w-5 h-5 text-violet-400" />
        {label}
      </label>
      <div className="relative">
        {isTextArea ? (
          <>
            <textarea
              name={name}
              value={formData[name]}
              onChange={handleInputChange}
              placeholder={`Enter your ${label.toLowerCase()}`}
              required
              className="w-full pl-12 pr-4 py-3 text-white placeholder-white/70 bg-white/10 rounded-xl border border-white/20 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400 min-h-[120px] resize-none transition-all"
            />
            <Icon className="absolute left-3 top-3 w-5 h-5 text-white/50" />
          </>
        ) : (
          <>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleInputChange}
              placeholder={`Enter your ${label.toLowerCase()}`}
              required
              className="w-full pl-12 pr-4 py-3 text-white placeholder-white/70 bg-white/10 rounded-xl border border-white/20 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400 transition-all"
            />
            <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-8 text-white">Contact Us</h1>
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-500 ease-in-out ${
          showPopup ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        } bg-black/50 backdrop-blur-sm`}
      >
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-10 rounded-3xl shadow-2xl border border-green-400/30 max-w-md mx-4 transition-all duration-500 ease-out">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-3">Message Sent 🎉</h3>
            <p className="text-green-100 mb-6 text-lg">We’ll get back to you soon</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <form
        onSubmit={onSubmit}
        className="bg-white/10 backdrop-blur-xl text-white w-full max-w-xl mx-auto p-8 rounded-xl shadow-2xl border border-white/20 transition-all duration-300 hover:scale-[1.02]"
      >
        <Field label="Full Name" name="name" Icon={User} />
        <Field label="Email Address" name="email" type="email" Icon={Mail} />
        <Field label="Your Message" name="message" isTextArea Icon={MessageCircle} />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 mt-4 rounded-xl text-white font-semibold bg-gradient-to-r from-violet-500 to-violet-700 shadow-lg hover:from-violet-600 hover:to-violet-500 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
