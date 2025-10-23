import emailjs from "emailjs-com";
import { useState } from "react";
import { OtherCont } from "./compcontact/OtherCont";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const botTrap = new FormData(event.target).get("website");
    if (botTrap) return;

    try {
      setLoading(true);
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        event.target,
        import.meta.env.VITE_PUBLIC_KEY
      );
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-black overflow-hidden">
      {/* Liquid Glass Black blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl top-[-100px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl bottom-[-120px] right-[-120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_60%,rgba(0,0,0,1)_100%)]" />
      </div>

      {/* Glass Card */}
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_0_60px_rgba(255,255,255,0.05)] p-6 sm:p-10 mt-12np">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-400">
          Contact Thawin
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* honeypot */}
          <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hidden" />

          {/* Name */}
          <div>
            <label htmlFor="name" className="sr-only">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              autoComplete="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-neutral-100 placeholder-neutral-400
                         focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/30 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              required
              autoComplete="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-neutral-100 placeholder-neutral-400
                         focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/30 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your message..."
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-neutral-100 placeholder-neutral-400
                         focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/30 transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full relative py-3 px-6 rounded-xl font-semibold text-lg text-white
                       bg-gradient-to-r from-neutral-700 to-neutral-900
                       hover:from-neutral-600 hover:to-neutral-800
                       disabled:opacity-60 disabled:cursor-not-allowed
                       shadow-[0_8px_30px_rgba(255,255,255,0.1)]
                       transition-all duration-300 transform hover:-translate-y-[2px]"
          >
            {loading ? "Sending..." : "Send Message to Thawin Chaowaisore"}
          </button>
        </form>

        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Other Contact */}
        <div className="mt-6">
          <OtherCont />
        </div>
      </div>
    </section>
  );
};
