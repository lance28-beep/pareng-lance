"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function MethodologySection() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We understand your goals, audience, and competition to establish a solid foundation for the project.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "We develop a detailed plan that aligns business objectives with effective design solutions.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "We create visual concepts that communicate your message and connect with your audience effectively.",
    },
    {
      number: "04",
      title: "Development",
      description: "We implement the design with clean, optimized code for exceptional performance.",
    },
    {
      number: "05",
      title: "Launch",
      description: "We conduct thorough testing and final optimizations before putting your project online.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="max-w-3xl mx-auto mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our <span className="text-[#7CFF00] relative">
              methodology
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#7CFF00]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-white/70 max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            A structured approach to transform ideas into exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              {/* Step content container */}
              <div className="relative px-4 lg:px-6">
                {/* Step number */}
                <motion.div 
                  className="text-[#7CFF00] text-4xl md:text-5xl font-bold opacity-20 mb-4"
                  whileHover={{ 
                    opacity: 0.4,
                    transition: { duration: 0.2 }
                  }}
                >
                  {step.number}
                </motion.div>

                {/* Step content */}
                <motion.div 
                  className="mb-6"
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-xs">{step.description}</p>
                </motion.div>

                {/* Connector line - Only show on desktop */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute top-[45px] right-0 w-full h-[1px] bg-white/10"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ 
                      duration: 0.7, 
                      delay: index * 0.15 + 0.3,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.15 + 0.5,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                    >
                      <ArrowRight className="w-4 h-4 text-white/20" />
                    </motion.div>
                  </motion.div>
                )}

                {/* Mobile connector - Vertical line */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="lg:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[1px] h-8 bg-white/10"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ 
                      duration: 0.7, 
                      delay: index * 0.15 + 0.3,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.15 + 0.5,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                    >
                      <ArrowRight className="w-4 h-4 text-white/20 rotate-90" />
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

