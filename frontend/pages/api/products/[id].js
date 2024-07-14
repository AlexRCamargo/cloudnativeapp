import List from '@mui/material/List';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import PageContent from '../../components/pagetemplate/PageContent';
import PageHeader from '../../components/pagetemplate/PageHeader';

const pageLabel = 'Edit Product';

export default function Product() {
    const router = useRouter();
    const { id } = router.query;

    const {
        control,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();

    const onSubmitForm = async () => {
        const name = watch('name');
        const price = watch('price');
        const category = watch('category');
        const count = watch('count');
        const rating = watch('rating');
        const body = { name, price, category, count, rating };
        try {
            if (id === '-1') {
                alert('insert new product!')
            } else {
                alert ('update existing product!')
            }
            router.back();
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <List>
            <PageHeader pageLabel={pageLabel} />
            <PageContent></PageContent>
        </List>
    );
}
