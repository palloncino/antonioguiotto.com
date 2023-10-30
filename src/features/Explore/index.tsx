import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import funnyDog01 from "../../media/images/dog-02.jpg";
import "./explore.css";

const Explore = () => {
  const [isHover, setIsHover] = useState(false);

  const navigate = useNavigate();
  const features = [
    // {
    //   id: 2,
    //   title: "Notes",
    //   description: "Page in construction ⚠️ Brainstorming ideas for sustaining one's flesh and soul in today's age.",
    //   route: "/notes",
    //   media: vagabondGif,
    // },
    {
      id: 1,
      title: "App ChatUp",
      description:
        "This is a DEMO representing a personal assistant chatbot, using openai APIs and langchain js framework.",
      route: "/chat-up",
      media: funnyDog01,
    },
    // {
    //   id: 3,
    //   title: "News",
    //   description: "In progress",
    //   route: "/sandbox01",
    //   media: openAIIcon
    // },
  ];

  return (
    <div
      className="explore-page-container"
      style={{ height: `${window.innerHeight}px` }}
    >
      <h1 className="explore-page-title">
        <span>E</span>
        <span>x</span>
        <span>p</span>
        <span>l</span>
        <span>o</span>
        <span>r</span>
        <span>e</span>
      </h1>

      <div className="explore-page-cards">
        {features.map(({ id, ...rest }, index) => (
          <Card key={`${id}__${index}`} {...rest} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
