import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          {/* Left Column - Text */}
          <div className="w-full md:w-1/2 px-4">
            <div className="max-w-[600px]">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
                Master the Forex Market with Confidence
              </h1>
              <p className="mb-8 text-base text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Unlock your full trading potential with expert insights,
                real-time market analysis, and proven strategies. Whether you
                are a beginner or a pro, we provide the tools you need to trade
                smarter and profit more.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <Link
                  href="https://nextjstemplates.com/templates/saas-starter-startup"
                  className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  Get Started Now
                </Link>
                <Link
                  href="https://github.com/NextJSTemplates/startup-nextjs"
                  className="mt-4 sm:mt-0 rounded-md bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-1/2 px-4 flex justify-center">
            <Image
              src="/image 46.png"
              alt="Forex Trading"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="450"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
          <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_25:217)" />
          <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial_25:217)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
