import Button from "../Components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-w-[1440px] m-auto flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-[palanquin] font-bold">
        Sign Up For <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div
        className="lg:max-w-[40%] 
      w-full flex items-center justify-between max-sm:flex-col 
      gap-5 p-2.5 sm:border
      sm:border-slate-500 rounded-full"
      >
        <input
          type="text"
          placeholder="Subscribe@nike.com"
          className="input rounded-full focus:outline-none focus:ring-0"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
