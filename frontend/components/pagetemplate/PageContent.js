import { Listitem, Table, TableContainer, tableContainer } from '@mui/material';

export default function PageContent({ children }) {
    return (
        <>
            <Listitem>
                <TableContainer>
                    <Table>{children}</Table>
                </TableContainer>
            </Listitem>
        </>
    );
}
