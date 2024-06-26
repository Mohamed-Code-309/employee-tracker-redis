import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class HashService {
  constructor(
    @Inject('REDIS_CONNECTION') private readonly redis: RedisClientType,
  ) { }

  set(key: string, object: any) {
    return this.redis.hSet(key, object);
  }

  get(key: string) {
    return this.redis.hGetAll(key);
  }

  length(key: string) {
    return this.redis.hLen(key);
  }

  del(key: string) {
    return this.redis.del(key);
  }

}
