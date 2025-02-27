/* eslint-disable prettier/prettier */
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_40zo4or",
        "template_qo99jig",
        d,
        "MCvMO3cKm3abSp_xT"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
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
      {errors.name && <span>This field is required</span>}

      <Input
        {...register("email", { required: true })}
        className="w-full"
        errors={errors.email}
        label="Your Email"
        placeholder="junior@heroui.com"
        type="email"
      />
      {errors.email && <span>This field is required</span>}

      <Input
        {...register("subject", { required: true })}
        className="w-full"
        errors={errors.subject}
        label="Subject"
        placeholder="Subject"
        type="text"
      />
      {errors.subject && <span>This field is required</span>}

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
      {errors.message && <span>This field is required</span>}

      <div>
        <Button className="bg-foreground-700 text-inherit" type="submit">
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
