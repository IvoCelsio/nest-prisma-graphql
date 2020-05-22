import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';

@Resolver()
export class MessagesResolver {
    messagesSeedArray = [
        { id: 0, description: 'The seed message' },
        { id: 1, description: 'Another message' }
    ];

    @Query('messages')
    getMessages() {
        return this.messagesSeedArray;
    }

    @Mutation()
    createMessage(@Args('description') description: string) {
        const id = this.messagesSeedArray.length;
        const newMessage = { id, description };
        this.messagesSeedArray.push(newMessage);

        return newMessage;
    }
}