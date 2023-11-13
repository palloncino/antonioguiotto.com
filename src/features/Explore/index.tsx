import { useState } from "react";
import BottomLinks from "../../components/BottomLinks";
import ButtonCard from "../../components/ButtonCard";
import PreviewCard from "../../components/PreviewCard";
import squareThumb from "../../media/images/graph-paper.svg";
import chatupThumb from "../../media/images/graph-paper.svg";
import Logo from "../../media/images/logo.png";
import Fade from "../Fade";
import AbsoluteFooter from "../../components/AbsoluteFooter";
import { useDevice } from "../../hooks/useDevice";
import "./explore.css";

const Explore = () => {
  const [selectedIndex, setSelectedIndex] = useState<undefined | number>(
    2141210
  );
  const { isMobile } = useDevice();

  const handleSetSelectedItem = (index: number) => {
    setSelectedIndex(index);
  };

  const displaySelectedItem = (index: number | undefined) => {
    if (!index) {
      const previewContent = defaultPreviewCard?.previewCard;
      const type = defaultPreviewCard.type;
      return (
        <Fade>
          <PreviewCard id={undefined} type={type} {...previewContent} />
        </Fade>
      );
    }
    const selectedItem = features.find(({ id }: any) => id === index);
    const id = selectedItem?.id;
    const type = selectedItem?.type;
    const previewContent = selectedItem?.previewCard;
    return (
      <Fade>
        <PreviewCard id={id} type={type} {...previewContent} />
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
                  <img className="explore-page-logo" src={Logo} alt="Logo" />
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
                  {features.map(({ id, buttonCard }: any, index: number) => {
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

type previewFeature = {
  id?: number;
  type: "business" | "demo" | "app";
  buttonCard: {
    title: string;
    description: string;
    route?: string;
    media: any;
  };
  previewCard: {
    title: string;
    keys: string;
    description: string;
    status: string;
    route?: string;
    images: any[];
    gifs: any[];
    videos: { videoId: string }[];
    githubRepos?: string[];
  };
};

const defaultPreviewCard: previewFeature = {
  type: "demo",
  buttonCard: {
    title: "Welcome page.",
    description:
      "On this page you can find the services provided by Antonio Guiotto.",
    route: "/",
    media: squareThumb,
  },
  previewCard: {
    title: "A warm welcome.",
    keys: "Online Business, Engineering, Design, Marketing, Art and more.",
    description:
      "On this page you can find the services provided by Antonio Guiotto.",
    status: "DEMO, not released.",
    images: [chatupThumb],
    gifs: [],
    videos: [{ videoId: "JY6SPRNjvZE" }],
  },
}

const features: previewFeature[] = [
  {
    id: 2141210,
    type: "business",
    buttonCard: {
      title: "Re-brand your website!",
      description:
        "Get a neat user interface for your business, having a user friendly website can increase your sales! Get a personalized experience for your clients. We can fix the online presence of your business, effectively, in a short period of time.",
      route: "/",
      media: squareThumb,
    },
    previewCard: {
      title: "Business rebranding",
      keys: "Web browser, Social Media, online presence",
      description:
        "Get a neat user-interface for your business, having a user friendly website will increase your sales! Get a personalized experience for your clients. We can fix the online presence of your business, effectively, in a short period of time.",
      status: "🚧 Page under construction 🏗️",
      images: [chatupThumb],
      gifs: [],
      videos: [{ videoId: "z0AEwKad7GU" }],
    },
  },
  {
    id: 2141203,
    type: "business",
    buttonCard: {
      title: "Need a WordPress website?",
      description:
        "Whether you are looking to build a new e-commerce, or you just need a nice looking fast and effective showcase site, I am ready to get my team to work on in in no time you will be up and running, taking care of all sides of your business, from client engagement actual shopping.",
      route: "/",
      media: squareThumb,
    },
    previewCard: {
      title: "New WordPress website.",
      keys: "Showcase, E-commerce.",
      description:
        "Whether you are looking to build a new e-commerce, or you just need a nice looking fast and effective showcase site, I am ready to get my team to work on in in no time you will be up and running, taking care of all sides of your business, from client engagement actual shopping.",
      status: "🚧 Page under construction 🏗️",
      images: [chatupThumb],
      gifs: [],
      videos: [{ videoId: "z0AEwKad7GU" }],
    },
  },
  {
    id: 12345201,
    type: "demo",
    buttonCard: {
      title: "ChatUp - Web App (go to App)",
      description:
        "This is a DEMO representing a personal assistant chatbot, using openai APIs and langchain js framework. Currently out of service ⚠️.",
      media: chatupThumb,
    },
    previewCard: {
      title: "ChatUp",
      keys: "Desktop",
      description:
        "This is a DEMO representing a personal assistant chatbot, using openai APIs and langchain js framework.",
      status: "Currently out of service for exceeded maintenance costs.",
      route: "/chat-up",
      images: [chatupThumb],
      gifs: [],
      videos: [],
    },
  },
  {
    id: 2141202,
    type: "app",
    buttonCard: {
      title: "SquareUp - Mobile (Preview)",
      description:
        "This application allow easy edit of videos and images to match a 1:1 ratio while maintain the original aspect of the video. IOS App created with react-native.",
      route: "/",
      media: squareThumb,
    },
    previewCard: {
      title: "Square Up",
      keys: "Mobile, iOS",
      description:
        "This application allow easy edit of videos and images to match a 1:1 ratio while maintain the original aspect of the video. IOS App created with react-native.",
      status: "DEMO, not released.",
      route: "/",
      githubRepos: ["SquareUp", "CustomVideoEditingService"],
      images: [chatupThumb],
      gifs: [],
      videos: [{ videoId: "3JtrRG6w0oU" }],
    },
  }
];