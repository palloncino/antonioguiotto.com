import React from 'react';
import { animated, useSpring } from '@react-spring/web';

const Fade = ({ children, customSpringProps }: any) => {

  let props;

  if (customSpringProps) {
    props = customSpringProps;
  } else {
    props = {
      from: { transform: 'scale(0.95)', opacity: 0, width: '100%' },
      to: { transform: 'scale(1)', opacity: 1, width: '100%' },
      reset: true,
    }
  }
  props = useSpring({...props});

  return <animated.div style={props}>{children}</animated.div>;
};

export default Fade;