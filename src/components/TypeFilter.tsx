import { featureTypes } from "../features/Explore/explore_features";

const TypeFilter = ({ filterArray, toggleFilter }: any) => {
  return (
    <div className="filter-container">
      <span className="paginator-head-label">Categories</span>
      {featureTypes.map((type, index) => {
        return (
          <div
            className={`filter-key ${
                filterArray?.find((_type: string) => _type === type)
                ? "checked"
                : ""
            }`}
            key={type + index}
            onClick={() => {toggleFilter(type)}}
          >
            {type}
          </div>
        );
      })}
    </div>
  );
};

export default TypeFilter;
