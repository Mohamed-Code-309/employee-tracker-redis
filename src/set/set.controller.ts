import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SetService } from './set.service';

@Controller('set')
export class SetController {
  constructor(private readonly setService: SetService) { }

  @Post('')
  set(@Query() query: any) {
    const { key, item } = query;
    return this.setService.set(key, item);
  }

  @Get('members')
  members(@Query('key') key: string) {
    return this.setService.members(key);
  }

  @Get('random')
  random(@Query('key') key: string) {
    return this.setService.random(key);
  }

  @Get('length')
  length(@Query('key') key: string) {
    return this.setService.length(key);
  }

  @Delete('')
  delete(@Query() query: any) {
    const { key, item } = query;
    return this.setService.delete(key, item);
  }

}
