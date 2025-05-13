import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 px-4 bg-black text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="mb-8 text-gray-400">Have a project or idea in mind? I'm always up for a creative conversation.</p>

        <form className="flex flex-col gap-4">
  <input
    type="text"
    placeholder="Your Name"
    className="p-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
  />
  <input
    type="email"
    placeholder="Your Email"
    className="p-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
  />
  <textarea
    rows={5}
    placeholder="Your Message"
    className="p-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
  ></textarea>
  <button
    type="submit"
    className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-semibold py-3 rounded-2xl"
  >
    Send Message
  </button>
</form>

      </div>
    </section>
  );
}
