import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) { }

    async createUser(email: string, password: string) {
        const lowerCaseEmail = email.toLocaleLowerCase();

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.prisma.mutation.createUser({
            data: {
                email: lowerCaseEmail,
                password: hashedPassword
            }
        });

        return user;
    }
}
