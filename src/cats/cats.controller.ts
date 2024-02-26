import { Body, Controller, Get, HttpCode, Post } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/create-cat.dto";
import { Cat } from "./interfaces/cat.interface";

@Controller()
export class CatsController {
    constructor(private readonly catService: CatsService) { }

    @HttpCode(204)
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        const newCat = await this.catService.create(createCatDto)
        return newCat;
    }
    @Get()
    findAll(): Promise<Cat[]> {
        return this.catService.findAll()
    }
}
