import { Controller, Get, Param } from '@nestjs/common';
import { Public, RoleMatchingMode, Roles } from 'nest-keycloak-connect';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('roles')
  //@Scopes('profile')
  @Roles({
    roles: ['realm_access.roles[app-admin]'],
    mode: RoleMatchingMode.ALL,
  })
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':code')
  @Roles({ roles: ['app-user'] })
  async findByCode(@Param('code') code: number) {
    return await this.usersService.findByCode(code);
  }

  @Get()
  @Public(true)
  getpublic(): string {
    return `${this.usersService.getHello()} from public`;
  }
  @Get('/user')
  getUser(): string {
    return `${this.usersService.getHello()} from user`;
  }
  @Get('/admin')
  getAdmin(): string {
    return `${this.usersService.getHello()} from admin`;
  }
  @Get('/all')
  getAll(): string {
    return `${this.usersService.getHello()} from all`;
  }
}
