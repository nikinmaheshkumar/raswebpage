import React from "react";
import "./Contact.css";
import Swal from "sweetalert2";
import "animate.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "a6a52efa-c1c1-47f8-b170-bc8974e418d9");

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
        event.target.reset(); // Clear form after success
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
    <section className="contact">
      <form onSubmit={onSubmit}>
        <h1 style={{ textAlign: "center", color: "#fff", marginBottom: "20px" }}>Drop Your Queries Here</h1>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" className="field" placeholder="Enter your name" name="name" required />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="email" className="field" placeholder="Enter your email" name="email" required />
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea className="field mess" placeholder="Enter your message" name="message" required />
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
