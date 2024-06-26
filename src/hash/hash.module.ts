import { Module } from '@nestjs/common';
import { HashService } from './hash.service';
import { HashController } from './hash.controller';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [RedisModule],
  controllers: [HashController],
  providers: [HashService],
})
export class HashModule {}
