import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const thStyle = {
    textAlign: 'center',
    backgroundColor  : '#d9ddde'
}


function HomeView(props) {

    console.log('dddd');
    let dataRows =  props.rows;
    if(props.rows == null ){
         dataRows = [];
    }
    
    return(
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={thStyle}>주요뉴스</TableCell>
        </TableRow>
        </TableHead>


        <TableBody>
            {dataRows.map((row) => (
            <TableRow
                key={row.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

            ><TableCell  component="th">
                
                <TableCell  component="a" href= {row.url} target='_blank'>
                 {row.title}
                </TableCell>    
            </TableCell>

                
            </TableRow>
            ))}
        </TableBody>
        </Table>
        </TableContainer>
        )

    }

export default HomeView;