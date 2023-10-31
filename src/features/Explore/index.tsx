import { useState } from "react";
import ButtonCard from "../../components/ButtonCard";
import applePng from "../../media/images/apple.png";
import ChatUpPng from "../../media/images/chatup-logo.png";
import "./explore.css";
import Fade from "../Fade";
import PreviewCard from "../../components/PreviewCard";

const Explore = () => {
  const [selectedIndex, setSelectedIndex] = useState<undefined | number>(
    undefined
  );

  const features = [
    {
      id: 1,
      buttonCard: {
        title: "ChatUp - Web",
        description:
          "This is a DEMO representing a personal assistant chatbot, using openai APIs and langchain js framework. Currently out of service ⚠️.",
        route: "/chat-up",
        media: ChatUpPng,
      },
      previewCard: {
        title: "JABABABA",
        description:
          "This is a DEMO representing a personal assistant chatbot, using openai APIs and langchain js framework. Currently out of service ⚠️.",
        route: "/chat-up",
        media: ChatUpPng,
      },
    },
    {
      id: 2,
      buttonCard: {
        title: "SquareUp - Mobile",
        description:
          "This application allow easy edit of videos and images to match a 1:1 ratio while maintain the original aspect of the video. IOS App created with react-native.",
        route: "/square-up",
        media: applePng,
      },
      previewCard: {
        title: "SquareUp - Mobile",
        description:
          "This application allow easy edit of videos and images to match a 1:1 ratio while maintain the original aspect of the video. IOS App created with react-native.",
        route: "/square-up",
        media: applePng,
      },
    },
  ];

  const handleSetSelectedItem = (index: number) => {
    console.log(index);
    setSelectedIndex(index);
  };

  const displaySelectedItem = (index: number) => {
    const selectedItem = features.find(({ id }) => id === index);
    const previewContent = selectedItem?.previewCard;
    return (
      <Fade>
        <PreviewCard {...previewContent} />
      </Fade>
    );
  };

  return (
    <div
      className="explore-page-container"
      style={{ height: `${window.innerHeight}px` }}
    >
      <div className="explore-page-container-content">
        <div className="left-side">
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
            {features.map(({ id, buttonCard }, index) => (
              <ButtonCard
                handleSetSelectedItem={handleSetSelectedItem}
                key={`${id}__${index}`}
                id={id}
                {...buttonCard}
              />
            ))}
          </div>
        </div>

        <div className="right-side">
          <div className="right-side-content-container">
            <>{selectedIndex ? displaySelectedItem(selectedIndex) : ""}</>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
