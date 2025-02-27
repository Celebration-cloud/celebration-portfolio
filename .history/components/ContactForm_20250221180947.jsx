/* eslint-disable prettier/prettier */
"use cl"
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";

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
          setMessage("Your message has been sent successfully!");
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
      className="flex flex-col w-2/3 space-y-10 max-md:w-full"
      data-aos="fade-right"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-4xl font-bold text-foreground-600">Contact Me</h2>
      <Input
        {...register("name", { required: true })}
        className="w-full"
        errors={errors.name}
        label="Your Name"
        placeholder="John Oce"
        type="text"
      />
      {errors.name && (
        <span className="text-red-500">This field is required</span>
      )}

      <Input
        {...register("email", { required: true })}
        className="w-full"
        errors={errors.email}
        label="Your Email"
        placeholder="junior@heroui.com"
        type="email"
      />
      {errors.email && (
        <span className="text-red-500">This field is required</span>
      )}

      <Input
        {...register("subject", { required: true })}
        className="w-full"
        errors={errors.subject}
        label="Subject"
        placeholder="Subject"
        type="text"
      />
      {errors.subject && (
        <span className="text-red-500">This field is required</span>
      )}

      <Textarea
        {...register("message", { required: true })}
        disableAnimation
        disableAutosize
        classNames={{
          base: "w-full",
          input: "resize-y min-h-[40px]",
        }}
        errors={errors.message}
        label="Message"
        placeholder="Send your message"
      />
      {errors.message && (
        <span className="text-red-500">This field is required</span>
      )}

      <div>
        <Button
          className="bg-foreground-700 text-inherit"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
      {message && <p className="text-green-500">{message}</p>}
    </form>
  );
};

export default ContactForm;
