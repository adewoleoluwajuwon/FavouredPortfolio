import LearningActivityCard from "../Components/LearningActivityCard";
import { Activities } from "../constants";

const LearningActivities = () => {
  return (
    <section
      id="activities"
      className="mt-17 mx-10 max-w-[1440px] m-auto max-sm:mt-13 px-4 sm:px-8 md:px-16"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-[palanquin] font-bold">
          Engaging
          <span className="text-[#1DA1F2] ml-2">Learning Activities</span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-[montserrat] text-[#697d91]">
          Explore fun and educational activities designed to inspire creativity,
          curiosity, and a love for learning!
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {Activities.map((activity) => (
          <LearningActivityCard key={activity.name} {...activity} />
        ))}
      </div>
    </section>
  );
};

export default LearningActivities;
