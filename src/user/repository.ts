import { bsonId } from '../interfaces/mongo';
import User from './entity';

class UserRepository {
    constructor() {
    }

    async getObject(id: number): Promise<any | undefined> {
        try {
            const object = await User.findById(id);
            return object;
        } catch (error) {
            console.error(error);
            return;
        }
    }

    async CreateObject(data: { username: string, email: string, password: string }): Promise<bsonId | undefined> {
        try {
            const result = await new User(data).save();
            return result._id;
        } catch (error) {
            console.error(error);
            return;
        }
    }
}

export default UserRepository;