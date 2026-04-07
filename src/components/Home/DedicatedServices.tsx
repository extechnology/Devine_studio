import useDedicatedServices from "../../hooks/useDedicatedServices";
import DedicatedServicesSkeleton from "../../skeletons/DedicatedServicesSkeleton";

const DedicatedServices = () => {
  const { data: dedicatedServices, isLoading } = useDedicatedServices();
  
  if (isLoading) {
    return <DedicatedServicesSkeleton />;
  }
  
  return (
    <div>
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-xl md:text-3xl font-light tracking-[0.3em]">
          <span className="text-white"> DEDICATED</span> <br />
          <span className="text-[#c6a47e] font-heading font-normal">
            SERVICES AND PRODUCTS
          </span>
        </h2>
        <div className="w-24 h-px bg-[#c6a47e] mx-auto mt-8" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* LEFT */}
        {dedicatedServices?.map((service) => (
          <div>
            <h3 className="text-xs md:text-sm tracking-[0.4em] text-white mb-4">
              {service.title}{" "}
            </h3>

            <div className="w-full h-[1px] bg-white/30 mb-6" />

            <p className="text-gray-300 text-justify text-xs leading-relaxed tracking-wide">
              {service.description}
              <br />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DedicatedServices;
