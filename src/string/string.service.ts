import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class StringService {

  constructor(
    @Inject('REDIS_CONNECTION') private readonly redis: RedisClientType,
  ) { }

  set(key: string, value: string) {
    return this.redis.set(key, value);
  }

  get(key: string) {
    return this.redis.get(key)
  }

  setnx(key: string, value: string, expire: number) {
    return this.redis.set(key, value, { EX: expire })
  }

  incr() {
    return this.redis.incrBy("age", 3);
  }

  del(key: string) {
    return this.redis.del(key);
  }

}
