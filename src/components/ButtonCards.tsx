import { useEffect, useState } from 'react';
import Fade from '../features/Fade';
import {previewFeature} from '../features/Explore/explore_features';
import ButtonCard from './ButtonCard';

const ButtonCards = ({ features, activePage, prevActivePage, selectedIndex, handleSetSelectedItem, ITEMS_PER_PAGE }: any) => {

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const pageChanged = prevActivePage !== activePage;
    setShouldAnimate(pageChanged);
  }, [activePage, prevActivePage]);

  useEffect(() => {
    if (shouldAnimate) {
      setShouldAnimate(false);
    }
  }, [shouldAnimate]);

  const renderButtonCard = (item: previewFeature, index: number) => {
    const card = (
      <div key={item.id + index} className="explore-page-card-container">
        <ButtonCard
          selectedIndex={selectedIndex}
          handleSetSelectedItem={handleSetSelectedItem}
          id={item.id}
          type={item.type}
          {...item.buttonCard}
        />
      </div>
    );

    return shouldAnimate ? (
      <Fade key={item.id + index} customSpringProps={prevActivePage > activePage ? {
        from: { transform: 'translateX(-100%)', opacity: 1 },
        to: { transform: 'translateX(0)', opacity: 1 },
        reset: true,
      } : {
        from: { transform: 'translateX(100%)', opacity: 1 },
        to: { transform: 'translateX(0)', opacity: 1 },
        reset: true,
      }}>
        {card}
      </Fade>
    ) : card;
  };

  return (
    <div className="explore-page-cards-container">
      {features
        .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE)
        .map(renderButtonCard)}
    </div>
  );
};

export default ButtonCards;