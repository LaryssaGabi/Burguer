import Address from '../models/Address';

class AddressController {
    async store(req, res) {
        const { rua, bairro, complemento, cep, cidade } = req.body;
        const { user_id } = req;

        const address = await Address.create({ rua, bairro, complemento, cep, cidade, user_id });
        return res.json(address);
    }

    async update(req, res) {
        const { rua, bairro, complemento, cep, cidade } = req.body;
        const { id } = req.params;

        const address = await Address.findByPk(id);
        if (!address) {
            return res.status(404).json({ error: 'Endereço não encontrado' });
        }

        await address.update({ rua, bairro, complemento, cep, cidade });
        return res.json(address);
    }

    async show(req, res) {
        const { user_id } = req;
        const address = await Address.findOne({ where: { user_id } });
        if (!address) {
            return res.status(404).json({ error: 'Endereço não encontrado' });
        }
        return res.json(address);
    }
}

export default new AddressController();
