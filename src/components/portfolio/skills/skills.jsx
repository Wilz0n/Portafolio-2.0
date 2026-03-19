import React from "react";

export default function Skills_Portfolio() {
  return (
    <>
      <h1 className="text-3xl text-center mb-8">Skills</h1>
      <article className="grid md:grid-cols-2 gap-6 mb-6">
        
        <div className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6">
          <h1 className="text-2xl mb-4 font-bold">Front-End Developer</h1>
          <ul>
            <li>- <b>Modern Frameworks:</b> React, Next.js, Astro.</li>
            <li>- <b>Styling & Architecture: </b>Tailwind CSS, Sass, Atomic Design.</li>
            <li>- <b>CMS Expert: </b>WordPress (Custom Dev), Shopify Plus.</li>
            <li>- <b>SEO-Optimized: </b>Technical SEO & Performance.</li>
            <li>- <b>Version Control: </b>Git & GitHub.</li>
          </ul>
        </div>

        <div className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6">
          <h1 className="text-2xl mb-4 font-bold">Automation & Backend</h1>
          <ul>
            <li>- <b>Workflows: </b>Automation with n8n.</li>
            <li>- <b>API Management: </b>Integration of REST APIs.</li>
            <li>- <b>Infrastructure: </b>Docker (Deployments & Containers).</li>
            <li>- <b>System Admin: </b>Linux Terminal (Ubuntu/Arch) for reliable deployments.</li>
          </ul>
        </div>

      </article>
      <article className="grid md:grid-cols-3 gap-6">
        <div className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6">
          <h1 className="text-2xl mb-4 font-bold">Web Ops & Infrastructure</h1>
          <ul>
            <li>- <b>Cloud Services: </b>Cloudflare (WAF/DNS/Caché).</li>
            <li>- <b>Web Security: </b>Advanced WordPress Security & Malware Removal.</li>
            <li>- <b>Optimization: </b>WPO (Web Performance Optimization).</li>
            <li>- <b>Data Management: </b>SQL (MySQL/MariaDB) & Google Sheets API.</li>
          </ul>
        </div>

        <div className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6">
          <h1 className="text-2xl mb-4 font-bold">Mobile development</h1>
          <ul className= "text-2xl">
            <li>- In Progress </li>
          </ul>
        </div>
        <div className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6">
          <h1 className="text-2xl mb-4 font-bold">Design</h1>
          <ul>
            <li>- <b>Design to Code: </b>Intermediate-advanced use of Figma. Generation of design structures via prompts and direct code editing for rapid, pixel-perfect UI development.</li>
            <li>- <b>Vectorizing for Hardware: </b>Advanced vector manipulation with Inkscape & Adobe Illustrator. Transforming raster images into detailed vector paths optimized for laser cutting and rendering systems.</li>
          </ul>
        </div>
      </article>
    </>
  );
}
