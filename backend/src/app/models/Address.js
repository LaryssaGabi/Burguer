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
                type: Sequelize.UUID, 
                references: { model: 'Users', key: 'id' }, 
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                allowNull: false,
            },
        }, {
            sequelize,
        })
        
        return this;
    }
}

export default Address;
