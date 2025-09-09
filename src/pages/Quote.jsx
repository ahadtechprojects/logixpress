import { useState } from "react";

export default function Quote() {
  const [form, setForm] = useState({ name: "", email: "", details: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Quote request submitted!");
    setForm({ name: "", email: "", details: "" });
  };

  return (
    <section className="pt-28 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Get a Quote</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
          required
        />
        <textarea
          name="details"
          placeholder="Shipment Details"
          value={form.details}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
          rows="4"
          required
        />
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
          Submit Request
        </button>
      </form>
    </section>
  );
}
