import {Controller, Get, Post, Req, Param, Body, Delete} from '@nestjs/common';
import {CreateCustomerDto} from "./create-customer.dto";
import {CustomersService} from "./customers.service";
import {Customer} from "./schemas/customer.schema";

@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService) {
    }

    @Post()
    async create(@Body() createCustomerDto: CreateCustomerDto) {
        this.customersService.create(createCustomerDto);
    }

    @Get()
    async findAll(): Promise<Customer[]> {
        return this.customersService.findAll();
    }

}