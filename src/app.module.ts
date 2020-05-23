import { Module, flatten } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql'
import { MessagesModule } from './messages/messages.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql'],
    resolverValidationOptions: {
      requireResolversForResolveType: false
    }
  }), MessagesModule, PrismaModule]
})
export class AppModule { }
