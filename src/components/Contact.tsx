import React, { useState } from "react";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
} from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+201234567890"; // Replace with your WhatsApp number (include country code)
    const message = "Hi! I'm interested in discussing a project with you.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from
              you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    placeholder="zaiad es-sahel"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    placeholder="zaiad@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm">
                      Thank you for reaching out. I'll get back to you soon. You
                      should also receive a confirmation email.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    <p className="font-medium">Failed to send message.</p>
                    <p className="text-sm">
                      Please try again or contact me directly via email or
                      WhatsApp.
                    </p>
                  </div>
                )}
              </form>

              {/* WhatsApp Contact Option */}
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">
                      Prefer instant messaging?
                    </h4>
                    <div className="space-y-2">
                      <p className="text-slate-600">+212 6 89 97 75 78</p>
                      <button
                        onClick={handleWhatsAppClick}
                        className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium transition-colors duration-300"
                      >
                        <MessageCircle size={16} />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                  Get in touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Mail className="text-blue-600" size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Email</h4>
                      <p className="text-slate-600">zaiadessahel3@gmail.com</p>
                      <p className="text-sm text-slate-500">
                        I'll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Phone className="text-green-600" size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Phone</h4>
                      <p className="text-slate-600">+212 6 89 97 75 78</p>
                      <p className="text-sm text-slate-500">
                        Mon-Fri 9AM-6PM PST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <MapPin className="text-purple-600" size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Location</h4>
                      <p className="text-slate-600">Casablanca, MAR</p>
                      <p className="text-sm text-slate-500">
                        Open to remote work
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                  Follow me
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/zaiad?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/zaiad-es-sahel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </a>
                  {/* <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Twitter size={20} />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
