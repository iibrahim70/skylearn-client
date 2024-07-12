import banner from "@/assets/images/banner-3.jpg";
import { Button } from "./ui/button";

const AboutUs = () => {
  return (
    <section className="container flex max-md:flex-col-reverse items-center justify-between gap-20">
      {/* left side */}
      <div className="w-full md:w-1/2">
        <img
          src={banner}
          alt="About Banner"
          className="object-cover rounded-2xl scale-100 hover:scale-110 duration-300 ease-in-out cursor-pointer"
        />
      </div>

      {/* right side */}
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <p className="font-medium">ABOUT US</p>
        <h3 className="capitalize">
          Admitting students from Playgroup to{" "}
          <span className="text-blue-500">Grade 8</span>
        </h3>

        <p>
          Skylearn School follows the Pearson Edexcel curriculum and intends to
          deliver excellent educational programs in the following Key Learning
          Areas: English, Mathematics, Science, Technology, Global Citizenship,
          Creative Arts, Personal Development, Health and Physical Education as
          well as lessons in Quran, Islamic Studies and Arabic Language classes.
        </p>

        <p>
          Here at Skylearn School, we aim to help our precious children to think
          and act in ways that are truly inspiring.
        </p>

        <Button variant="outline" className="w-fit">
          More About
        </Button>
      </div>
    </section>
  );
};

export default AboutUs;
