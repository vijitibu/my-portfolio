"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const mailtoLink = `mailto:prabha.viji@gmail.com?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(
      `Hi, my name is ${data.name}.\n\n${data.message}`
    )}`;

    // Open in a new window to avoid tab change
    window.open(mailtoLink, "_blank");

    alert("Message intent sent!");
    reset();
  };

  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen bg-white px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white shadow-md rounded p-6 w-full max-w-lg"
      >
        <input
          {...register("name")}
          placeholder="Name"
          className="border p-2 w-full rounded"
        />
        <input
          {...register("email")}
          placeholder="Email"
          type="email"
          className="border p-2 w-full rounded"
        />
        <input
          {...register("subject")}
          placeholder="Subject"
          className="border p-2 w-full rounded"
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="border p-2 w-full rounded"
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
