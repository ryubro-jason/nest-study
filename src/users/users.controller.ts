import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  BadRequestException,
  Header,
  Redirect, Query
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // 리다이렉션
  @Redirect('https://nestjs.com', 301)
  @Get('/redirect')
  redirect(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }




  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   if (+id < 1) {
  //     throw new BadRequestException('id는 0보다 큰 값이어야합니다.')
  //   }
  //   return this.usersService.findOne(+id);
  // }

  // 헤더 추가
  @Header('Custom', 'Test Header')
  @Get(':id')
  findOneWIthHeader(@Param('id') id: string) {
    return this.usersService.findOne(+id)
  }

  @HttpCode(202)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  // 라우트 파라미터
  @Delete(':userId/memo/:memoId')
  deleteUserMemo(@Param() params: { [key: string]: string}) {
    return `userID; ${params.userId}, memoId: ${params.memoId}`;
  }
}
