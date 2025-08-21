import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";
import {motion} from "framer-motion";

interface IPricingProps {
  price?: string | number;
  priceSuffix?: string;
  features?: string[][];
  buttonText?: string;
}

const defaultFeatures = [
  [
    "Instant Money Transfers",
    "Free Wallet-to-Wallet Payments",
    "Secure QR Code Payments",
  ],
  [
    "Bill Payments & Mobile Recharge",
    "Low International Transaction Fees",
    "24/7 Customer Support",
  ],
];

export const Pricing = ({
  price = 29,
  priceSuffix = "/mo",
  features = defaultFeatures,
  buttonText = "Start free trial",
}: IPricingProps) => {
  return (
    <div className="py-32 bg-gray-50 dark:bg-gray-900">
      <section className="container mx-auto px-4 grid grid-cols-1 items-center gap-12 md:grid-cols-3">
        {/* Left Text Portion */}
        <motion.div
          className="col-span-1 md:col-span-2 text-center md:text-left px-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl dark:text-white">
            One Plan
            <strong className="text-primary"> Unlimited </strong>Access
          </h1>

          <p className="mt-4 text-base text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            Simplify your financial life with a single, all-in-one wallet. Send,
            receive, and manage money seamlessly while enjoying zero hidden fees
            and world-class security.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
            <Link
              className="inline-block rounded border border-primary bg-primary px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-primary/90"
              to="#"
            >
              Get Started
            </Link>

            <Link
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
              to="#"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          className="col-span-1 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex w-full max-w-md flex-col rounded-lg border p-8 bg-white dark:bg-gray-800 shadow-lg">
            {/* Price */}
            <div className="flex justify-center items-baseline gap-2">
              <span className="text-lg font-semibold">$</span>
              <span className="text-6xl font-bold">{price}</span>
              <span className="self-end text-muted-foreground">
                {priceSuffix}
              </span>
            </div>

            {/* Features */}
            <div className="my-6">
              {features.map((featureGroup, idx, arr) => (
                <div key={idx}>
                  <ul className="flex flex-col gap-3">
                    {featureGroup.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center justify-between gap-2 text-sm font-medium"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {feature}
                        <Check className="inline size-4 shrink-0 text-primary" />
                      </motion.li>
                    ))}
                  </ul>
                  {idx < arr.length - 1 && <Separator className="my-6" />}
                </div>
              ))}
            </div>

            <Button className="w-full text-white">{buttonText}</Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
