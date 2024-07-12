import { IoStar } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { Button } from "./ui/button";
import bannerOne from "@/assets/images/banner-1.jpg";
import bannerTwo from "@/assets/images/banner-2.jpg";

const Hero = () => {
  return (
    <section className="container flex max-md:flex-col items-center justify-between gap-20">
      {/* left side */}
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <p className="font-medium">LEARN . PLAY . EXPLORE</p>
        <h3 className="capitalize">
          A safe and joyful place for your{" "}
          <span className="text-blue-500">Lovely</span> children
        </h3>

        <p>
          Assalamu Alaikum! Welcome to Skylearn School, where academic
          excellence meets moral values. Located at Bashundhara Residential Area
          in Dhaka, our English medium institution offers a holistic education,
          nurturing students to thrive academically and spiritually. Join us for
          a journey of learning and enlightenment.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-10">
            <Button>Enroll Your Kid</Button>

            <div className="space-y-1.5">
              <div className="flex items-center  gap-1.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <IoStar key={index} className="text-yellow-400 size-5" />
                ))}
              </div>

              <p className="text-sm text-nowrap">4.8 Rating on Google</p>
            </div>
          </div>

          <hr className="border border-gray-300 w-[80%] mx-auto" />

          <a
            href="tel:+8801635082880"
            className="font-semibold flex items-center gap-2.5"
          >
            <FaPhone
              className="bg-blue-500 text-white size-10
             px-3 py-1 rounded-full"
            />
            <p>+8801635-082880</p>
          </a>
        </div>
      </div>

      {/* right side */}
      <div className="w-full md:w-1/2 relative h-[525px]">
        <div className="flex justify-end">
          <img
            src={bannerOne}
            alt="Hero Banner"
            className="w-[70%] h-[350px] object-cover rounded-2xl"
          />
        </div>

        <img
          src={bannerTwo}
          alt="Hero Banner"
          className="w-[60%] h-[350px] object-cover absolute left-0 -translate-y-1/2 rounded-2xl rounded-bl-[80px]"
        />
      </div>
    </section>
  );
};

export default Hero;
