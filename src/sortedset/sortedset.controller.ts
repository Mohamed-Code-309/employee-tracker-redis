import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SortedsetService } from './sortedset.service';

@Controller('sortedset')
export class SortedsetController {
  constructor(private readonly sortedsetService: SortedsetService) { }

  @Post('')
  add(@Query() query: any) {
    const { key, item, score } = query;
    return this.sortedsetService.add(key, item, score);
  }

  @Get('')
  list(@Query('key') key: string) {
    return this.sortedsetService.list(key);
  }

  @Get('score')
  score(@Query() query: any) {
    const { key, item } = query;
    return this.sortedsetService.score(key, item);
  }

  @Delete('')
  delete(@Query() query: any) {
    const { key, item } = query;
    return this.sortedsetService.delete(key, item);
  }
  
}
