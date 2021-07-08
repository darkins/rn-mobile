const ENV = 'DEVELOPMENT'; // DEVELOPMENT / PREPRODUCTION / PRODUCTION
const ORIGIN = 'AIDTech';

type Environment = {
    ENDPOINT: string;
};

let NODE_ENV: Environment = { ENDPOINT: '' };

if (ENV === 'DEVELOPMENT') {
    NODE_ENV = {
        ENDPOINT: 'development',
    };
} else if (ENV === 'PREPRODUCTION') {
    NODE_ENV = {
        ENDPOINT: 'preproduction',
    };
} else if (ENV === 'PRODUCTION') {
    NODE_ENV = {
        ENDPOINT: 'production',
    };
}

export default {
    ORIGIN,
    NODE_ENV,
};
