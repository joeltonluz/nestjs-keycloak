import { Controller, Get, Req } from '@nestjs/common';
import { AuthenticatedUser, Public, Roles } from 'nest-keycloak-connect';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Public(true)
  getHello(@AuthenticatedUser() user: any): string {
    if (user) {
      return `Hello Autenticado!!!`;
    } else {
      return 'Hello world!';
    }
  }

  @Get('private')
  async findAll(@Req() req: any) {
    console.log('req', req);
    return 'Authenticated only!';
  }

  @Get('roles')
  @Roles({ roles: ['default-roles-bughunt', 'view-profile'] })
  testRoles() {
    return 'roles funcionam';
  }
}
