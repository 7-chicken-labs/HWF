"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Users,
  Building,
} from "lucide-react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: "general",
        });
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      link: "tel:+919876543210",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["hello@wellness.com", "support@wellness.com"],
      link: "mailto:hello@wellness.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["123 Wellness Street", "Mumbai, Maharashtra 400708"],
      link: null,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
      link: null,
    },
  ];

  const inquiryTypes = [
    {
      value: "general",
      label: "General Inquiry",
      icon: <MessageCircle className="w-4 h-4" />,
    },
    {
      value: "personal",
      label: "Personal Coaching",
      icon: <Users className="w-4 h-4" />,
    },
    {
      value: "corporate",
      label: "Corporate Wellness",
      icon: <Building className="w-4 h-4" />,
    },
    { value: "support", label: "Support", icon: <Mail className="w-4 h-4" /> },
  ];

  const InputField = ({
    label,
    name,
    placeholder,
  }: {
    label: string;
    name: string;
    placeholder: string;
  }) => {
    return (
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
        </label>
        <input
          type={name === "email" ? "email" : name === "phone" ? "tel" : "text"}
          name={name}
          value={formData[name as keyof typeof formData]}
          onChange={handleChange}
          onBlur={() => setFocusedField(null)}
          placeholder={placeholder}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 outline-none ${
            focusedField === name
              ? "border-amber-500 bg-amber-50/30"
              : "border-gray-200 hover:border-amber-300"
          }`}
        />
      </div>
    );
  };

  const TextareaField = ({
    label,
    name,
    placeholder,
  }: {
    label: string;
    name: string;
    placeholder: string;
  }) => {
    return (
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
        </label>
        <textarea
          name={name}
          rows={6}
          value={formData[name as keyof typeof formData]}
          onChange={handleChange}
          onBlur={() => setFocusedField(null)}
          placeholder={placeholder}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 outline-none resize-none ${
            focusedField === name
              ? "border-amber-500 bg-amber-50/30"
              : "border-gray-200 hover:border-amber-300"
          }`}
        ></textarea>
      </div>
    );
  };

  return (
    <section className="py-16 lg:py-24 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="brand-text audiowide text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight md:text-center mb-8">
              Get in Touch
            </h2>

            <p className="text-md text-center">
              We&apos;re here to support your wellness journey. Reach out and let&apos;s
              start a conversation.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`bg-white rounded-2xl p-6 shadow-md border-2 transition-all duration-300 ${
                    hoveredCard === index
                      ? "border-amber-400 shadow-xl transform -translate-y-1"
                      : "border-amber-400"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white transition-all duration-300 ${
                        hoveredCard === index
                          ? "bg-amber-500"
                          : "bg-amber-500"
                      }`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Immediate Help Card */}
              <div
                onMouseEnter={() => setHoveredCard(999)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`rounded-2xl p-6 shadow-md border-2 transition-all duration-300 ${
                  hoveredCard === 999
                    ? "border-amber-400 shadow-xl transform -translate-y-1 bg-amber-100 text-amber-700"
                    : "border-transparent bg-gradient-to-br from-amber-500 to-orange-500 text-white"
                }`}
              >
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="mb-6">
                  Our support team is available during business hours to assist
                  you with any questions.
                </p>
                <button className="w-full bg-white text-amber-600 font-semibold py-3 px-6 rounded-lg hover:bg-amber-50 transition-all duration-300 shadow-md hover:shadow-lg">
                  Schedule a Call
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-md p-8 md:p-10 border-2 border-transparent transition-all duration-300 hover:border-amber-400 hover:shadow-xl transform hover:-translate-y-1">
                <h2 className="text-3xl font-bold mb-2 text-gray-900">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24
                  hours.
                </p>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16 space-y-4">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
                      <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 text-center max-w-md">
                      Thank you for reaching out. We&apos;ll respond to your inquiry
                      as soon as possible.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Inquiry Type Buttons */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        What can we help you with?
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {inquiryTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                inquiryType: type.value,
                              })
                            }
                            className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-lg border-2 transition-all duration-300 ${
                              formData.inquiryType === type.value
                                ? "border-amber-500 bg-amber-50 text-amber-700"
                                : "border-gray-200 hover:border-amber-300 text-gray-700"
                            }`}
                          >
                            {type.icon}
                            <span className="text-sm font-medium">
                              {type.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField
                        label="Full Name *"
                        name="name"
                        placeholder="John Doe"
                      />
                      <InputField
                        label="Email Address *"
                        name="email"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField
                        label="Phone Number"
                        name="phone"
                        placeholder="+91 98765 43210"
                      />
                      <InputField
                        label="Subject *"
                        name="subject"
                        placeholder="How can we help?"
                      />
                    </div>
                    <TextareaField
                      label="Message *"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                    />

                    {/* Submit Button */}
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-md border-2 border-transparent transition-all duration-300 hover:border-amber-400 hover:shadow-xl transform hover:-translate-y-1">
            <div className="w-full h-96 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709662!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location Map"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;