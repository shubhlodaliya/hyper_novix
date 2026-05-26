import { Phone, MessageCircle, Mail, Send } from "lucide-react";
import { useState } from "react";

const contacts = [
  { name: "Shubh Lodaliya", phone: "+91 76220 20224", raw: "917622020224" },
  { name: "Kunj Virani", phone: "+91 93284 58858", raw: "919328458858" },
];

function Field({ label, id, type = "text", placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-neon-blue/60 focus:shadow-glow"
      />
    </div>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      access_key: "8db63e99-965f-4897-b2f7-e332a950fc68",
      subject: "New inquiry from HyperNovix website",
      from_name: "HyperNovix Website",
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("details"),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message || "Submission failed");
      }
      setSent(true);
      form.reset();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
              Let's Build Together
            </div>
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Have an idea? <span className="text-gradient">Let's launch it.</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Tell us about your project. We typically reply within a few hours.
            </p>

            <div className="mt-8 space-y-4">
              {contacts.map((c) => (
                <div key={c.name} className="glass glow-border rounded-2xl p-5">
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-sm text-muted-foreground">{c.phone}</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={`tel:${c.raw}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
                    >
                      <Phone className="h-3.5 w-3.5" /> Call
                    </a>
                    <a
                      href={`https://wa.me/${c.raw}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl glass-strong px-4 py-2 text-xs font-semibold text-foreground transition-transform hover:scale-105"
                    >
                      <MessageCircle className="h-3.5 w-3.5 text-neon-cyan" /> WhatsApp
                    </a>
                    <a
                      href="mailto:hello@hypernovix.com"
                      className="inline-flex items-center gap-2 rounded-xl glass-strong px-4 py-2 text-xs font-semibold text-foreground transition-transform hover:scale-105"
                    >
                      <Mail className="h-3.5 w-3.5 text-neon-purple" /> Email
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            className="reveal glass glow-border rounded-3xl p-7"
            onSubmit={handleSubmit}
          >
            <div className="space-y-5">
              <Field label="Your name" id="name" placeholder="Jane Cooper" />
              <Field label="Email" id="email" type="email" placeholder="jane@brand.com" />
              <Field label="Company" id="company" placeholder="Brand Inc." />
              <div>
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Project details
                </label>
                <textarea
                  required
                  rows={5}
                  name="details"
                  placeholder="Tell us what you want to build..."
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-input/40 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-neon-blue/60 focus:shadow-glow"
                />
              </div>
              {error ? (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs text-red-200">
                  {error}
                </div>
              ) : null}
              <button
                type="submit"
                disabled={sending}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                {sent ? "Sent — we'll be in touch" : sending ? "Sending..." : "Send inquiry"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
