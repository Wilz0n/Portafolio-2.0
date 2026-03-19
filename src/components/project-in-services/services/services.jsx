import React from "react";
import {
  FaLaptopCode,
  FaRocket,
  FaMobileAlt,
  FaCode,
  FaTerminal,
  FaGithub,
  FaShieldAlt,
  FaSitemap, // Importado una sola vez aquí
  FaWordpress,
  FaPalette,
  FaPuzzlePiece,
  FaDatabase,
} from "react-icons/fa";

export default function Services() {
  return (
    <>

      {/* First part of Services */}

      <div className="pt-12 pb-1">
        <h1 className="text-4xl md:text-5xl text-center">SERVICES</h1>
      </div>
      <article className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8 items-start ">
          <div className="relative bg-white/5 border border-[#d4a574] rounded-lg overflow-hidden p-4 transform">
            <img
              src="/img/project-in-services/services/code-time.avif"
              alt="code-time-custom-web"
              className="w-full h-full rounded"
            />
          </div>
          <div className="space-y-6">
            <div className="border border-[#d4a574] rounded-lg p-6 bg-[#252525]">
              <h2 className="text-3xl font-bold text-[#d4a574] mb-4">
                High-Performance Web & Automation Solutions
              </h2>
              <p className="text-xl leading-relaxed">
               I develop fast, scalable digital ecosystems using Next.js and Astro,
                integrated with intelligent n8n workflows to automate business processes.
                My focus is on creating high-conversion interfaces while eliminating manual 
                tasks through API integrations and cloud infrastructure.
              </p>
              <p className="text-[#a8a8a8]">
              Utilizing Atomic Design with Tailwind CSS and secure Docker deployments, I ensure 
              your platform is not only modern and responsive but also robust and autonomous. From 
              Cloudflare security hardening to custom server management via Linux terminal, I build 
              the engine that drives your business growth.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-3 text-center transition-colors">
                  <FaLaptopCode className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>Fullstack Architecture</p>
                </div>

                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-3 text-center transition-colors">
                  <FaRocket className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>High-Speed SEO</p>
                </div>

                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-3 text-center transition-colors">
                  <FaMobileAlt className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>UI/UX Engineering</p>
                </div>

                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-3 text-center transition-colors">
                  <FaCode className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>Scalable Systems</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-4 text-center transition-colors">
                  <FaTerminal className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>Cloud Ops & Docker</p>
                </div>

                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-4 text-center transition-colors">
                  <FaSitemap className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>n8n Automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Second part of Services */}

      <article className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8 items-start md:grid-flow-dense">
          <div className="md:col-start-2">
            <div className="relative bg-white/5 border border-[#d4a574] rounded-lg overflow-hidden p-4 transform">
              <img
                src="/img/project-in-services/services/sketch.avif"
                alt="sketch-cms-custom"
                className="w-full h-full rounded"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="border border-[#d4a574] rounded-lg p-6 bg-[#252525]">
              <h2 className="text-3xl font-bold text-[#d4a574] mb-4">
                Enterprise CMS Architecture & Web Operations
              </h2>
              <p className="text-xl leading-relaxed">
                I architect high-performance, scalable WordPress and Shopify Plus ecosystems designed 
                for mission-critical business operations. My approach goes beyond standard development; 
                I engineering custom themes and headless architectures that prioritize extreme loading speeds, 
                SEO-ready structures, and long-term scalability.
              </p>
              <p className="text-[#a8a8a8]">
                I specialize in the full lifecycle of a digital asset: from advanced MySQL/MariaDB optimization 
                and Git/GitHub version control to secure deployments in Docker environments. Leveraging deep Linux (Arch/Ubuntu) 
                expertise and terminal-based workflows, I provide proactive server-side stability, Cloudflare (WAF/DNS) hardening, 
                and specialized Malware Removal services to ensure your platform remains resilient against any threat.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-3 text-center hover:border-[#d4a574] transition-colors">
                  <FaWordpress className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>Enterprise CMS</p>
                </div>

                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-3 text-center transition-colors">
                  <FaPalette className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>Headless & UI Design</p>
                </div>

                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-3 text-center transition-colors">
                  <FaPuzzlePiece className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>API & Plugin Engineering</p>
                </div>

                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-3 text-center transition-colors">
                  <FaDatabase className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>Data Management</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-4 text-center transition-colors">
                  <FaTerminal className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>Web Ops & Docker</p>
                </div>

                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-4 text-center transition-colors">
                  <FaShieldAlt className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>WAF & Malware Defense</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
