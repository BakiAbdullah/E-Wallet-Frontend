import {
  DollarSign,
  MessagesSquare,
  PersonStanding,
  Timer,
  Zap,
  ZoomIn,
} from "lucide-react";
import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Feature17Props {
  heading?: string;
  subheading?: string;
  features?: Feature[];
}

export const Features = ({
  heading = "Our Core Features",
  subheading = "Why Choose Us",
  features = [
    {
      title: "Instant Transactions",
      description:
        "Send and receive money within seconds — anytime, anywhere. No waiting, no delays.",
      icon: <Timer className="size-4 md:size-6" />,
    },
    {
      title: "Smart & Secure",
      description:
        "Your data and money are protected with bank-grade encryption and multi-layer security.",
      icon: <Zap className="size-4 md:size-6" />,
    },
    {
      title: "Seamless Experience",
      description:
        "Enjoy a clean, simple interface designed for smooth navigation across all devices.",
      icon: <ZoomIn className="size-4 md:size-6" />,
    },
    {
      title: "Universal Access",
      description:
        "Whether you're a student, business owner, or freelancer — our wallet works for everyone.",
      icon: <PersonStanding className="size-4 md:size-6" />,
    },
    {
      title: "Low Fees",
      description:
        "We believe in affordability. Get competitive transaction charges without hidden costs.",
      icon: <DollarSign className="size-4 md:size-6" />,
    },
    {
      title: "24/7 Support",
      description:
        "Got a question? Our customer success team is always here to help — anytime, any day.",
      icon: <MessagesSquare className="size-4 md:size-6" />,
    },
  ],
}: Feature17Props) => {
  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.p
          className="mb-4 text-xs text-muted-foreground md:pl-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {subheading}
        </motion.p>

        <motion.h2
          className="text-3xl font-medium md:pl-5 lg:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {heading}
        </motion.h2>

        <div className="mx-auto mt-14 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-20">
          {features.map((feature, idx) => (
            <motion.div
              className="flex gap-6 rounded-lg md:block md:p-5"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * idx }}
              viewport={{ once: true }}
            >
              <span className="mb-8 flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                {feature.icon}
              </span>
              <div>
                <h3 className="font-medium md:mb-2 md:text-xl">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground md:text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
