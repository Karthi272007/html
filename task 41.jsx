
/*
Task 1
Create a few buttons with different styles (.btn-primary, .btn-outline-success, etc.).
Add an alert box with a dismiss button.
*/

import { useState } from "react";

export default function ButtonAlert() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="p-10">

      <div className="flex gap-3">
        <button className="rounded bg-blue-600 px-4 py-2 text-white">
          Primary
        </button>

        <button className="rounded border border-green-600 px-4 py-2 text-green-600">
          Outline Success
        </button>

        <button className="rounded bg-red-600 px-4 py-2 text-white">
          Danger
        </button>
      </div>

      {showAlert && (
        <div className="mt-6 flex justify-between rounded bg-yellow-100 p-4">
          <span>This is an alert!</span>

          <button onClick={() => setShowAlert(false)}>
            X
          </button>
        </div>
      )}

    </div>
  );
}


/*
Task 2
Create a contact form with name, email, and message fields.
Use .form-control and .form-label.
*/

export function ContactForm() {
  return (
    <div className="max-w-md p-10">
      <h1 className="mb-6 text-2xl font-bold">
        Contact Us
      </h1>

      <form>
        {/* Name */}
        <label className="form-label mb-2 block font-medium">
          Name
        </label>

        <input
          type="text"
          className="form-control mb-4 w-full rounded border p-2"
          placeholder="Enter your name"
        />

        {/* Email */}
        <label className="form-label mb-2 block font-medium">
          Email
        </label>

        <input
          type="email"
          className="form-control mb-4 w-full rounded border p-2"
          placeholder="Enter your email"
        />

        {/* Message */}
        <label className="form-label mb-2 block font-medium">
          Message
        </label>

        <textarea
          className="form-control mb-4 w-full rounded border p-2"
          rows="4"
          placeholder="Enter your message"
        ></textarea>

        <button className="rounded bg-blue-600 px-5 py-2 text-white">
          Submit
        </button>
      </form>
    </div>
  );
}


/*
Task 3
Combine navbar + cards + form into a single responsive Services Page.
*/

export function Services() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-blue-600 p-4 text-white">
        <h1 className="text-xl font-bold">Services</h1>
      </nav>

      {/* Cards */}
      <div className="grid gap-4 p-6 sm:grid-cols-3">

        <div className="rounded bg-white p-5 shadow">
          <h2 className="font-bold">Web Design</h2>
          <p>Creative website designs</p>
        </div>

        <div className="rounded bg-white p-5 shadow">
          <h2 className="font-bold">Development</h2>
          <p>Modern web applications</p>
        </div>

        <div className="rounded bg-white p-5 shadow">
          <h2 className="font-bold">AI Services</h2>
          <p>Smart technology solutions</p>
        </div>

      </div>

      {/* Form */}
      <form className="max-w-md p-6">

        <h2 className="mb-4 text-xl font-bold">
          Contact Us
        </h2>

        <input
          type="text"
          className="form-control mb-3 w-full rounded border p-2"
          placeholder="Name"
        />

        <input
          type="email"
          className="form-control mb-3 w-full rounded border p-2"
          placeholder="Email"
        />

        <textarea
          className="form-control mb-3 w-full rounded border p-2"
          placeholder="Message"
          rows="4"
        ></textarea>

        <button className="rounded bg-blue-600 px-4 py-2 text-white">
          Submit
        </button>

      </form>

    </div>
  );
}
