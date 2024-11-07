import { ClipboardList } from 'lucide-react';
import paths from '../../constants/paths';
import { PackageOpen } from 'lucide-react';
import { Layers2 } from 'lucide-react';
import { Container } from 'lucide-react';

const listLinks = [
    {
        id: 1,
        label: 'Pedidos',
        link: paths.Order,
        icon: ClipboardList
    },
    {
        id: 2,
        label: 'Listar Produtos',
        link: paths.Products,
        icon: PackageOpen
    },
    {
        id: 3,
        label: 'Novo Produto',
        link: paths.NewProduct,
        icon: Layers2
    },
    {
        id: 4,
        label: 'Nova Categoria',
        link: paths.NewCategory,
        icon: Container
    }

]

export default listLinks