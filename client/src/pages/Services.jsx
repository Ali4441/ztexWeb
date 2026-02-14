import { useEffect, useState } from "react";
import axios from "axios";
const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "http://localhost:10000/api/listOFcourse",
          {
            headers: { "Content-Type": "application/json" }
          }
        );

        // IMPORTANT: backend must send { services: [...] }
        setServices(response.data.services || response.data);
      } catch (err) {
        setError("Failed to load services");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 z-20">


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <div
            key={service._id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={service.image}
              alt={service.service}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.service}
              </h3>

              <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                {service.description}
              </p>

              <div className="font-bold text-blue-600 text-base mb-3">
                {service.price}
              </div>

              <small className="text-gray-400 text-xs">
                by {service.provider}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;


