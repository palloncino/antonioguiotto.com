import React from "react";

const PreviewCard = ({ id, route, title, description, media }: any) => {
  return (
    <div className="explore-page-card-preview">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PreviewCard;
