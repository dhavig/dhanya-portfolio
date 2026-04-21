'use client';

import { useState } from 'react';
import { Reveal } from '@/components/Reveal';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'drafted'>('idle');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hi Dhanya — message from ${name || 'your portfolio'}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? `\n${email}` : ''}`
    );
    window.location.href = `mailto:dhanya.sridhar02@gmail.com?subject=${subject}&body=${body}`;
    setStatus('drafted');
  };

  return (
    <section id="contact" className="py-32 relative font-sans">
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        <Reveal>
          <div className="text-center mb-16">
            <span className="font-medium text-sm uppercase tracking-wider text-red-600 dark:text-red-400">
              Get in Touch
            </span>
            <h2 className="text-5xl sm:text-6xl font-serif mt-4 mb-6 text-stone-900 dark:text-stone-100">
              Let&apos;s Build Quality Together
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-stone-600 dark:text-stone-400">
              Actively seeking Senior SDET roles. Based in Chicago — available for hybrid, remote,
              or on-site across the US. Work-authorized, no sponsorship required.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={onSubmit}
            className="p-8 sm:p-12 rounded-3xl backdrop-blur-sm bg-white dark:bg-stone-800 shadow-xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium mb-2 text-stone-700 dark:text-stone-300"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border bg-stone-50 dark:bg-stone-900/60 border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium mb-2 text-stone-700 dark:text-stone-300"
                >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border bg-stone-50 dark:bg-stone-900/60 border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium mb-2 text-stone-700 dark:text-stone-300"
              >
                Your Message
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border bg-stone-50 dark:bg-stone-900/60 border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition resize-none"
                placeholder="Tell me about the role or just say hi..."
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p
                className={`text-sm transition-opacity ${
                  status === 'drafted'
                    ? 'opacity-100 text-green-700 dark:text-green-400'
                    : 'opacity-0'
                }`}
              >
                Your email client should be open — hit send!
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 bg-red-700 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md hover:shadow-red-500/20"
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-16 text-center">
            <p className="text-lg mb-6 text-stone-600 dark:text-stone-400">
              Prefer to reach out directly?
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <a
                href="https://linkedin.com/in/dhanyasridhar02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 w-full sm:w-auto justify-center bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700 hover:text-red-600 dark:hover:text-red-400"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/dhavig"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 w-full sm:w-auto justify-center bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700 hover:text-red-600 dark:hover:text-red-400"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function baseProps(className?: string) {
  return {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  };
}

function Send({ className }: { className?: string }) {
  return (
    <svg {...baseProps(className)}>
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
      <path d="m21.854 2.147-10.94 10.939" />
    </svg>
  );
}

function Linkedin({ className }: { className?: string }) {
  return (
    <svg {...baseProps(className)}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function Github({ className }: { className?: string }) {
  return (
    <svg {...baseProps(className)}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
