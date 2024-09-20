import Sequelize, { Model } from 'sequelize';

class Address extends Model {
    static init(sequelize) {
        super.init({
            rua: Sequelize.STRING,
            bairro: Sequelize.STRING,
            complemento: Sequelize.STRING,
            cep: Sequelize.STRING,
            cidade: Sequelize.STRING,
            user_id: {
                type: Sequelize.INTEGER,
                references: { model: 'users', key: 'id' },  
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }
        }, {
            sequelize,
        });

        return this;
    }
}

export default Address;
