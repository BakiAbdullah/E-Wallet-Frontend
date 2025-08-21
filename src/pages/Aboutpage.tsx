import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import BannerImg from "@/assets/images/BannerImg.jpg";
import BannerImg2 from "@/assets/images/BannerImg2.jpg";
import { Logo } from "@/assets/icons/Logo";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

const defaultCompanies = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
    alt: "Arc",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
    alt: "Descript",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
    alt: "Mercury",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
    alt: "Ramp",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
    alt: "Retool",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
    alt: "Watershed",
  },
];

const defaultAchievements = [
  { label: "Companies Supported", value: "300+" },
  { label: "Projects Finalized", value: "800+" },
  { label: "Happy Customers", value: "99%" },
  { label: "Recognized Awards", value: "10+" },
];

export const Aboutpage = ({
  title = "About Us",
  description = "Our e-wallet gives you the freedom to manage your finances digitally with safety, speed, and convenience. Trusted by thousands of users, we provide secure transactions, instant transfers, and real-time account tracking.",
  mainImage = {
    src: BannerImg,
    alt: "placeholder",
  },
  secondaryImage = {
    src: BannerImg2,
    alt: "placeholder",
  },
  breakout = {
    alt: "logo",
    title: "Why Choose Our E-Wallet?",
    description:
      "Send, receive, and manage your funds securely in seconds — anytime, anywhere.",
    buttonText: "Create Free Account",
    buttonUrl: "https://shadcnblocks.com",
  },
  companiesTitle = "Valued by clients worldwide",
  companies = defaultCompanies,
  achievementsTitle = "Our Achievements in Numbers",
  achievementsDescription = "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center md:text-left md:grid md:grid-cols-2 gap-5"
        >
          <h1 className="text-5xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h1>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </motion.div>

        {/* Main Section */}
        <div className="grid gap-7 lg:grid-cols-3">
          <motion.img
            src={mainImage.src}
            alt={mainImage.alt}
            className="w-full max-h-[620px] rounded-xl object-cover lg:col-span-2 shadow-lg"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          />

          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            {/* Breakout Card */}
            <motion.div
              className="flex flex-col justify-between gap-6 rounded-xl bg-primary/5 p-7 md:w-1/2 lg:w-auto hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Logo />
              <div>
                <p className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {breakout.title}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {breakout.description}
                </p>
              </div>
              <Button variant="outline" className="mr-auto mt-2" asChild>
                <a href={breakout.buttonUrl}>{breakout.buttonText}</a>
              </Button>
            </motion.div>

            <motion.img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:w-auto shadow-md"
              initial={{ opacity: 0, y: 40, scale: 0.95, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, duration: 1.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotate: 0 }}
            />
          </div>
        </div>

        {/* Partners */}
        <motion.div
          className="py-32 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            {companiesTitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {companies.map((company, idx) => (
              <img
                key={idx}
                src={company.src}
                alt={company.alt}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 p-10 md:p-16 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.9 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold text-gray-900 dark:text-white">
              {achievementsTitle}
            </h2>
            <p className="max-w-xl text-gray-700 dark:text-gray-300">
              {achievementsDescription}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-4" key={idx}>
                <span className="text-4xl font-bold text-primary md:text-5xl">
                  {item.value}
                </span>
                <p className="text-gray-700 dark:text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
