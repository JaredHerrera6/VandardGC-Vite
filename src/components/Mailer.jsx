import React from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaFileContract } from "react-icons/fa";
const SERVICE_ID = import.meta.env.VITE_APP_EMAIL_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID;
const FORMID = import.meta.env.VITE_APP_EMAIL_FORM;
function Mailer() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, FORMID)
      .then(() => {
        alert("Message sent!");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send.");
      });

    e.target.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-xl shadow-xl p-8 md:p-10"
      >
        <div className="flex justify-center mb-4 text-red-900 text-3xl">
          <FaFileContract />
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
          Request a Consultation
        </h2>

        <p className="text-neutral-400 text-center mt-2 mb-8 text-sm">
          Tell us about your project and we’ll get back to you.
        </p>

        <form onSubmit={sendEmail} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-neutral-300 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first-name"
                placeholder="John"
                required
                className="w-full px-4 py-2.5 rounded-md bg-neutral-950 border border-neutral-800 text-black placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-900 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-neutral-300 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last-name"
                placeholder="Doe"
                required
                className="w-full px-4 py-2.5 rounded-md bg-neutral-950 border border-neutral-800 text-black placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-900 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-neutral-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="_email"
                name="email"
                placeholder="customer@email.com"
                required
                className="w-full px-4 py-2.5 rounded-md bg-neutral-950 border border-neutral-800 text-black placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-900 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-neutral-300 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                placeholder="111-222-3333"
                required
                className="w-full px-4 py-2.5 rounded-md bg-neutral-950 border border-neutral-800 text-black placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-900 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-neutral-300 mb-1">
              Project Details
            </label>
            <textarea
              rows="5"
              id="emessage"
              name="emessage"
              placeholder="Briefly describe your project..."
              required
              className="w-full px-4 py-2.5 rounded-md bg-neutral-950 border border-neutral-800 text-black placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-900 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-900 hover:bg-red-800 text-white font-medium py-3 rounded-md transition"
          >
            Submit Request
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Mailer;
