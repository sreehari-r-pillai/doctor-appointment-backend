import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY, Role } from '../decorators/roles.decorator';
@Injectable() export class RolesGuard implements CanActivate {
  constructor(private r:Reflector) {}
  canActivate(ctx:ExecutionContext){ const roles=this.r.getAllAndOverride<Role[]>(ROLES_KEY,[ctx.getHandler(),ctx.getClass()]); if(!roles||roles.length===0) return true; const u=ctx.switchToHttp().getRequest().user; if(u&&roles.includes(u.role)) return true; throw new ForbiddenException('Insufficient role'); }
}
