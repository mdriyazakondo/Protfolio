import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_CONTACT_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        toast.success("Form Submitted Successfully");
      } else {
        console.error("Error", data);
        toast.error("Form Submitted is not found");
        setResult(data.message);
      }
    } catch (err) {
      console.error(err);
      setResult("An error occurred");
    }
  };

  return (
    <div className="mt-34 pb-10">
      <SectionTitle title={"Contact Us"} />

      <div className="mx-5 md:mx-auto flex items-center justify-center gap-0 md:gap-10 flex-col md:flex-row">
        <div className="max-w-4xl w-full mx-auto bg-[#0d1b2a] rounded-lg shadow-md p-10">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="mb-4">
              <label className="block mb-2 text-gray-50" htmlFor="name">
                Name
              </label>
              <input
                placeholder="Your Name"
                className="w-full p-2 border-b-2 border-blue-500 bg-transparent outline-none focus:border-b-2 focus:border-blue-600"
                type="text"
                required
                name="name"
                id="name"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-50" htmlFor="email">
                Email
              </label>
              <input
                placeholder="Your Email"
                className="w-full p-2 border-b-2 border-blue-500 bg-transparent outline-none focus:border-b-2 focus:border-blue-600"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-50" htmlFor="message">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border-b-2 resize-none border-blue-500 bg-transparent outline-none focus:border-b-2 focus:border-blue-600"
                rows="4"
                name="message"
                id="message"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <button
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold text-white p-2 cursor-pointer rounded transition-all"
                type="submit"
              >
                Submit
              </button>
            </div>

            {/* {result && <p className="text-center text-white mt-2">{result}</p>} */}
          </form>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
          Connect with me
        </h3>
        <div className="flex flex-wrap justify-center gap-6 text-gray-200 text-lg">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mdriyazakondo265@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-cyan-400"
          >
            <FaEnvelope /> <span>Gmail</span>
          </a>

          <a
            href="https://wa.me/8801611188018"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-cyan-400"
          >
            <FaWhatsapp /> <span>WhatsApp</span>
          </a>

          <a
            href="https://github.com/mdriyazakondo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-cyan-400"
          >
            <FaGithub /> <span>GitHub</span>
          </a>

          <a
            href="https://www.facebook.com/junior.deploper.riyaz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-cyan-400"
          >
            <FaFacebook /> <span>Facebook</span>
          </a>

          <a
            href="https://www.linkedin.com/in/riyaz-akonda-77a6a3342/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-cyan-400"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
