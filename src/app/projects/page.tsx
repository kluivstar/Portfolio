import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="overflow-x-hidden">
      <section className="flex flex-col sm:flex-row md:flex-col md:px-18 md:py-20  xl:flex-row xl:mx-auto xl:px-40 xl:py-25 2xl:px-60">

        {/* Work Intro */}
        <div className="px-10 py-15 leading-5 lg:leading-8 xl:w-[60%] xl:mt-32 2xl:mt-37">
          <h1 className="text-[14px] md:text-[15px] lg:text-[28px] 2xl:text-[35px] font-bold tracking-widest">Projects</h1>
          <h2 className="text-[12px] 2xl:mt-5 lg:text-[18px] 2xl:text-[18px]">Here, you’ll find a collection of projects I’ve worked on ranging from full-stack applications to creative experiments. Each project reflects not only my technical skills but also how I approach problem-solving, design, and building solutions that make an impact.
            </h2>
          
        </div>

        {/* Links */}
        <div className="text-left xl:w-[70%]">
            <ul className="px-10 text-[51.2px] max-sm:text-[42px] md:text-[65px] lg:text-[95px] 2xl:text-[95px] font-bold">
                {[
                { title: "2P Stores", desc: "Web Engineer", url: "https://2pstores.com" },
                { title: "Cimplii", desc: "Project", url: "https://cimplii.vercel.com" },
                { title: "Stackria", desc: "Frontend Engineer", url: "https://stackria.com" },
                
                { title: "Colorful", desc: "Web Engineer", url: "https://colorfulsoundesign.com" },
                { title: "JCH", desc: "Frontend Engineer — SEO & Optimization", url: "https://www.jimscreativehub.com/" },
                { title: "Techcify", desc: "Software Engineer", url: "https://www.techcify.com/" },
                ].map(({ title, desc, url }) => (
                <li
                    key={title}
                    className="relative inline-block cursor-pointer 
                            transition-transform duration-300 ease-out 
                            hover:-translate-y-1 group mr-8"
                >
                    <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center gap-4"
                    >
                    <div className="flex flex-col">
                        <span className="relative font-sarina">
                        {title}
                        {/* underline effect */}
                        <span
                            className="absolute left-0 -bottom-1 h-[3px] bg-white w-0 
                                    transition-all duration-300 ease-out 
                                    group-hover:w-full"
                        />
                        </span>
                        <span className="text-sm font-normal text-gray-400">{desc}</span>
                    </div>
                    </a>
                </li>
                ))}
            </ul>
        </div>


      </section>
    </main>
  );
}
