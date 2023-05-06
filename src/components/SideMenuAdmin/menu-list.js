import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ChecklistIcon from '@mui/icons-material/Checklist';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import QueueIcon from '@mui/icons-material/Queue';
import paths from '../../constants/path'    

const ListLink = [
    {
        id: 1,
        label: 'Pedidos',
        link: paths.Ordem,
        icon: AddShoppingCartIcon
    },

    {
        id: 2,
        label: 'Listar-Produtos',
        link: paths.Products,
        icon: ChecklistIcon
    },

    {
        id: 3,
        label: 'Novo Produtos',
        link: paths.NewProduct,
        icon: CreateNewFolderIcon

    },

    {
        id: 4,
        label: 'Categoria',
        link: paths.Category,
        icon: QueueIcon

    },

    {
        id: 6,
        label: 'Nova Categoria',
        link: paths.NewCategory,
        icon: CreateNewFolderIcon

    }


]
export default ListLink