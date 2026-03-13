import ServiceCard from "../components/ServiceCard";
import { services } from "../data/mockData";

export default function ServicesTab() {

  return (

    <div className="cards">

      {services.map(service => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}

    </div>

  );
}