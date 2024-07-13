import { useEffect, useState } from 'react';
import { useRouiter, useRouter } from 'next/router';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import List from '@mui/material/List';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { List, Rating, Typography } from "@mui/material";
import PageHeader from '../../components/pagetemplate/pageHeader';
import PageHeader from '../../components/pagetemplate/pageHContent';
import PageHeader from '../../components/pagetemplate/pageContentLabels';

const pageLabel = 'Products';

const itemsLabels = [
    'Id', 
    'Name', 
    'Price', 
    'Category', 
    'Count', 
    'Rating', 
    'Actions',
];

const productsList = [
    { name: 'P1', price: 1, category: 'C1', count: 1, rating: 1, id: 1 },
    { name: 'P2', price: 2, category: 'C2', count: 2, rating: 2, id: 2 },
]

export default function Products() {
    const [products, setproducts] = useState([]);

    const router = useRouter();

    const getproducts = async () =>{
        setproducts(productsList);
    };

const createproduct = async () => {
    alert('createProduct()');
};

const editProduct = async (id) => {
    try {
        router.push('/products/${id');
    }   catch (error) {
        console.error(error.message);
    }
};

const deleteproduct = async (id) => {
    alert('deleteProduct(): $(id)');
};

const createProduct = async () => {
    router.push('/products/-1');
}

    useEffext(() => {
        getProducts ()
    }, []);

    return (
        <List>
            <PageHeader pageLabel={pageLabel}>
                <PageActions createProduct={createProduct} />
            </PageHeader>
            <PageContent>
                <PageContentLabels labels={itemsLabels} />
                <PageContentItems 
                    products={products} />
                    editProduct={editProduct} /;
            </PageContent>
        </List>
    );
}

function pageContentitems({ products}) {
    return (
        <TableBody>
            {products.map ((product) => (
                <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.count}</TableCell>
                    <TableCell>{product.rating}</TableCell>
                    <PageContentActions
                        id={product.id}
                        editProduct={editProduct}/>
                </TableRow>
            ))}
        </TableBody>
    );
}

function PageActions({ createProduct }) {
    return (
        <>
        <Button
        color="primary"
        variant="contained"
        onClick={ () => createProduct()}
        >
            Create
        </Button>
        </>
    );
}

function PageContentActions({ id, editProduct, deleteProduct }) {
    return (
        <>
            <TableCell>
                <Button
                     size="small"
                     variant="contained"
                     onClick={() => editProduct(id)}
                >
                    Edit
                </Button>
            </TableCell>
        </>
    );
}
