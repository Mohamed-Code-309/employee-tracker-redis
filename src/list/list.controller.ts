import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ListService } from './list.service';

@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) { }

  @Post('lpush')
  lpush(@Query() query: any) {
    const { key, item } = query;
    return this.listService.lpush(key, item);
  }

  @Post('rpush')
  rpush(@Query() query: any) {
    const { key, item } = query;
    return this.listService.rpush(key, item);
  }


  @Get('length')
  length(@Query('key') key: string) {
    return this.listService.length(key);
  }


  @Get('range')
  range(@Query('key') key: string) {
    return this.listService.range(key);
  }


  @Delete('lpop')
  lpop(@Query('key') key: string) {
    return this.listService.lpop(key);
  }


  @Delete('rpop')
  rpop(@Query('key') key: string) {
    return this.listService.rpop(key);
  }


}
