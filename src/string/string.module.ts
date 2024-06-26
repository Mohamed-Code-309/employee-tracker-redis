import { Module } from '@nestjs/common';
import { StringService } from './string.service';
import { StringController } from './string.controller';
import { AppModule } from 'src/app.module';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [RedisModule],
  controllers: [StringController],
  providers: [StringService],
})
export class StringModule {}
