"use client";

import React from "react";
import { motion } from "framer-motion";
import "../styles/style.scss";
// Footer component for Next.js + Tailwind
// Props:
// - logo: JSX or img element for the brand
// - links: Array of { title, href }
// - social: Array of { name, href, icon: JSX }
// - dir: 'rtl' | 'ltr' (defaults to 'rtl')

export default function Footer({
  logo = <img src="/imgs/logo.png" alt="Logo" width={200} />,
  links = [
    { title: "الرئيسية", href: "/" },
    { title: "عنّا", href: "/about" },
    { title: "اتصل", href: "/contact" },
  ],
  social = [],
  dir = "rtl",
}) {
  return (
    <footer
      dir={dir}
      className="bg-white/80 backdrop-blur-sm dark:bg-slate-900/70 border-t dark:border-slate-800 filter mt-2.5"
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 flex-wrap">
          <div className="flex items-center gap-4 ">
            <div className="w-60 h-12 flex items-center justify-center rounded-xl ">
              {logo}
            </div>
            <div>
              <p className="text-gray-900 dark:text-gray-800 font-medium">
                ابقَ على تواصل
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-800">
                نشرة بريدية و تحديثات - وعد مني ما أزعجك
              </p>
            </div>
          </div>

          <nav className="flex gap-6 md:gap-10 items-center">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-900 dark:text-gray-800 hover:text-amber-600 dark:hover:text-amber-800 transition"
              >
                {l.title}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2"
            >
              <label htmlFor="email" className="sr-only">
                بريدك
              </label>
              <input
                id="email"
                type="email"
                placeholder="بريدك"
                className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-white text-white dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
              />

              <button id="me-sned" className="bg-amber-600">
                <div class="svg-wrapper-1">
                  <div class="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Send</span>
              </button>
            </form>

            <div className="flex items-center gap-3">
              {social.length === 0 ? (
                <span className="text-sm text-slate-500">
                  لا حسابات اجتماعية بعد
                </span>
              ) : (
                social.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                  >
                    {s.icon}
                  </a>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row md:justify-between items-center gap-4 text-sm text-gray-900 dark:text-gray-800">
          <p>© {new Date().getFullYear()} كل الحقوق محفوظة.</p>
          <p>Designed with ❤ — لا تتردد تطلب تعديل بسيط</p>
        </div>
      </div>
    </footer>
  );
}
