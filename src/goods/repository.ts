import { bsonId } from '../interfaces/mongo';
import Goods from './entity';

class GoodsRepository {
    constructor() {
    }

    async getObjects(cursor: string): Promise<any | undefined> {
        try {
            const objects = await Goods.find();
            return objects;
        } catch (error) {
            console.error(error);
            return;
        }
    }

    async getObject(id: number): Promise<any | undefined> {
        try {
            const object = await Goods.findById(id);
            return object;
        } catch (error) {
            console.error(error);
            return;
        }
    }

    async createObject(data: { username: string, email: string, password: string }): Promise<bsonId | undefined> {
        try {
            const result = await new Goods(data).save();
            return result._id;
        } catch (error) {
            console.error(error);
            return;
        }
    }
}

export default GoodsRepository;