import { Controller, Get, Delete, Query, Post, Body } from '@nestjs/common';
import { HashService } from './hash.service';

@Controller('hash')
export class HashController {
  constructor(private readonly hashService: HashService) {}

  @Post('')
  post(@Body() body: { key: string, object: any }) {
    return this.hashService.set(body.key, body.object);
  }

  @Get('')
  get(@Query('key') key: string) {
    return this.hashService.get(key);
  }

  @Get('length')
  length(@Query('key') key: string) {
    return this.hashService.length(key);
  }


  @Delete('')
  remove(@Query('key') key: string) {
    return this.hashService.del(key);
  }

}
