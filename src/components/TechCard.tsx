import type { Itecnologis } from "../types";

const TechCard = ({ tecnologi }: { tecnologi: Itecnologis }) => {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm rounded-2xl p-6 w-ull">
      {/* Top Section */}
      <div className="flex items-start justify-between">
        {/* Technology Logo */}
        <div className="w-16 h-16 flex items-center justify-center">
          <img
            src={tecnologi.icon}
            alt={tecnologi.name}
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Badge */}
        <span className="badge badge-info badge-outline px-4 py-3 rounded-full">
          {tecnologi.badge}
        </span>
      </div>

      {/* Content */}
      <div className="mt-5">
        <h2 className="text-2xl font-bold text-base-content">
          {tecnologi.name}
        </h2>

        <p className="text-sm text-base-content/60 leading-5 mt-3">
          {tecnologi.description}
        </p>
      </div>

      {/* Divider */}
      <div className="divider my-3"></div>

      {/* Information */}
      <div className="flex items-center justify-between gap-1 text-sm">
        <span className="badge badge-ghost px-3 py-3">
          {tecnologi.category}
        </span>

        <span className="text-base-content/60">{tecnologi.difficulty}</span>

        <span className="flex items-center gap-1 font-medium">
          <span className="text-warning">★</span>
          {tecnologi.rating}
        </span>
      </div>

      {/* Button */}
      <button className="btn btn-neutral w-full mt-5 rounded-xl">
        Add to Stack
      </button>
    </div>
  );
};

export default TechCard;
