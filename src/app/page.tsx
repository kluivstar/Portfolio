import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col sm:flex-row md:flex-col md:px-18 md:py-20  xl:flex-row xl:mx-auto xl:px-40 xl:py-30 2xl:py-75 2xl:px-60">

        {/* Bio Intro */}
        <div className="px-10 py-15 leading-8 xl:w-[60%] xl:mt-112 2xl:mt-237">
          <h1 className="text-[14px] md:text-[15px] lg:text-[15px] 2xl:text-[30px] font-bold tracking-widest">KASIMU KLUIVERT</h1>
          <span className="text-[12px] md:text-[13px] lg:text-[14px] 2xl:text-[25px]">Software Developer - AI Enthusiast - Wordpress Developer</span>
          <h2 className="text-[12px] 2xl:mt-5 md:text-[13px] lg:text-[15px] 2xl:text-[25px]">Currently working as a software developer at{" "}
            <a
              href="https://techcify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1 group font-bold"
            >
              Techcify
              {/* underline effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </a></h2>
          
        </div>

        {/* Links */}
        <div className="text-left xl:w-[70%]">
            <ul className="px-10 text-[51.2px] max-sm:text-[62px] md:text-[115px] lg:text-[155px] 2xl:text-[285px] font-bold font-sarina">
              {["Projects", "About", "Contact"].map((item) => (
              <li
                key={item}
                className="relative inline-block cursor-pointer 
                          transition-transform duration-300 ease-out 
                          hover:-translate-y-1 group"
              >
                <Link href={`/${item.toLowerCase()}`}>
                  <span className="relative">
                    {item}
                    {/* underline effect */}
                    <span
                      className="absolute left-0 -bottom-1 h-[3px] bg-white w-0 
                                transition-all duration-300 ease-out 
                                group-hover:w-full"
                    />
                  </span>
                </Link>
              </li>
              ))}
              
            </ul>
        </div>
      </section>
    </main>
  );
}
