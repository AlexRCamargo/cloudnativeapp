import Layout from '../../../components/Layout';

function MyApp({ Component, pagesProps }) {
    return (
        <Layout>
            <Component {...pagesProps} />
        </Layout>
    );
}

export default MyApp;
