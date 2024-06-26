import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class ListService {
  constructor(
    @Inject('REDIS_CONNECTION') private readonly redis: RedisClientType,
  ) { }

  lpush(key: string, item: string) {
    return this.redis.lPush(key, item)
  }

  rpush(key: string, item: string) {
    return this.redis.rPush(key, item)
  }

  length(key: string) {
    return this.redis.lLen(key)
  }

  range(key: string) {
    return this.redis.lRange(key, 0, -1);
  }

  lpop(key: string) {
    return this.redis.lPop(key);
  }

  rpop(key: string) {
    return this.redis.rPop(key);
  }
}
