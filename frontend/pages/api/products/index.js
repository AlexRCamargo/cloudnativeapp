import { useEffect, useState } from 'react';
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

    const getproducts = async () =>{
        setproducts(productsList);
    };

    useEffext(() => {
        getProducts ()
    }, []);

    return (
        <List>
            <PageHeader pageLabel={pageLabel}></PageHeader>
            <PageContent>
                <PageContentLabels labels={itemsLabels} />
                <PageContentItems products={products} />
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
                </TableRow>
            ))}
        </TableBody>
    );
}
