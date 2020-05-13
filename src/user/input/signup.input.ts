import { InputType, Field } from '@nestjs/graphql';

@InputType({description : 'User '})
export class SignUpInput {

    @Field()
    userName : string;

    @Field()
    email : string;

    @Field()
    password : string;

}

