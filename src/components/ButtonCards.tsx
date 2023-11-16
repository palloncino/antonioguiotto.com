import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
import ButtonCard from "./ButtonCard";

const ButtonCards = ({
  features,
  activePage,
  prevActivePage,
  selectedIndex,
  handleSetSelectedItem,
  ITEMS_PER_PAGE,
}: any) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(prevActivePage !== activePage);
  }, [activePage, prevActivePage]);

  const springProps = useSpring(
    prevActivePage > activePage
      ? {
          from: { transform: "translateX(-100%)", opacity: 1 },
          to: { transform: "translateX(0)", opacity: 1 },
          reset: true,
          onRest: () => {
            setShouldAnimate(false);
          },
        }
      : {
          from: { transform: "translateX(100%)", opacity: 1 },
          to: { transform: "translateX(0)", opacity: 1 },
          reset: true,
          onRest: () => {
            setShouldAnimate(false);
          },
        }
  );

  return (
    <div className="explore-page-cards-container">
      {features
        .slice(
          (activePage - 1) * ITEMS_PER_PAGE,
          (activePage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        )
        .map(({ id, type, buttonCard }: any, index: number) => {
          return shouldAnimate ? (
            <animated.div style={springProps} key={`${id}__${index}`}>
              <div className="explore-page-card-container">
                <ButtonCard
                  selectedIndex={selectedIndex}
                  handleSetSelectedItem={handleSetSelectedItem}
                  id={id}
                  type={type}
                  {...buttonCard}
                />
              </div>
            </animated.div>
          ) : (
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
  );
};

export default ButtonCards;
