import React, { useState } from "react";
import Footer from "../pages/Footer";
import Navbar from "./Navbar";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phoneNumber: "",
        jobTitle: "",
        companySize: "",
        primaryUseCase: "",
        country: "",
      });
    
      const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
          const response = await fetch("https://example.com/submit-form", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            console.log("Form submitted successfully!");
            // Optionally, you can clear the form fields after submission
            setFormData({
              firstName: "",
              lastName: "",
              companyName: "",
              email: "",
              phoneNumber: "",
              jobTitle: "",
              companySize: "",
              primaryUseCase: "",
              country: "",
            });
          } else {
            console.error("Failed to submit form");
          }
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      };
    

  return (
    <div>
        <div />
        <Navbar />
      <div className="contact-form-container">
        <h2>Let's get in touch</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <label>
              First Name*
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Last Name*
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Company Name*
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Business Email Address*
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Phone Number*
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Job Title*
              <select
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                required
              >
                <option value="">Please Select</option>
                <option value="CEO">CEO</option>
                <option value="CTO">CTO</option>
                <option value="Manager">Manager</option>
                <option value="Engineer">Engineer</option>
                {/* Add more job titles as needed */}
              </select>
            </label>
          </div>
          <div className="form-row">
            <label>
              Company Size*
              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                required
              >
                <option value="">Please Select</option>
                <option value="1-10 employees">1-10 employees</option>
                <option value="11-50 employees">11-50 employees</option>
                <option value="51-200 employees">51-200 employees</option>
                <option value="201-500 employees">201-500 employees</option>
                <option value="501-1000 employees">501-1000 employees</option>
                <option value="1000+ employees">1000+ employees</option>
                {/* Add more options as needed */}
              </select>
            </label>

            <label>
              Primary Use Case*
              <select
                name="primaryUseCase"
                value={formData.primaryUseCase}
                onChange={handleChange}
                required
              >
                <option value="">Please Select</option>
                <option value="Social Media Marketing">
                  Social Media Marketing
                </option>
                <option value="Digital Advertising">Digital Advertising</option>
                <option value="Content Marketing">Content Marketing</option>
                <option value="Email Marketing">Email Marketing</option>
                <option value="Customer Support">Customer Support</option>
                <option value="Other">Other</option>
                {/* Add more options as needed */}
              </select>
            </label>

            <label>
              Country*
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">Please Select</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                {/* Add more options as needed */}
              </select>
            </label>
          </div>
          <button type="submit" className="header-btn btn-blue btn">Submit</button>
        </form>
        <p className="privacy-note">
          Scissor requires the contact information you provide in order to reach
          out to you regarding our products and services. You have the option to
          unsubscribe from these communications whenever you wish. To learn more
          about how to unsubscribe, our privacy practices, and our dedication to
          safeguarding your privacy, please refer to our Privacy Policy.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
