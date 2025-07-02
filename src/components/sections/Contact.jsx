import React from "react";
import Swal from "sweetalert2";
import "animate.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "caab7f18-ef6a-483c-bc9b-bf82a6250c81");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          title: "Message Sent!",
          text: "We will get back to you soon.",
          icon: "success",
          showClass: {
            popup: "animate__animated animate__fadeInUp animate__faster",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutDown animate__faster",
          },
        });
        event.target.reset();
      } else {
        Swal.fire({
          title: "Failed to Send",
          text: data.message,
          icon: "error",
          showClass: {
            popup: "animate__animated animate__fadeInUp animate__faster",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutDown animate__faster",
          },
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while sending the message.",
        icon: "error",
        showClass: {
          popup: "animate__animated animate__fadeInUp animate__faster",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown animate__faster",
        },
      });
    }
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-8 text-white">
        Contact Us
      </h1>

      <form
        onSubmit={onSubmit}
        className="bg-white/12 backdrop-blur-xl text-white w-full max-w-xl mx-auto p-8 rounded-xl shadow-2xl border border-white/20 transition-all duration-300 hover:scale-[1.05]"
      >
        <div className="flex flex-col mb-5">
          <label className="text-lg font-semibold mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="px-4 py-3 text-white placeholder-white/70 rounded-xl border border-white/20 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400 transition-all"
          />
        </div>

        <div className="flex flex-col mb-5">
          <label className="text-lg font-semibold mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="px-4 py-3 text-white placeholder-white/70 rounded-xl border border-white/20 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400 transition-all"
          />
        </div>

        <div className="flex flex-col mb-6">
          <label className="text-lg font-semibold mb-2">Your Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            required
            className="px-4 py-3 text-white placeholder-white/70 rounded-xl border border-white/20 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400 transition-all min-h-[120px]"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-md text-white font-semibold bg-gradient-to-r from-violet-500 to-violet-700 shadow-lg hover:from-violet-600 hover:to-violet-500 hover:-translate-y-1 transition-all"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
