import Image from 'next/image'
import React from 'react'
import Profile from '../assets/pro.jpg'
import { Code, Layers, Layout, PlugZap, LineChart } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-6 text-slate-500" />,
    title: "Web Development",
    description:
      "Modern, responsive, and scalable websites tailored to your business needs.",
  },
  {
    icon: <Layers className="w-8 h-6 text-slate-500" />,
    title: "Full-Stack Solutions",
    description:
      "Complete applications with React/Next.js, Node.js/Express, and MongoDB.",
  },
  {
    icon: <Layout className="w-8 h-6 text-slate-500" />,
    title: "UI/UX Implementation",
    description:
      "Pixel-perfect, interactive interfaces with accessibility and speed in mind.",
  },
  {
    icon: <PlugZap className="w-8 h-6 text-slate-500" />,
    title: "API Integration",
    description:
      "Connecting apps with payments, authentication, and cloud services.",
  },
  {
    icon: <LineChart className="w-8 h-6 text-slate-500" />,
    title: "Website Reviews & Optimization",
    description:
      "Boosting performance, usability, and conversions for your business site.",
  },
];

const page = () => {
  return (
    <main className='lg:px-5'>
        {/* Bio */}
        <section className='flex flex-col-reverse sm:flex-row px-8 py-14 md:justify-between space-x-5  md:px-27 xl:px-50 2xl:px-80'>
            
            {/* About content */}
            <div className='py-10 w-[100%] md:w-[100%] lg:w-[80%] 2xl:px-90'>
                <div className=''>
                    <h1 className='text-[22px] font-bold font-sarina text-left md:text-[50px] lg:text-[50px] xl:text-[90px] 2xl:text-[120px]'>Who I Am</h1>
                </div>

                <h1 className="text-[29px] md:text-4xl mt-12 text-slate-100 md:relative lg:text-[46px]">
                    I Craft Code that Powers <br className='hidden xl:flex'/> Businesses
                </h1>

                <p className="text-gray-200 leading-8 text-[14px] 2xl:mt-5 py-2 lg:text-[14px] xl:text-[15px] 2xl:text-[20px]">
                I’m <span className="font-semibold text-[14px] 2xl:mt-5  2xl:text-[20px]">Kasimu Kluivert (Denzel)</span> — a software developer passionate about 
                building digital products that are practical, reliable, and scalable. 
                I love transforming ideas into working solutions that help businesses 
                and people achieve more with less friction. <br/>For me, code isn’t just 
                about syntax, it’s about creating experiences that solve real problems.
                <br/>I focus on building digital experiences that are clean, human-centered, and easy to use because tech should never get in the way of the people using it.
                </p>

                {/* Experience */}
                <div>
                  <h1 className="text-[29px] py-10 md:text-4xl font-bold text-slate-100 font-sarina lg:text-[40px]">
                    Experience
                  </h1>
                  <p className="text-gray-200 leading-8 text-[14px] 2xl:mt-5  py-2 lg:text-[14px] xl:text-[15px] 2xl:text-[20px]">From freelance projects to agency work, I’ve built and optimized solutions across industries. My journey includes creating responsive landing pages, full-stack applications with React/Next.js, Node.js/Express, and MongoDB. Beyond writing code, I’ve learned how to communicate with clients, manage shifting requirements, and deliver under real-world constraints.
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-gray-300 text-[14px] leading-8 2xl:text-[20px]">
                    <li>
                      <span className="font-semibold text-white">Web Design:</span> 4 years creating modern, user-friendly designs that balance aesthetics with usability.
                    </li>
                    <li>
                      <span className="font-semibold text-white">Front-end Web Development:</span> 4 years building responsive, interactive, and accessible web interfaces.
                    </li>
                    <li>
                      <span className="font-semibold text-white">WordPress Development:</span> 3 years developing and customizing websites using WordPress.
                    </li>
                  </ul>

                </div>

                {/* Skills */}
                <div>
                  <h1 className="text-[29px] py-10 md:text-4xl font-bold text-slate-100 font-sarina lg:text-[40px]">
                    Skills
                  </h1>
                  <ul className="list-disc list-inside space-y-3 text-gray-300 text-[14px] leading-8 2xl:text-[20px]">
                    <li>
                      <span className="font-semibold text-white">React & Next.js:</span> for building fast, user-friendly interfaces that feel smooth and intuitive
                    </li>
                    <li>
                      <span className="font-semibold text-white">Node.js & Express:</span> to develop scalable back-ends, handle server-side logic, and build custom APIs
                    </li>
                    <li>
                      <span className="font-semibold text-white">Dev Tools:</span> Git, GitHub, Vercel, Netlify, Postman
                    </li>
                    <li>
                      <span className="font-semibold text-white">WordPress:</span> when businesses need flexible, content-driven websites that are easy to manage
                    </li>
                    <li>
                      <span className="font-semibold text-white">Other:</span> API Integration, Payment Systems, Debugging & Optimization
                    </li>
                  </ul>
                </div>

                <a 
                href="https://drive.google.com/file/d/1qKWCq92tNt-qEMEAaA9nVB2S6WFKq8tX/view?usp=sharing" 
                className="inline-block px-5 py-2 mt-4 text-[12px] md:text-[13px] lg:text-[15px] 2xl:text-[25px] text-black font-semibold bg-slate-200 rounded-sm shadow hover:bg-slate-300 transition"
                >
                View CV
                </a>
            </div>

            {/* Image */}
            <div className="flex-shrink-0 ml-42 md:ml-0 md:mt-0 -mt-10 w-[45%] md:w-[20%] lg:w-[20%] lg:mt-10 lg:-mr-0">
                <Image 
                src={Profile} 
                alt="Denzel - Software Developer" 
                width={200} 
                className=" w-[35%] h-[18%] lg:w-[100%] absolute lg:relative md:z-10 md:w-[20%] md:h-[200px] 2xl:w-[100%] 2xl:h-[400px] 2xl:-ml-80"
                />
            </div>
        </section>

        {/* Service */}
        <section className="py-16 bg-black-900 px-10 md:px-27 xl:px-50 2xl:px-90">
            <div className="mx-auto 2xl:px-80">
            {/* Title */}
                <h2 className="text-[29px] md:text-[22px] font-bold font-sarina text-left lg:text-[40px]">
                    What I Offer.
                </h2>
                <h1 className='text-gray-300 text-[14px] py-5 md:px-10 md:-ml-10 lg:px-25 lg:-ml-24 2xl:text-[20px]'>Every business has unique challenges, and I focus on creating digital solutions that are both functional and impactful.</h1>

                {/* Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-black rounded-sm shadow-md p-6 hover:shadow-xl transition duration-300"
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-xl text-slate-100 font-semibold mb-2 xl:text-[23px]">{service.title}</h3>
                        <p className="text-gray-300 text-[14px] 2xl:text-[18px] 2xl:mt-5 ">{service.description}</p>
                    </div>
                    ))}
                </div>
                <a 
                href="#" 
                className="inline-block px-5 py-2 mt-4 text-[12px] md:text-[13px] lg:text-[15px] 2xl:text-[25px] text-black font-semibold bg-slate-200 mx-auto rounded-sm shadow hover:bg-slate-300 transition"
                >
                Contact Me
            </a>
            </div>
            
        </section>
        
    </main>
  )
}

export default page