import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import ChatUpPng from "../../media/images/chatup-logo.png";
import applePng from "../../media/images/apple.png";
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
      title: "ChatUp - Web",
      description:
        "This is a DEMO representing a personal assistant chatbot, using openai APIs and langchain js framework. Currently out of service ⚠️.",
      route: "/chat-up",
      media: ChatUpPng,
    },
    {
      id: 2,
      title: "SquareUp - Mobile",
      description:
        "This application allow easy edit of videos and images to match a 1:1 ratio while maintain the original aspect of the video. IOS App created with react-native.",
      route: "/square-up",
      media: applePng,
    },
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
