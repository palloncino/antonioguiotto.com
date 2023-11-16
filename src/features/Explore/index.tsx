import { useEffect, useMemo, useState } from "react";
import BottomLinks from "../../components/BottomLinks";
import PreviewCard from "../../components/PreviewCard";
import Logo from "../../media/images/logo.png";
import Fade from "../Fade";
import AbsoluteFooter from "../../components/AbsoluteFooter";
import { useDevice } from "../../hooks/useDevice";
import "./explore.css";
import { /* defaultPreviewCard, */ features } from "./explore_features";
import ButtonCards from "../../components/ButtonCards";

const Explore = () => {
  const [selectedIndex, setSelectedIndex] = useState<undefined | number>(
    2100001
  );
  const ITEMS_PER_PAGE = 4;
  const MAX_PAGES = Math.ceil(features.length / ITEMS_PER_PAGE);
  const [activePage, setActivePage] = useState(1);
  const [prevActivePage, setPrevActivePage] = useState(1);
  const { isMobile } = useDevice();


  const selectPage = (n: number) => {
    setPrevActivePage(activePage);
    setActivePage(n);
  }
  const handleSetSelectedItem = (index: number) => {
    setSelectedIndex(index);
  };

  const displaySelectedItem = (index: number | undefined) => {
    if (!index) {
      const selectedItem = features.find(({ id }: any) => id === index);
      const id = 2100001;
      const type = selectedItem?.type;
      const previewContent = selectedItem?.previewCard;
      return (
        <Fade>
          <PreviewCard id={id} type={type} {...previewContent} />
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

  const selectedItemComponent = useMemo(() => displaySelectedItem(selectedIndex), [selectedIndex]);

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

                  <div className="explore-page-title-container-01" />
                  <div className="explore-page-title-container-02" />
                  <div className="explore-page-title-container-03" />

                  <img className="explore-page-logo" src={Logo} alt="Logo" />
                  <h1
                    className="explore-page-title"
                    onClick={() => {
                      setSelectedIndex(2100001);
                      setActivePage(1);
                    }}
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

                <div className="paginator-container">
                  <div className="paginator-label-container">
                    <span className="paginator-label">Pages</span>
                  </div>
                  <div className="pagination-pages-container">
                    {Array.from({ length: MAX_PAGES }, (v, i) => i + 1).map((n, i) => {
                      return (
                        <button className={`page-button ${n===activePage ? "active" : ""}`} key={`${n + 1}_${i + 2}_${n + i + 3}`} onClick={() => selectPage(n)}>{n}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <ButtonCards
                  features={features}
                  activePage={activePage}
                  prevActivePage={prevActivePage}
                  selectedIndex={selectedIndex}
                  handleSetSelectedItem={handleSetSelectedItem}
                  ITEMS_PER_PAGE={ITEMS_PER_PAGE}
                />
              </div>

              <div className="left-side-bottom">
                <BottomLinks />
              </div>
            </div>

            <div className="right-side">
              <div className="right-side-top">
                {selectedItemComponent}
              </div>
            </div>


            <AbsoluteFooter />
          </div>
        </div>
      </div >
    </>
  );
};

export default Explore;