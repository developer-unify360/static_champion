import { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiNavigation,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";

const CONTACTS = [
  {
    Icon: FiPhone,
    label: "Phone",
    value: "+91 92292 73143",
    href: "tel:9229273143",
  },
  {
    Icon: FiMail,
    label: "Email",
    value: "championmagnesite2021@gmail.com",
    href: "mailto:championmagnesite2021@gmail.com",
  },
  {
    Icon: FiMapPin,
    label: "Address",
    value:
      "Birra Road, Village Bhwarmal, PO-Rohda, Champa – 495671, Chhattisgarh",
    href: null,
  },
];

const BLANK = { name: "", phone: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(BLANK);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(BLANK);
  };
  const onFocus = (e) => (e.target.style.borderColor = "#d97706");
  const onBlur = (e) => (e.target.style.borderColor = "#e2e8f0");
  const fieldStyle = {
    border: "1.5px solid #e2e8f0",
    color: "#1e293b",
    background: "#f8fafc",
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{ background: "#f8fafc" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="accent-bar mx-auto" />
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Get in touch for product inquiries, quotes or information about our
            refractory solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left – details + map */}
          <div className="space-y-4">
            {CONTACTS.map(({ Icon, label, value, href }) => (
              <div
                key={label}
                className="flex gap-4 p-5 rounded-2xl bg-white"
                style={{
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg,#0f172a,#1e293b)",
                  }}
                >
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div
                    className="text-xs font-semibold mb-0.5 uppercase tracking-wide"
                    style={{ color: "#94a3b8" }}
                  >
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-medium"
                      style={{ color: "#0f172a" }}
                      onMouseEnter={(e) => (e.target.style.color = "#d97706")}
                      onMouseLeave={(e) => (e.target.style.color = "#0f172a")}
                    >
                      {value}
                    </a>
                  ) : (
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#0f172a" }}
                    >
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
              <iframe
                src="https://maps.google.com/maps?q=Birra+Road+Bhwarmal+Rohda+Champa+Chhattisgarh+495671+India&output=embed&z=14"
                width="100%"
                height="300"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                title="Champion Magnesite LLP - Birra Road, Village Bhwarmal, Champa"
                style={{ border: 0, display: "block" }}
              />
            </div>

            {/* Directions */}
            <a
              href="https://maps.google.com/?q=Birra+Road+Bhwarmal+Rohda+Champa+Chhattisgarh+495671"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: "rgba(217,119,6,0.1)",
                color: "#d97706",
                border: "1.5px solid rgba(217,119,6,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(217,119,6,0.9)";
                e.currentTarget.style.color = "#0f172a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(217,119,6,0.1)";
                e.currentTarget.style.color = "#d97706";
              }}
            >
              <FiNavigation className="w-4 h-4" />
              Get Directions on Google Maps
            </a>
          </div>

          {/* Right – form */}
          <div
            className="rounded-2xl p-8 bg-white"
            style={{
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
            }}
          >
            <div
              className="-mx-8 -mt-8 mb-8 h-1 rounded-t-2xl"
              style={{ background: "linear-gradient(90deg,#d97706,#f59e0b)" }}
            />

            <h3 className="text-xl font-bold mb-1" style={{ color: "#0f172a" }}>
              Send Us a Message
            </h3>
            <p className="text-sm mb-7" style={{ color: "#64748b" }}>
              Fill out the form and our team will get back to you within 24
              hours.
            </p>

            {submitted ? (
              <div
                className="text-center py-12 rounded-2xl"
                style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
              >
                <FiCheckCircle
                  className="w-12 h-12 mx-auto mb-3"
                  style={{ color: "#166534" }}
                />
                <h4
                  className="font-bold text-base mb-1"
                  style={{ color: "#166534" }}
                >
                  Message Sent!
                </h4>
                <p className="text-sm" style={{ color: "#15803d" }}>
                  Thank you! Our team will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-xs font-semibold underline"
                  style={{ color: "#166534" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                      style={{ color: "#475569" }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={fieldStyle}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                      style={{ color: "#475569" }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={fieldStyle}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                    style={{ color: "#475569" }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={fieldStyle}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                    style={{ color: "#475569" }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={fieldStyle}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2"
                  style={{
                    background: "linear-gradient(135deg,#d97706,#f59e0b)",
                    color: "#0f172a",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "linear-gradient(135deg,#b45309,#d97706)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      "linear-gradient(135deg,#d97706,#f59e0b)")
                  }
                >
                  <FiSend className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
