import { Module } from '@nestjs/common';
import { createClient } from 'redis';

@Module({
    providers: [
        {
            provide: 'REDIS_CONNECTION',
            useFactory: async (): Promise<any> => {
                try {
                    const client = createClient({
                        socket: {
                            host: process.env.REDIS_HOST,
                            port: Number(process.env.REDIS_PORT)
                        }
                    });
                    await client.connect();
                    return client;
                } catch (e) {
                    throw e;
                }
            }
        },
    ],
exports: ['REDIS_CONNECTION'],
})
export class RedisModule { }
