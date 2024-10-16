import { Sequelize } from "sequelize";
import mongoose from "mongoose";


import User from '../app/models/User';
import Product from '../app/models/Product';
import Category from '../app/models/Category';
import Address from '../app/models/Address';
import Favorite from "../app/models/Favorite.js";

const models = [User, Product, Category, Address,Favorite]

class Database {
    constructor() {
        this.init();
        this.mongo();
    }

    init() {
        this.connection = new Sequelize('postgresql://postgres:GCSiJYqArkbcsjOYZikGyFyWpukoXqTW@autorack.proxy.rlwy.net:24631/railway');
        models.map(model => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models))
    }

    mongo(){
        this.mongoConnection = mongoose.connect('mongodb://mongo:CMXnELRtANWyqbRHxWubGavgxpBptFRb@autorack.proxy.rlwy.net:30039')
    }
}

export default new Database();