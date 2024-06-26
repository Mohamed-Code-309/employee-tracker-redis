import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class SortedsetService {
  constructor(
    @Inject('REDIS_CONNECTION') private readonly redis: RedisClientType,
  ) { }

  add(key: string, item: string, score: number) {
    return this.redis.zAdd(key, [{ score, value: item }]);
  }

  list(key: string) {
    return this.redis.zRange(key, 0, -1);
  }

  score(key: string, item: string,) {
    return this.redis.zScore(key, item);
  }

  delete(key: string, item: string) {
    return this.redis.zRem(key, item);
  }
}
