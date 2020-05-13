import { Repository, EntityRepository } from "typeorm"
import { User } from './user.entity';
import { SignUpInput } from './input/signup.input';
import { ConflictException } from "@nestjs/common";
import { sendEmail } from '../utils/sendEmail';
import { confirmEmailLink } from '../utils/confirmEmailLink';

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    
    async signUp(signUpInput: SignUpInput)  : Promise<User>{
        
        const { userName, email, password} = signUpInput;
   
        const userExist = await this.findOne({ where : {email : email} });

        if(userExist){
            throw new ConflictException('The user already exists');
        }

        const newUser = new User();
        newUser.email = email;
        newUser.userName = userName;
        newUser.password = password;

        const user = await newUser.save();

        await sendEmail(user.email, await confirmEmailLink(user.id));

        return newUser;
    }

} 