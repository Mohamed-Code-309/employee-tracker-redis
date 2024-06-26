import { Module } from '@nestjs/common';
import { SortedsetService } from './sortedset.service';
import { SortedsetController } from './sortedset.controller';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [RedisModule],
  controllers: [SortedsetController],
  providers: [SortedsetService],
})
export class SortedsetModule {}
