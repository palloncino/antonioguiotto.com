import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AbsoluteFooter from "../../components/AbsoluteFooter";
import BottomLinks from "../../components/BottomLinks";
import ButtonCards from "../../components/ButtonCards";
import PaginatorV1 from "../../components/PaginatorV1";
import PreviewCard from "../../components/PreviewCard";
import TypeFilter from "../../components/TypeFilter";
import { useDevice } from "../../hooks/useDevice";
import Logo from "../../media/images/logo.png";
import CraneAndTruck from "../../media/images/crane-and-truck.png";
import Crane from "../../media/images/crane-svg.svg";
import Fade from "../Fade";
import "./explore.css";
import { featureType, features, previewFeature } from "./explore_features";
import Balto from "../../components/Balto/Balto";

const Explore = () => {
  const navigate = useNavigate();
  const [filterArray, setFilterArray] = useState<Array<featureType> | []>([]);
  const [filteredFeatures, setFilteredFeatures] = useState<
    previewFeature[] | []
  >(features);
  const [selectedIndex, setSelectedIndex] = useState<undefined | number>(
    2100001
  );
  const ITEMS_PER_PAGE = 6;
  const MAX_PAGES = Math.ceil(filteredFeatures.length / ITEMS_PER_PAGE);
  const [activePage, setActivePage] = useState(1);
  const [prevActivePage, setPrevActivePage] = useState(1);
  const { isMobile } = useDevice();

  const selectPage = (n: number) => {
    setPrevActivePage(activePage);
    setActivePage(n);
  };

  useEffect(() => {
    if (filterArray.length) {
      const _filtered = features.filter(
        ({ type }) => filterArray.indexOf(type as never) !== -1
      );
      console.log({ features, _filtered });
      setFilteredFeatures(_filtered);
    } else {
      setFilteredFeatures(features);
    }
  }, [filterArray]);

  const toggleFilter = (type: featureType) => {
    const index = filterArray?.indexOf(type as never);
    if (index !== -1) {
      setFilterArray(filterArray?.filter((t) => t !== type));
    } else {
      setFilterArray([...(filterArray as []), `${type}`]);
    }
  };

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

  const selectedItemComponent = useMemo(
    () => displaySelectedItem(selectedIndex),
    [selectedIndex]
  );

  if (isMobile) {
    return (
      <div style={{ padding: "0rem 1rem" }}>
        <h3>Mobile version is under construction</h3>
      </div>
    );
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
                  <img src={Crane} alt="" style={{
                        position: 'absolute',
                        top: '1.8rem',
                        right: '0',
                        zIndex: 50,
                        width: '25%',
                        transform: 'translateX(-10%)'
              }}/>
                </div>

                <div className="filters-container">
                  <PaginatorV1
                    activePage={activePage}
                    selectPage={selectPage}
                    MAX_PAGES={MAX_PAGES}
                  />
                  <TypeFilter
                    filterArray={filterArray}
                    toggleFilter={toggleFilter}
                  />

                </div>

                <ButtonCards
                  features={filteredFeatures}
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
              <div className="right-side-top">{selectedItemComponent}</div>
              {/* <div className="right-side-bottom" id="3D-Model-container">
                <Balto />
              </div> */}
              <img src={CraneAndTruck} alt="" style={{
                    position: 'absolute',
                    bottom: '-10%',
                    right: '0rem',
                    zIndex: 0,
                    width: '100%'
              }}/>
            </div>

            <AbsoluteFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
