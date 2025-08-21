import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTAPage() {
  const features = [
    "Seamless & secure transactions",
    "24/7 customer support",
    "Fast onboarding process",
    "Trusted by 10k+ users",
  ];

  return (
    <section className="relative rounded-md overflow-hidden py-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-400 to-green-400 opacity-80" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl rounded-3xl bg-white/10 p-10 backdrop-blur-lg shadow-2xl lg:p-16"
        >
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
            {/* Left Side - Text */}
            <div className="lg:w-1/2 text-white">
              <motion.h2
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-4 text-4xl font-bold md:text-5xl"
              >
                Ready to Grow Your Wealth?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-white/90"
              >
                Join thousands of users who trust our e-wallet solution for
                faster, safer, and smarter financial management.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button
                  size="lg"
                  className="mt-8 cursor-pointer rounded-full bg-primary/60 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:scale-105 transition"
                >
                  Get Started <ArrowRight className="ml-2 size-5" />
                </Button>
              </motion.div>
            </div>

            {/* Right Side - Features */}
            <motion.ul
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/3 flex flex-col space-y-4 text-white"
            >
              {features.map((item, idx) => (
                <li key={idx} className="flex items-center text-lg font-medium">
                  <Check className="mr-3 size-6 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
