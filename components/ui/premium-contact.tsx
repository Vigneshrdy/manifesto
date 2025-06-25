"use client"
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Linkedin, Copy, ExternalLink, Clock, Shield, Zap, Sparkles } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Me",
    description: "Get in touch via email",
    value: "24f2007195@ds.study.iitm.ac.in",
    action: "copy",
    gradient: "from-blue-500/20 to-cyan-500/20",
    hoverColor: "blue",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect with me professionally",
    value: "vigneshreddytadasina",
    link: "https://www.linkedin.com/in/vigneshreddytadasina/",
    action: "redirect",
    gradient: "from-blue-600/20 to-blue-500/20",
    hoverColor: "blue",
  },
]

const companyStats = [
  { label: "Response Time", value: "< 24 hours", icon: Clock },
  { label: "Commitment", value: "100%", icon: Shield },
  { label: "Student First", value: "Always", icon: Zap },
]

export function PremiumContact() {
  const [copySuccess, setCopySuccess] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleContactMethod = async (method: (typeof contactMethods)[0]) => {
    if (method.action === "copy") {
      try {
        await navigator.clipboard.writeText(method.value)
        setCopySuccess(true)
        setTimeout(() => setCopySuccess(false), 2000)
      } catch (err) {
        console.error("Failed to copy email:", err)
      }
    } else if (method.action === "redirect" && method.link) {
      window.open(method.link, "_blank")
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 0.86, 0.39, 0.96],
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-blue-600/[0.05] to-blue-700/[0.08]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            backgroundSize: "400% 400%",
          }}
        />

        {/* Moving orbs */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 200, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl"
          animate={{
            x: [0, -150, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.3)" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-blue-300" />
            </motion.div>
            <span className="text-sm font-medium text-white/80">✨ Let's Connect</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>

          <motion.h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight" variants={fadeInUp}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Get in</span>
            <br />
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Touch
            </motion.span>
          </motion.h2>

          <motion.p className="text-xl sm:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed" variants={fadeInUp}>
            Ready to build a stronger student community together? Let's start a conversation about our shared vision for
            the region.
          </motion.p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20" variants={fadeInUp}>
          {companyStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-white/[0.15] group hover:bg-white/[0.08] transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              variants={fadeInUp}
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-white/20 flex items-center justify-center mx-auto mb-3"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-6 h-6 text-blue-300" />
              </motion.div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods Only */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Ways to reach me</h3>
              <p className="text-white/60 text-lg">Choose the method that works best for you.</p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleContactMethod(method)}
                  className="w-full text-left p-6 bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-white/[0.15] hover:bg-white/[0.08] transition-all group"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} border border-white/20 flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      <method.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-1">{method.title}</h4>
                      <p className="text-white/60 text-sm mb-2">{method.description}</p>
                      <p className="text-white font-medium">{method.value}</p>
                    </div>
                    {method.action === "copy" ? (
                      <Copy className="w-5 h-5 text-white/40 group-hover:text-white transition-all" />
                    ) : (
                      <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Copy Success Message */}
            <AnimatePresence>
              {copySuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-green-500/20 border border-green-400/30 rounded-xl text-center"
                >
                  <p className="text-green-400 font-medium">Email copied to clipboard!</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Additional Info */}
            <motion.div
              className="p-6 bg-gradient-to-br from-blue-500/[0.08] to-blue-600/[0.08] backdrop-blur-xl rounded-2xl border border-blue-400/30"
              variants={fadeInUp}
            >
              <h4 className="text-lg font-semibold text-white mb-3">Quick Response Commitment</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                I'm committed to being accessible to all students in our region. All messages are typically answered
                within 24 hours, and I'm always ready to discuss how we can strengthen our student community together.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
