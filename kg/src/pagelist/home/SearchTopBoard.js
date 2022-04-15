import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  '../../css/common.css'; 


const thStyle = {
    textAlign: 'center',
    backgroundColor  : '#d9ddde'
}
const aStyle = {
    textDecorationLine : 'none',
    borderBottom : 'none'
}


function SearchTopBoard(props) {

    console.log('dddd',props.rows);
    let dataRows =  props.rows;
  
    
    return(
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={thStyle}>인기 게시글</TableCell>
        </TableRow>
        </TableHead>


        <TableBody>
            {dataRows.map((row) => (
            <TableRow
                key={row.subject}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

            ><TableCell  component="th" sx={{height:10}}>
                
                <TableCell  component="td"   sx={aStyle} >
                 {row.subject}
                </TableCell>    
            </TableCell>

                
            </TableRow>
            ))}
        </TableBody>
        </Table>
        </TableContainer>
        )

    }

export default SearchTopBoard;