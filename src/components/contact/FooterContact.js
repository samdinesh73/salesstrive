"use client";
import React, { useState } from "react";

const FooterContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Add API logic here
  };

  return (
    <section className="container-fluid py-5 glossy-bg text-light">
      <div className="container">
        <div className="row g-5">
          {/* Left Side */}
          <div className="col-lg-6">
            <h2 className="mb-4 fw-bold text-white">Free Consultation – Unleash Your Brand’s Digital Potential</h2>
            <p className="text-white">
              Elevate your business with a free consultation from <strong>Salesstrive Digital Marketing Agency</strong>.
              We'll assess your goals, analyze your online presence, and create a strategy tailored to your brand.
            </p>
            <ul className="list-unstyled mt-3 mb-4">
              {[
                "Confirmation of appointment details",
                "Pre-consultation research & competitor analysis",
                "Strategy session to align goals and direction",
                "Audit of digital channels and performance metrics",
                "Personalized strategy (SEO, Social, PPC, Content)",
                "Implementation roadmap & tracking setup",
                "Ongoing support & growth measurement",
              ].map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
            <div className="mt-4">
              <p>📧 <a href="mailto:hello@aharam.com" className="text-decoration-none text-light">hello@salesstrive.com</a></p>
              <p>📞 <a href="tel:+919443818425" className="text-decoration-none text-light">+91 98898 89331</a></p>
              <p className="text-white">📍 Sales strive Online Services Pvt, Ltd. No 892, AR Naidu Chambers, 3rd Floor, 7th A Main Road, 1st Block, Near Wipro Signal, Koramangala, Bengaluru . 560034 </p>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="col-lg-6">
            <div className="bg-light text-dark p-4 p-md-5 rounded-4 shadow">
              <h4 className="mb-4 text-center fw-semibold">Schedule A Free Consultation</h4>
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      placeholder="Phone"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Company Email"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="company"
                    placeholder="Company/Organization"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <select
                    className="form-select"
                    name="service"
                    onChange={handleChange}
                    required
                  >
                    <option value="">How can we help you?</option>
                    <option value="Branding">Branding</option>
                    <option value="SEO">SEO</option>
                    <option value="Social Media">Social Media</option>
                    <option value="E-commerce Setup">E-commerce Setup</option>
                  </select>
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="4"
                    placeholder="Message"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary px-5 py-2">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterContact;
