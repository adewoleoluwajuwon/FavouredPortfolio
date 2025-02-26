import ServiceCard from "../Components/ServiceCard";
import { services } from "../constants";
const Services = () => {
  return (
    <section
      className="max-contianer flex justify-center 
    flex-wrap gap-9"
    >
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </section>
  );
};

export default Services;
