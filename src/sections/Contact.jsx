import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";
import { contactContent } from "../constants";

const Contact = () => {
  const formRef = useRef(null);
  const formPaneRef = useRef(null);
  const scenePaneRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [sceneVisible, setSceneVisible] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const formEl = formPaneRef.current;
    const sceneEl = scenePaneRef.current;

    if (!formEl && !sceneEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (formEl && entry.target === formEl) {
            setFormVisible(true);
            observer.unobserve(formEl);
          }

          if (sceneEl && entry.target === sceneEl) {
            setSceneVisible(true);
            observer.unobserve(sceneEl);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    if (formEl) observer.observe(formEl);
    if (sceneEl) observer.observe(sceneEl);

    return () => {
      if (formEl) observer.unobserve(formEl);
      if (sceneEl) observer.unobserve(sceneEl);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="contact" className="relative z-10 flex-center section-padding pb-10 md:pb-20 overflow-hidden">
      <div className="relative z-10 w-full h-full md:px-16 px-6">
        <TitleHeader
          title={contactContent.title}
          sub={contactContent.sub}
          className={contactContent.className}
          badgeClassName={contactContent.badgeClassName}
        />
        <div className="grid-12-cols mt-10 md:mt-16 gap-10">
          <div
            ref={formPaneRef}
            className={`contact-pane contact-pane--form xl:col-span-5 ${
              formVisible ? "is-visible" : ""
            }`}
            style={{ "--contact-delay": "0ms" }}
          >
            <div className="flex-center card-border rounded-2xl p-8 md:p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div
            ref={scenePaneRef}
            className={`contact-pane contact-pane--scene xl:col-span-7 flex w-full min-h-[420px] items-stretch ${
              sceneVisible ? "is-visible" : ""
            }`}
            style={{ "--contact-delay": "140ms" }}
          >
            <ContactExperience />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
