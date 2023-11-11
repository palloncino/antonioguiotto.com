import { useState } from "react";
import BottomLinks from "../../components/BottomLinks";
import ButtonCard from "../../components/ButtonCard";
import PreviewCard from "../../components/PreviewCard";
import squareThumb from "../../media/images/square-thumb.png";
import chatupThumb from "../../media/images/chatup-thumb.png";
import thumbnail2 from "../../media/images/bird.png";
import Fade from "../Fade";
import "./explore.css";
import AbsoluteFooter from "../../components/AbsoluteFooter";
import { useDevice } from "../../hooks/useDevice";

const defaultPreviewCard = {
  title: "Welcome",
  devices: "",
  description: "",
  status: "All the content is for DEMO pourposes, constantly under development. Intended as placeholder for a future business.",
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
      media: chatupThumb,
    },
    previewCard: {
      title: "ChatUp",
      devices: "Desktop",
      description:
        "This is a DEMO representing a personal assistant chatbot, using openai APIs and langchain js framework.",
      status: "Currently out of service for exceeded maintenance costs.",
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
      media: squareThumb,
    },
    previewCard: {
      title: "Square Up",
      devices: "Mobile, iOS",
      description:
        "This application allow easy edit of videos and images to match a 1:1 ratio while maintain the original aspect of the video. IOS App created with react-native.",
      status: "DEMO, not released.",
      images: [],
      gifs: [],
      videos: [{ videoId: "3JtrRG6w0oU" }],
    },
  },
  {
    id: 2141237,
    buttonCard: {
      title: "Test - Example Feature",
      description:
        "Lorem ipsum Test - Example Feature, Lorem ipsum Test - Example Feature!",
      route: "/",
      media: thumbnail2,
    },
    previewCard: {
      title: "Test - Example Feature",
      devices: "Mobile, iOS",
      description:
        "Lorem ipsum Test - Example Feature, Lorem ipsum Test - Example Feature!",
      status: "DEMO, not released.",
      images: [],
      gifs: [],
      videos: [{ videoId: "z0AEwKad7GU" }],
    },
  },
];

const Explore = () => {
  const [selectedIndex, setSelectedIndex] = useState<undefined | number>(
    undefined
  );
  const { isMobile } = useDevice();

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

  if (isMobile) {
    return (
      <div style={{ padding: '0rem 1rem' }}>
        <h3>
          Mobile version is under construction
        </h3>
      </div>
    )
  }

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
                      <div key={id + index} className="explore-page-card-container">
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
            </div>


            <AbsoluteFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
