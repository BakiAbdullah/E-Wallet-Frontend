import TravelLogin from "@/assets/images/travel-login.jpg";
import { Link } from "react-router";

export const HeroSection = () => {
  return (
    <div>
      <section className="container mx-auto px-4 py-16 md:grid md:grid-cols-2 md:items-center md:gap-4 ">
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-extrabold text-foreground  sm:text-5xl dark:text-white">
            Let's go with Amazing Tours and
            <strong className="text-primary"> discover </strong>a place
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            nisi. Natus, provident accusamus impedit minima harum corporis
            iusto.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
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
        </div>

        <div className="mx-auto hidden text-gray-900 md:block dark:text-white relative">
          <img
            src={TravelLogin}
            alt="Placeholder"
            className="w-full object-center object-cover rounded-md shadow-lg"
          />

          <img
            src={TravelLogin}
            alt="Placeholder"
            className="w-full opacity-5 bg-blend-overlay rounded-md  absolute top-5 left-5 mb-4 "
          />
        </div>
      </section>
    </div>
  );
};
