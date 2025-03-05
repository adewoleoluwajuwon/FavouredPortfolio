import Button from "../Components/Button";
import teacherImage from "/assets/images/teacher.jpg";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full 
      max-w-[1440px] mx-auto mt-20 lg:mt-32 pl-10 pr-10 lg:pl-0 lg:pr-0"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-[Palanquin] text-4xl capitalize font-bold lg:max-w-lg">
          I Provide <span className="text-[#1D4ED8]">Quality Learning</span>
          <br />
          <span className="text-[#F59E0B] inline-block mt-7">
            & A Nurturing Environment
          </span>
        </h2>
        <p className="text-lg font-[Montserrat] text-[#4B5563] leading-7 mt-4 lg:max-w-lg">
          Helping young minds grow through interactive lessons, creativity, and
          a supportive learning environment. 
        </p>
        <p className="mt-6 lg:max-w-lg font-[Montserrat] text-[#4B5563] leading-7">
          My dedication to early childhood education ensures each child
          thrives in a fun, engaging, and caring space.
        </p>

        <div className="mt-11">
          <Button label="Explore My Teaching Approach" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={teacherImage}
          alt="Teacher in Classroom"
          width={500}
          height={450}
          className="rounded-2xl shadow-lg shadow-gray-300 border-2 border-[#F59E0B] object-cover"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
