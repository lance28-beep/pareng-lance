"use client"

import { motion } from "framer-motion"

export default function ProcessSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-black">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/0 pointer-events-none"></div>

      {/* Main content */}
      <div className="w-full">
        {/* Text content with the same style as the reference */}
        <motion.div
          className="max-w-4xl mx-auto text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed">
            Our design process is based on <span className="text-[#7CFF00]">research, strategy, and creativity</span>,
            to create digital experiences that not only look good, but also generate results. Every visual element is
            designed to connect with your audience and convey the unique value of your brand.
          </p>
        </motion.div>

        {/* Large stylized text/logo with enhanced effects */}
        <motion.div
          className="mt-24 relative overflow-hidden w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full">
            {/* Glow effect */}
            <div className="absolute inset-0 blur-2xl"></div>
            
            {/* Marquee container */}
            <div className="relative whitespace-nowrap overflow-hidden w-full">
              <div className="animate-marquee inline-block">
                <h2
                  className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-transparent tracking-tighter leading-none inline-block"
                  style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)" }}
                >
                  creative <span style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0)", color: "rgba(128, 128, 128, 0.07)" }}>process</span>
                </h2>
                {/* Duplicate for seamless marquee */}
                <h2
                  className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-transparent tracking-tighter leading-none inline-block"
                  style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)" }}
                >
                  creative <span style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0)", color: "rgba(128, 128, 128, 0.07)" }}>process</span>
                </h2>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

