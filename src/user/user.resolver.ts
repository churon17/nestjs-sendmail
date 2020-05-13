import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SignUpInput } from './input/signup.input';
import { User } from './models/user.model';
import { UserService } from './user.service';

@Resolver(User)
export class UserResolver {

    constructor(
      private readonly userService : UserService
    ){}

    @Query(returns => String)
    async hello(){
      return 'Hello World';
    }
  
    @Mutation(returns => User)
    async signUp(
      @Args('signUpInput') signUpInput  : SignUpInput,
    ) : Promise<User>{ 
      return this.userService.signUp(signUpInput);
    } 


}

