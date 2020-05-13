import { Injectable } from '@nestjs/common';
import { SignUpInput } from './input/signup.input';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository : UserRepository
    ){}

    async signUp(signUpInput : SignUpInput) : Promise<User> {
        return await this.userRepository.signUp(signUpInput);
    }


    


}
