import { useState } from "react";
import BottomLinks from "../../components/BottomLinks";
import ButtonCard from "../../components/ButtonCard";
import PreviewCard from "../../components/PreviewCard";
import Logo from "../../media/images/logo.png";
import Fade from "../Fade";
import AbsoluteFooter from "../../components/AbsoluteFooter";
import { useDevice } from "../../hooks/useDevice";
import "./explore.css";
import { defaultPreviewCard, features } from "./explore_features";

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
                  {features.map(({ id, type, buttonCard }: any, index: number) => {
                    return (
                      <div key={id + index} className="explore-page-card-container">
                        <ButtonCard
                          selectedIndex={selectedIndex}
                          handleSetSelectedItem={handleSetSelectedItem}
                          key={`${id}__${index}`}
                          id={id}
                          type={type}
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