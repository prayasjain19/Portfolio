import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#0a0a0a] overflow-hidden"
    >
      <ToastContainer />

      {/* 🔵 Radial animated background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[300px] h-[300px]  rounded-full blur-[100px] top-1/4 left-1/4 animate-pulse-slow"></div>
        <div className="absolute w-[250px] h-[250px]  rounded-full blur-[120px] bottom-1/3 right-1/4 animate-pulse-slower"></div>
      </div>

      {/* Section Title */}
      <div className="text-center mb-16 z-10">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-[#04D9FF] mx-auto mt-4 shadow-[0_0_10px_#00f0ff]"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form with enhanced glow */}
      <div className="relative z-10 mt-8 w-full max-w-md bg-[#111111]/60 backdrop-blur-md p-6 rounded-lg shadow-lg border border-[#04D9FF] shadow-[0_0_25px_#00f0ff80] hover:shadow-[0_0_35px_#00f0ffb3] transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#161616] text-white border border-[#04D9FF] focus:outline-none focus:ring-2 focus:ring-[#00f0ff] shadow-[0_0_10px_#00f0ff22]"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#161616] text-white border border-[#04D9FF] focus:outline-none focus:ring-2 focus:ring-[#04D9FF] shadow-[0_0_10px_#00f0ff22]"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#161616] text-white border border-[#04D9FF] focus:outline-none focus:ring-2 focus:ring-[#00f0ff] shadow-[0_0_10px_#00f0ff22]"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#161616] text-white border border-[#00f0ff] focus:outline-none focus:ring-2 focus:ring-[#00f0ff] shadow-[0_0_10px_#00f0ff22]"
          />

          {/* Neon Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-[#04D9FF] to-[#074082] hover:from-[#04D9FF] hover:to-[#005ce6] text-black font-bold py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_#00f0ff]"
          >
            Send
          </button>
        </form>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          .animate-pulse-slow {
            animation: pulseSlow 6s infinite;
          }
          .animate-pulse-slower {
            animation: pulseSlower 10s infinite;
          }
          @keyframes pulseSlow {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.1); }
          }
          @keyframes pulseSlower {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.15); }
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
