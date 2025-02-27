/* eslint-disable prettier/prettier */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { addToast } from "@heroui/toast";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    emailjs
      .send(
        "service_40zo4or", // Replace with your service ID
        "template_qo99jig", // Replace with your template ID
        data,
        "MCvMO3cKm3abSp_xT" // Replace with your user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setMessage(response);
          setIsSubmitting(false);
          reset();
        },
        (error) => {
          console.log("FAILED...", error);
          setMessage("Failed to send your message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <form
      className="flex flex-col w-full max-w-lg space-y-6"
      data-aos="fade-right"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-4xl font-bold text-foreground-600">Contact Me</h2>
      <Input
        {...register("name", { required: true })}
        className="w-full text-foreground-700"
        errorMessage={errors.name ? "This field is required" : ""}
        isInvalid={!!errors.name}
        label="Your Name"
        placeholder="John Oce"
        type="text"
        variant="bordered"
      />

      <Input
        {...register("email", { required: true })}
        className="w-full text-foreground-700"
        errorMessage={errors.email ? "Please enter a valid email" : ""}
        isInvalid={!!errors.email}
        label="Your Email"
        placeholder="junior@heroui.com"
        type="email"
        variant="bordered"
      />

      <Input
        {...register("subject", { required: true })}
        className="w-full text-foreground-700"
        errorMessage={errors.subject ? "This field is required" : ""}
        isInvalid={!!errors.subject}
        label="Subject"
        placeholder="Subject"
        type="text"
        variant="bordered"
      />

      <Textarea
        {...register("message", { required: true })}
        className="w-full text-foreground-700"
        errorMessage={
          errors.message
            ? "The description should be at least 255 characters long."
            : ""
        }
        isInvalid={!!errors.message}
        label="Message"
        placeholder="Send your message"
        variant="bordered"
      />

      <div>
        <Button
          className="bg-foreground-700 text-inherit"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
      {message &&
        addToast({
          title: "Toast title",
          color: "primary",
          description: message,
          color: color.toLowerCase(),
        })}
      {message && <p className="text-green-500">{message}</p>}
    </form>
  );
};

export default ContactForm;
