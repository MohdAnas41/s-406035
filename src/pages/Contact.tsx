
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("sent");
      toast.success("Thank you for your message! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
            Get in Touch
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project idea or opportunity? Feel free to reach out using the form below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full gap-2"
                disabled={formStatus !== "idle"}
              >
                {formStatus === "idle" && (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
                {formStatus === "sending" && "Sending..."}
                {formStatus === "sent" && (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Message Sent
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="card p-6 flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground mb-2">
                    For project inquiries and opportunities
                  </p>
                  <a
                    href="mailto:mohd.anas@example.com"
                    className="text-primary hover:underline inline-block"
                  >
                    mohd.anas@example.com
                  </a>
                </div>
              </div>

              <div className="card p-6 flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-muted-foreground mb-2">
                    Available weekdays, 9AM-5PM
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="text-primary hover:underline inline-block"
                  >
                    +123 456 7890
                  </a>
                </div>
              </div>

              <div className="card p-6 flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground mb-2">Based in</p>
                  <address className="not-italic">
                    New Delhi, India
                  </address>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-8 mb-4">Connect With Me</h3>

              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="card p-4 flex flex-col items-center justify-center text-center hover:bg-secondary/50 transition-colors"
                >
                  <Github className="h-8 w-8 mb-2" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="card p-4 flex flex-col items-center justify-center text-center hover:bg-secondary/50 transition-colors"
                >
                  <Linkedin className="h-8 w-8 mb-2" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                
                <a
                  href="https://kaggle.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="card p-4 flex flex-col items-center justify-center text-center hover:bg-secondary/50 transition-colors"
                >
                  <BookOpen className="h-8 w-8 mb-2" />
                  <span className="text-sm font-medium">Kaggle</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
