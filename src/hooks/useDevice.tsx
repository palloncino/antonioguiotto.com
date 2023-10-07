import {useEffect, useState} from 'react';

const MOBILE_BREAKPOINT = 600;
const LAPTOP_BREAKPOINT = 1440;

export const useDevice = () => {
	const [width, setWidth] = useState<number>(window.innerWidth);

	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);

	const isMobile = width <= MOBILE_BREAKPOINT;
	const isLaptop = width > MOBILE_BREAKPOINT && width <= LAPTOP_BREAKPOINT;
	const isMonitor = width > LAPTOP_BREAKPOINT;
	const device = isMobile ? 'mobile' : isLaptop ? 'laptop' : 'monitor';

	return {isMobile, isLaptop, isMonitor, device};
};