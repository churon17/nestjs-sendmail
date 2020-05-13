import * as Redis from 'ioredis';

export const redis = new Redis({
        port: 6379, // Redis port
        host: "localhost",
        connectTimeout : 10000
});