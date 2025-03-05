import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Components/Button";

const Subscribe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields!");
      return;
    }

    emailjs
      .send(
        "service_v6twekk", // Replace with actual Service ID from EmailJS
        "template_c4315ho", // Replace with actual Template ID from EmailJS
        {
          from_name: formData.name, // Sender's name
          from_email: formData.email, // Sender's email
          reply_to: formData.email, // Sender's email
          message: formData.message, // Message body
          to_name: "Favour", // Your wife's email (recipient)
        },
        "xw3J7VEQUCgsc7EBZ" // Replace with actual Public Key from EmailJS
      )
      .then(
        () => {
          alert("Message sent successfully to Mrs. Favour!");
          setFormData({ name: "", email: "", message: "" }); // Clear input fields
        },
        (error) => {
          console.error("Failed to send message", error);
          alert("Failed to send message, please try again!");
        }
      );
  };

  return (
    <section
      className="max-w-[1440px] m-auto flex flex-col justify-center items-center gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[48px] text-center font-[palanquin] font-bold">
        You can <span className="text-coral-red">contact me</span> via email for further discussions or to learn more.
      </h3>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg flex flex-col gap-4 p-5 sm:border sm:border-slate-500 rounded-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="input rounded-lg focus:outline-none focus:ring-0 px-4 py-2 w-full border border-gray-300"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="input rounded-lg focus:outline-none focus:ring-0 px-4 py-2 w-full border border-gray-300"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="input rounded-lg focus:outline-none focus:ring-0 px-4 py-2 w-full border border-gray-300 h-32"
          required
        />
        <Button label="Contact Me" fullWidth />
      </form>
    </section>
  );
};

export default Subscribe;
