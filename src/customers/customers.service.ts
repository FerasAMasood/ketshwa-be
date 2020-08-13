import { Injectable } from '@nestjs/common';
import {Model} from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './schemas/customer.schema';
import { CreateCustomerDto } from './interfaces/customers.interface';


@Injectable()
export class CustomersService {
    constructor(@InjectModel(Customer.name) private catModel: Model<Customer>) {}
    private readonly customers: Customer[] = [];

    create(createCustomerDto: CreateCustomerDto) : Promise<Customer> {
        const createdCustomer = new this.catModel(createCustomerDto);
        return createdCustomer.save();
    }

    findAll(): Promise<Customer[]> {
        return this.catModel.find().exec();
    }
}