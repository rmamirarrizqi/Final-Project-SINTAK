import React from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import NavBar from "./NavBar";
import Footer from "./Footer";

function ContactPage() {
  return (
    <>
      <NavBar />
      <ContactSection />
      <Footer />
    </>
  );
}

export default ContactPage;

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    product: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simpan data ke Firestore
      await addDoc(collection(db, "contacts"), formData);
      alert("Message Sent!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        select: "",
        message: "",
      }); // Reset form
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("There was an error, please try again!");
    }
  };
  return (
    <>
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg border-1 mt-5 mb-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="John Doe"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1 mt-2"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="john@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1 mt-2"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="How can we help you?"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="product"
              className="block text-sm font-medium text-gray-700 mb-1 mt-2"
            >
              Product of Interest
            </label>
            <select
              name="product"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              value={formData.product}
              onChange={handleChange}
            >
              <option value="">Select a product</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-app">Mobile App</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="consulting">Consulting</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1 mt-2"
            >
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message here..."
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
