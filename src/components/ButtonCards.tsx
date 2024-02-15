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
  const [{ bool, springProps }, setShouldAnimate] = useState({
    bool: false,
    springProps: {},
  });

  useEffect(() => {
    setShouldAnimate({ bool: true, springProps: swipeSpringProps });
  }, [activePage, prevActivePage]);

  useEffect(() => {
    setShouldAnimate({ bool: true, springProps: fadeSpringProps });
  }, [features]);

  const fadeSpringProps = useSpring({
    from: { transform: 'scale(0.95)', opacity: 0, width: '100%' },
      to: { transform: 'scale(1)', opacity: 1, width: '100%' },
    reset: true,
    onRest: () => {
      setShouldAnimate({ bool: false, springProps: {} });
    },
  });

  const swipeSpringProps = useSpring(
    prevActivePage > activePage
      ? {
          from: { transform: "translateX(-100%)", opacity: 1 },
          to: { transform: "translateX(0)", opacity: 1 },
          reset: true,
          onRest: () => {
            setShouldAnimate({ bool: false, springProps: {} });
          },
        }
      : {
          from: { transform: "translateX(100%)", opacity: 1 },
          to: { transform: "translateX(0)", opacity: 1 },
          reset: true,
          onRest: () => {
            setShouldAnimate({ bool: false, springProps: {} });
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
          return bool ? (
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
