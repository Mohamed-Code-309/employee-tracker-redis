import { Controller, Get, Param, Delete, Post, Body, Query } from '@nestjs/common';
import { StringService } from './string.service';

@Controller('string')
export class StringController {
  constructor(private readonly stringService: StringService) { }


  @Post('')
  findAll(@Body() body: { key: string, value: string }) {
    return this.stringService.set(body.key, body.value);
  }

  @Get('')
  findOne(@Query('key') key: string) {
    return this.stringService.get(key);
  }

  @Post('expire')
  findOne2(@Body() body: { key: string, value: string, expire: number }) {
    return this.stringService.setnx(body.key, body.value, body.expire);
  }


  @Get('incr')
  remove() {
    return this.stringService.incr();
  }

  @Delete('')
  delete(@Query('key') key: string) {
    return this.stringService.del(key);
  }

}
