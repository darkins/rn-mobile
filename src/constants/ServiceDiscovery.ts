import Constants from './Constants';

const ServiceDiscovery = {
    production: {
        urlLogin: 'https://sc5rbrh663.execute-api.us-east-1.amazonaws.com/dev/login',
    },
    preproduction: {
        urlLogin: 'https://sc5rbrh663.execute-api.us-east-1.amazonaws.com/dev/login',
    },
    development: {
        urlLogin: 'https://sc5rbrh663.execute-api.us-east-1.amazonaws.com/dev/login',
    },
};

export default ServiceDiscovery[Constants.NODE_ENV.ENDPOINT];
