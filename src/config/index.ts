import mockdata from './mockdata/index';
import masterData from './master-data';

const getConfiguration = () => {
    const config = {
        mockdata,
        masterData
    };

    return config;
};
export const config = getConfiguration();
