import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class SetService {
  constructor(
    @Inject('REDIS_CONNECTION') private readonly redis: RedisClientType,
  ) { }

  set(key: string, item: string) {
    return this.redis.sAdd(key, item);
  }

  members(key: string) {
    return this.redis.sMembers(key);
  }

  random(key: string) {
    return this.redis.sRandMember(key);
  }

  length(key: string) {
    return this.redis.sCard(key);
  }

  delete(key: string, item: string) {
    return this.redis.sRem(key, item)
  }
}
