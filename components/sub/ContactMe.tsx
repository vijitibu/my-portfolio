"use client";

import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        reset();
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred.");
      console.error(error);
    }
  };

  // ⏳ Automatically clear the status message after 5 minutes
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 300000); // 5 minutes = 300,000ms

      return () => clearTimeout(timer); // clean up
    }
  }, [status]);

  return (
    <div
      className="relative z-10 flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8  text-white"
      id="contact"
    >
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl space-y-4 bg-white/10 p-6 rounded-xl shadow-lg"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input
            {...register("name", { required: true })}
            placeholder="Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            type="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <input
          {...register("subject", { required: true })}
          placeholder="Subject"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <textarea
          {...register("message", { required: true })}
          placeholder="Message"
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 transition"
        >
          Send Message
        </button>

        {status && (
          <div
            className={`text-sm text-center mt-4 px-4 py-2 rounded-lg font-medium ${
              status.toLowerCase().includes("success")
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            {status}
          </div>
        )}
      </form>
    </div>
  );
}
