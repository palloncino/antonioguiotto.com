import { featureTypes } from "../features/Explore/explore_features";

const TypeFilter = ({ typesFilter, toggleFilter }: any) => {
  return (
    <div className="filter-container">
      {featureTypes.map((type, index) => {
        return (
          <div
            className={`filter-key ${
              typesFilter.find((_type: string) => _type === type)
                ? "checked"
                : ""
            }`}
            key={type + index}
            onClick={() => toggleFilter(type)}
          >
            {type}
          </div>
        );
      })}
    </div>
  );
};

export default TypeFilter;
