"use client";
import { motion } from "framer-motion";

const page = () => {
  return (
    <main className="xl:px-30">
      {/* Bio */}
      <section className="flex flex-col-reverse sm:flex-row px-8 py-14 md:justify-between space-x-5  md:px-27 xl:px-50 2xl:px-80">
        {/* About content */}
        <div className="py-10 w-[100%] md:w-[100%] lg:w-[80%] 2xl:px-90">
          <div>
            <motion.h1
              initial={{ y: 100, opacity: 0 }} // Start below, invisible
              animate={{ y: 0, opacity: 1 }} // Slide up into place
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[32px] font-bold font-sarina text-left md:text-[60px] lg:text-[70px] xl:text-[90px] 2xl:text-[120px]"
            >
              Reach me
            </motion.h1>
          </div>

          <h1 className="text-[14px] tracking-wide mt-12 text-slate-100 md:relative ">
            Need a well craft website that truly speaks for you{" "}
            <br className="hidden xl:flex" /> Businesses? Get in touch.
          </h1>
          <br />
          <p className="text-[14px] tracking-wide leading-[-10px]">
            <strong>Email:</strong>
            <a
              href="mailto:kasykluivert@gmail.com"
              className="text-[14px] tracking-wide leading-[-10px] ml-2"
            >
              kasykluivert@gmail.com
            </a>
          </p>

          <p className="text-[14px] tracking-wide leading-[-10px]">
            <strong>On the Internet:</strong>
            <a
              href="https://www.linkedin.com/kasimu-kluivert"
              target="_blank"
              className="text-[14px] tracking-wide leading-[-10px] ml-2 underline"
            >
              LinkedIn
            </a>{" "}
            /
            <a
              href="https://twitter.com/kluivstar"
              target="_blank"
              className="text-[14px] tracking-wide leading-[-10px] ml-2 underline"
            >
              Twitter
            </a>{" "}
            /
            <a
              href="https://github.com/kluivstar"
              target="_blank"
              className="text-[14px] tracking-wide leading-[-10px] underline ml-2"
            >
              Github
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default page;
