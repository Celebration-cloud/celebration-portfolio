import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data, "YOUR_USER_ID")
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
        label="Your Name"
        placeholder="John Oce"
        type="text"
        errors={errors.name}
      />
      {errors.name && <span>This field is required</span>}

      <Input
        {...register("email", { required: true })}
        className="w-full"
        label="Your Email"
        placeholder="junior@heroui.com"
        type="email"
        errors={errors.email}
      />
      {errors.email && <span>This field is required</span>}

      <Input
        {...register("subject", { required: true })}
        className="w-full"
        label="Subject"
        placeholder="Subject"
        type="text"
        errors={errors.subject}
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
        label="Message"
        placeholder="Send your message"
        errors={errors.message}
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
