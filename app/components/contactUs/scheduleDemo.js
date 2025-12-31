"use client";

import React, { useState } from "react";
import Link from "next/link";

 

const ScheduleADemo = () => {
  // ─── Form State ─────────────────────────────────────────────────────────
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    referral: "",
    agreement: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // ─── Accordion State ─────────────────────────────────────────────────────
  const [activeIndex, setActiveIndex] = useState(0);
  const toggle = (idx) => setActiveIndex(activeIndex === idx ? -1 : idx);

  // ─── Handlers ────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "mobile" && !/^\d*$/.test(value)) return; // digits only
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.first_name) newErrors.first_name = "First name is required";
    if (!formData.last_name) newErrors.last_name = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.referral) newErrors.referral = "This message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setResponseMessage("");

    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/marketing_site/add_contact_details`;
    const payload = {
      name: `${formData.first_name} ${formData.last_name}`.trim(),
      email: formData.email,
      subject: "Contact Sales",
      message: formData.referral,
    };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        setResponseMessage(result.message || "Failed to send contact details.");
      } else {
        setResponseMessage(result.message || "Thank you! We'll be in touch.");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          mobile: "",
          referral: "",
          agreement: false,
        });
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setResponseMessage(
        err.message || "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-primary text-secondary px-7 pt-24 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/contact-ai-solutions" className="inline-block px-4 py-2 border border-secondary rounded-none text-secondary hover:bg-secondary hover:text-primary transition">
            Back
          </Link>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-12">Schedule a Demo</h1>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label className="block text-base font-semibold mb-2">
                First Name: <span className="text-red-500">*</span>
              </label>
              <input
                name="first_name"
                type="text"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-secondary py-2 outline-none"
              />
              {errors.first_name && (
                <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
              )}
            </div>
            <div>
              <label className="block text-base font-semibold mb-2">
                Last Name: <span className="text-red-500">*</span>
              </label>
              <input
                name="last_name"
                type="text"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-secondary py-2 outline-none"
              />
              {errors.last_name && (
                <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-base font-semibold mb-2">
              Work Email: <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-secondary py-2 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-base font-semibold mb-2">
              How can we help? <span className="text-red-500">*</span>
            </label>
            <textarea
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              rows={6}
              className="w-full bg-transparent border border-secondary px-3 py-3 outline-none min-h-[12rem]"
            />
            {errors.referral && (
              <p className="text-red-500 text-xs mt-1">{errors.referral}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-10 py-4 border border-secondary rounded-none text-secondary font-semibold w-fit hover:bg-secondary hover:text-primary transition"
          >
            {loading ? "Submitting…" : "Submit"}
          </button>

          {responseMessage && (
            <div className="mt-4 p-4 bg-secondary/5 border border-secondary/20">
              <p className="text-sm">{responseMessage}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ScheduleADemo;
