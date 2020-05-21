import { Module, flatten } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql'

@Module({
  imports: [GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql'],
    resolverValidationOptions: {
      requireResolversForResolveType: false
    }
  })]
})
export class AppModule { }
