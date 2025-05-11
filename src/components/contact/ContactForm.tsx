// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";
// import { Textarea } from "@/components/ui/textarea";
// import { createMessage } from "@/services/message";
// import { contactValidationSchema } from "./ContactValidationSchema";
// import { z } from "zod";
// import { Facebook, Github, Linkedin, Mail, Phone } from "lucide-react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// type FormValues = z.infer<typeof contactValidationSchema>;

// const socialLinks = [
//   {
//     name: "GitHub",
//     icon: <Github className="w-5 h-5" />,
//     url: "https://github.com/shahin2525",
//     color: "hover:bg-gray-800 hover:text-white",
//   },
//   {
//     name: "LinkedIn",
//     icon: <Linkedin className="w-5 h-5" />,
//     url: "https://linkedin.com/in/md-shahin-web",
//     color: "hover:bg-blue-600 hover:text-white",
//   },

//   {
//     name: "Email",
//     icon: <Mail className="w-5 h-5" />,
//     url: "mailto: shahin451999@gmail.com",
//     color: "hover:bg-red-500 hover:text-white",
//   },
//   {
//     name: "Facebook",
//     icon: <Facebook className="w-5 h-5" />, // Make sure to import Facebook from lucide-react
//     url: "https://www.facebook.com/md.shahin.web.dev/",
//     //https://www.facebook.com/md.shahin.web.dev/
//     color: "hover:bg-blue-700 hover:text-white",
//   },
//   {
//     name: "WhatsApp",
//     icon: <Phone className="w-5 h-5" />,
//     url: "https://wa.me/01754138344",
//     color: "hover:bg-green-500 hover:text-white",
//   },
// ];

// export default function ContactForm() {
//   const form = useForm<FormValues>({
//     resolver: zodResolver(contactValidationSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       message: "",
//     },
//   });

//   const router = useRouter();
//   const {
//     formState: { isSubmitting },
//   } = form;

//   const onSubmit: SubmitHandler<FormValues> = async (data) => {
//     try {
//       const res = await createMessage(data);

//       if (res?.success) {
//         toast.success(res?.message || "Message sent successfully!");
//         form.reset();
//         router.push("/");
//       } else {
//         toast.error(res?.message || "Failed to send message");
//       }
//     } catch (err: any) {
//       toast.error(
//         err.message || "An error occurred while sending your message"
//       );
//       console.error(err);
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl mx-auto p-4">
//       {/* Social Links Sidebar */}
//       <motion.div
//         initial={{ x: -20, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="w-full md:w-1/4 flex md:flex-col justify-center gap-4 md:gap-6"
//       >
//         <motion.h1 className="text-2xl font-bold">Get in Touch</motion.h1>
//         {socialLinks.map((link) => (
//           <motion.div
//             key={link.name}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ type: "spring", stiffness: 400, damping: 10 }}
//             className="flex-1"
//           >
//             <Link
//               href={link.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`flex items-center justify-center md:justify-start gap-3 p-3 rounded-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 ${link.color}`}
//             >
//               <span className="text-gray-700 dark:text-gray-300 group-hover:text-white">
//                 {link.icon}
//               </span>
//               <span className="hidden md:inline text-sm font-medium">
//                 {link.name}
//               </span>
//             </Link>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Contact Form */}
//       <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="border border-gray-200 dark:border-gray-700 rounded-xl flex-grow p-6 bg-white dark:bg-gray-800 shadow-lg"
//       >
//         <div className="mb-6">
//           <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
//             Contact Me
//           </h1>
//           <p className="text-gray-600 dark:text-gray-300 mt-2">
//             Have a project in mind or want to collaborate? Send me a message!
//           </p>
//         </div>

//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-gray-700 dark:text-gray-300">
//                     Name
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Your name"
//                       className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-gray-700 dark:text-gray-300">
//                     Email
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="your.email@example.com"
//                       type="email"
//                       className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="message"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-gray-700 dark:text-gray-300">
//                     Message
//                   </FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder="Tell me about your project..."
//                       rows={5}
//                       className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 resize-none"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <Button
//               type="submit"
//               className="w-full mt-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 <span className="flex items-center justify-center">
//                   <svg
//                     className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     ></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                     ></path>
//                   </svg>
//                   Sending...
//                 </span>
//               ) : (
//                 "Send Message"
//               )}
//             </Button>
//           </form>
//         </Form>
//       </motion.div>
//     </div>
//   );
// }
"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { createMessage } from "@/services/message";
import { contactValidationSchema } from "./ContactValidationSchema";
import { z } from "zod";
import { Facebook, Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type FormValues = z.infer<typeof contactValidationSchema>;

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    url: "https://github.com/shahin2525",
    color: "hover:bg-gray-800 hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    url: "https://linkedin.com/in/md-shahin-web",
    color: "hover:bg-blue-600 hover:text-white",
  },
  {
    name: "Email",
    icon: <Mail className="w-5 h-5" />,
    url: "mailto:shahin451999@gmail.com",
    color: "hover:bg-red-500 hover:text-white",
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-5 h-5" />,
    url: "https://www.facebook.com/md.shahin.web.dev/",
    color: "hover:bg-blue-700 hover:text-white",
  },
  {
    name: "WhatsApp",
    icon: <Phone className="w-5 h-5" />,
    url: "https://wa.me/01754138344",
    color: "hover:bg-green-500 hover:text-white",
  },
];

export default function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(contactValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const router = useRouter();
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await createMessage(data);

      if (res?.success) {
        toast.success(res?.message || "Message sent successfully!");
        form.reset();
        router.push("/");
      } else {
        toast.error(res?.message || "Failed to send message");
      }
    } catch (err: any) {
      toast.error(
        err.message || "An error occurred while sending your message"
      );
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto p-4 sm:p-6">
      {/* Social Links Sidebar - Mobile Top / Desktop Left */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/4"
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <motion.h1
            className="text-xl sm:text-2xl font-bold mb-4 text-center lg:text-left text-black"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
          >
            Get in Touch
          </motion.h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3">
            {socialLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center lg:justify-start gap-3 p-3 rounded-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 ${link.color} text-sm sm:text-base`}
                >
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-white">
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Form - Mobile Bottom / Desktop Right */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full lg:w-3/4"
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 h-full">
          <div className="mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
              Contact Me
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">
              Have a project in mind or want to collaborate? Send me a message!
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 sm:space-y-5"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 dark:text-gray-300">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-sm sm:text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 dark:text-gray-300">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="your.email@example.com"
                        type="email"
                        className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-sm sm:text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 dark:text-gray-300">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me about your project..."
                        rows={5}
                        className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 resize-none text-sm sm:text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full mt-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm sm:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </motion.div>
    </div>
  );
}
