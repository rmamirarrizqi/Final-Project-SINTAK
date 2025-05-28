import React from "react";
import NavBar from "./NavBar";

function ContactPage() {
  return (
    <>
      <NavBar />
      <h1>ini ContactPage</h1>
    </>
  );
}

export default ContactPage;

function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    inquiryType: "",
    productInterest: "",
    volume: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), formData);
      alert("Message sent successfully!");
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        inquiryType: "",
        productInterest: "",
        volume: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-amber-800 mb-6">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Type of Inquiry
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="Request a Quotation">
                    Request a Quotation
                  </option>
                  <option value="Request Samples">Request Samples</option>
                  <option value="Partnership Inquiry">
                    Partnership Inquiry
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Product of Interest
                  </label>
                  <select
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Select a product</option>
                    <option value="americano">Americano</option>
                    <option value="expresso">Expresso</option>
                    <option value="latte">Latte</option>
                    <option value="long black">Long Black</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Estimated Volume (kg)
                  </label>
                  <select
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Select volume range</option>
                    <option value="1-100">1-100 kg</option>
                    <option value="101-500">101-500 kg</option>
                    <option value="501-1000">501-1000 kg</option>
                    <option value="1000+">1000+ kg</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Please provide details about your requirements"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-800 text-white py-3 px-6 rounded-md hover:bg-orange-400 transition duration-300 font-medium text-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-amber-800 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-8">
              You can also reach us directly using the following contact
              details.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Email
                </h3>
                <p className="text-gray-600">
                  <a
                    href="mailto:info@aromasrivijaya.com"
                    className="hover:text-amber-600 transition"
                  >
                    info@aromasriwijaya.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Phone
                </h3>
                <p className="text-gray-600">
                  <a
                    href="tel:+6281234567890"
                    className="hover:text-amber-600 transition"
                  >
                    +62 812 3456 7890
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Address
                </h3>
                <p className="text-gray-600">
                  Jl. Sriwijaya No. 123, Palembang,
                  <br />
                  South Sumatra, Indonesia 30139
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Business Hours
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Monday - Friday | 8:00 AM - 5:00 PM (GMT+7)</li>
                  <li>Saturday | 8:00 AM - 2:00 PM (GMT+7)</li>
                  <li>Sunday | Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
