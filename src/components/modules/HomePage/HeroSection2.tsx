import BannerImg2 from "@/assets/images/BannerImg2.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Landmark, Wallet } from "lucide-react";

interface IHeroProps {
  icon?: React.ReactNode;
  heading?: string;
  description?: string;
  button?: {
    text: string;
    icon?: React.ReactNode;
    url: string;
  };
  trustText?: string;
  imageAlt?: string;
}

export const HeroSection2 = ({
  icon = <Wallet className="size-6" />,
  heading = "Fast, Secure digital wallet payments",
  description = "Send, receive, and manage your money instantly with the most secure and convenient e-wallet. Experience seamless payments, instant transfers – all from your pocket",
  button = {
    text: "Discover More",
    icon: <Landmark className="ml-2 size-4" />,
    url: "https://www.shadcnblocks.com",
  },
  trustText = "Trusted by 25.000+ Customers",

  imageAlt = "placeholder",
}: IHeroProps) => {
  return (
    <section className="overflow-hidden py-32">
      <div className="container">
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col gap-5">
            {/* Static Background Circle with subtle zoom */}
            <motion.div
              style={{ transform: "translate(-50%, -50%)" }}
              className="absolute hidden md:block -top-70 left-25 -z-10 mx-auto w-[800px] h-[800px] md:w-[1300px] md:h-[1300px] rounded-full border [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] p-16 md:p-32"
              animate={{ scale: [1, 1.05, 1] }} // subtle zoom in/out
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            >
              <div className="w-full h-full rounded-full border border-primary/15 p-16 md:p-32">
                <div className="w-full h-full rounded-full border"></div>
              </div>
            </motion.div>

            {/* Icon */}
            <motion.span
              className="mx-auto flex size-16 items-center justify-center rounded-full border md:size-20"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {icon}
            </motion.span>

            {/* Heading */}
            <motion.h2
              className="mx-auto max-w-5xl text-center text-3xl font-medium text-balance md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {heading}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>

            {/* Button */}
            <motion.div
              className="flex flex-col items-center justify-center gap-3 pt-3 pb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Button className="text-white" size="lg" asChild>
                  <a href={button.url}>
                    {button.text} {button.icon}
                  </a>
                </Button>
              </motion.div>
              {trustText && (
                <motion.div
                  className="text-xs text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.8 }}
                  viewport={{ once: true }}
                >
                  {trustText}
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Banner Image */}
          <motion.img
            src={BannerImg2}
            alt={imageAlt}
            className="mx-auto h-full max-h-[524px] w-full max-w-5xl rounded-2xl object-cover"
            initial={{ opacity: 0.6, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          />
        </div>
      </div>
    </section>
  );
};
