import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { createClient } from 'redis';
import { StringModule } from './string/string.module';
import { HashModule } from './hash/hash.module';
import { ListModule } from './list/list.module';
import { SetModule } from './set/set.module';
import { SortedsetModule } from './sortedset/sortedset.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    StringModule,
    HashModule,
    ListModule,
    SetModule,
    SortedsetModule,
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
