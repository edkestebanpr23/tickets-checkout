import { useState, useEffect } from 'react';

const throttle = require('lodash.throttle');

export const getDeviceConfig = (width: number): 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined => {
    if (width < 576) {
        return 'xs';
    } if (width >= 576 && width < 768) {
        return 'sm';
    } if (width >= 768 && width < 992) {
        return 'md';
    } if (width >= 992 && width < 1200) {
        return 'lg';
    }
    return 'xl';
};

const useBreakpoint = () => {
    const [brkPnt, setBrkPnt] = useState(() =>
        getDeviceConfig(window.innerWidth));

    useEffect(() => {
        const calcInnerWidth = throttle(() => {
            setBrkPnt(getDeviceConfig(window.innerWidth));
        }, 200);
        window.addEventListener('resize', calcInnerWidth);
        return () => window.removeEventListener('resize', calcInnerWidth);
    }, []);

    return brkPnt;
};
export default useBreakpoint;
