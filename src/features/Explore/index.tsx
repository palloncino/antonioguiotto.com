import { useState } from "react";
import BottomLinks from "../../components/BottomLinks";
import ButtonCard from "../../components/ButtonCard";
import PreviewCard from "../../components/PreviewCard";
import applePng from "../../media/images/apple.png";
import Thumbnail from "../../media/images/thumbnail.jpg";
import ChatUpPng from "../../media/images/chatup-logo.png";
import Vid2 from "../../media/videos/vid2.mov";
import Vid3 from "../../media/videos/vid3.mov";
import Vid4 from "../../media/videos/vid4.mov";
import Fade from "../Fade";
import "./explore.css";

const defaultPreviewCard = {
  title: "Welcome",
  devices: "",
  description: "",
  status: "Under constant development.",
  mutedVideo: true,
  images: [],
  gifs: [],
  videos: [{ videoId: "JY6SPRNjvZE" }],
};

const features = [
  {
    id: 12345234,
    buttonCard: {
      title: "ChatUp - Web App (go to App)",
      description:
        "This is a DEMO representing a personal assistant chatbot, using openai APIs and langchain js framework. Currently out of service ⚠️.",
      route: "/chat-up",
      media: ChatUpPng,
    },
    previewCard: {
      title: "ChatUp",
      devices: "Desktop",
      description:
        "This is a DEMO representing a personal assistant chatbot, using openai APIs and langchain js framework.",
      status: "Currently out of service for exceeded maintenance costs.",
      images: [ChatUpPng],
      gifs: [],
      videos: [],
    },
  },
  {
    id: 2141234,
    buttonCard: {
      title: "SquareUp - Mobile (Preview)",
      description:
        "This application allow easy edit of videos and images to match a 1:1 ratio while maintain the original aspect of the video. IOS App created with react-native.",
      route: "/",
      media: applePng,
    },
    previewCard: {
      title: "Square Up",
      devices: "Mobile, iOS",
      description:
        "This application allow easy edit of videos and images to match a 1:1 ratio while maintain the original aspect of the video. IOS App created with react-native.",
      status: "DEMO, not released.",
      images: [],
      gifs: [],
      thumbnail: Thumbnail,
      videos: [{ videoId: "3JtrRG6w0oU" }],
    },
  },
  {
    id: 2141235,
    buttonCard: {
      title: "Dummy ID: 2141235",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione tempore sint harum facilis sapiente id, dolorum, odit ipsa aut accusantium repellat eius rem natus maiores quae dicta consequatur temporibus cum?",
      route: "/",
      media: applePng,
    },
    previewCard: {
      title: "Dummy ID: 2141235",
      devices: "Mobile, iOS",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione tempore sint harum facilis sapiente id, dolorum, odit ipsa aut accusantium repellat eius rem natus maiores quae dicta consequatur temporibus cum?",
      status: "DEMO, not released.",
      images: [],
      gifs: [],
      thumbnail: Thumbnail,
      videos: [{ videoId: "3JtrRG6w0oU" }],
    },
  },
  {
    id: 2141236,
    buttonCard: {
      title: "Dummy ID: 2141236",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione tempore sint harum facilis sapiente id, dolorum, odit ipsa aut accusantium repellat eius rem natus maiores quae dicta consequatur temporibus cum?",
      route: "/",
      media: applePng,
    },
    previewCard: {
      title: "Dummy ID: 2141236",
      devices: "Mobile, iOS",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione tempore sint harum facilis sapiente id, dolorum, odit ipsa aut accusantium repellat eius rem natus maiores quae dicta consequatur temporibus cum?",
      status: "DEMO, not released.",
      images: [],
      gifs: [],
      thumbnail: Thumbnail,
      videos: [{ videoId: "3JtrRG6w0oU" }],
    },
  },
];

const Explore = () => {
  const [selectedIndex, setSelectedIndex] = useState<undefined | number>(
    undefined
  );

  const handleSetSelectedItem = (index: number) => {
    setSelectedIndex(index);
  };

  const displaySelectedItem = (index: number | undefined) => {
    if (!index) {
      return (
        <Fade>
          <PreviewCard {...defaultPreviewCard} />
        </Fade>
      );
    }
    const selectedItem = features.find(({ id }) => id === index);
    const id = selectedItem?.id;
    const previewContent = selectedItem?.previewCard;
    return (
      <Fade>
        <PreviewCard id={id} {...previewContent} />
      </Fade>
    );
  };

  return (
    <>
      <div className="explore-page-container">
        <div className="explore-page-container-width-setter">
          <div className="explore-page-container-content">
            <div className="left-side">
              <div className="left-side-top">
                <div className="explore-page-title-container">
                  <h1
                    className="explore-page-title"
                    onClick={() => setSelectedIndex(undefined)}
                  >
                    <span>E</span>
                    <span>x</span>
                    <span>p</span>
                    <span>l</span>
                    <span>o</span>
                    <span>r</span>
                    <span>e</span>
                  </h1>
                </div>
                <div className="explore-page-cards-container">
                  {features.map(({ id, buttonCard }, index) => {
                    return (
                      <div key={id+index} className="explore-page-card-container">
                        <ButtonCard
                          selectedIndex={selectedIndex}
                          handleSetSelectedItem={handleSetSelectedItem}
                          key={`${id}__${index}`}
                          id={id}
                          {...buttonCard}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="left-side-bottom">
                <BottomLinks />
              </div>
            </div>

            <div className="right-side">
              <div className="right-side-top">
                {displaySelectedItem(selectedIndex)}
              </div>
              <div className="right-side-bottom">{/* free spot */}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
