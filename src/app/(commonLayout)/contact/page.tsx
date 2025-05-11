import ContactForm from "@/components/contact/ContactForm";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "...",
};
const ContactPage = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <ContactForm />
    </div>
  );
};

export default ContactPage;
