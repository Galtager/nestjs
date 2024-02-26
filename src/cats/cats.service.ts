import { Injectable } from "@nestjs/common";
import { Cat } from "src/cats/interfaces/cat.interface";

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    async create(cat: Cat): Promise<Cat> {
        this.cats.push(cat);
        return cat
    }
    async findAll() {
        return this.cats;
    }
}