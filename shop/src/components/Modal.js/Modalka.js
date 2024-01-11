import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { Contexts } from '../../context/Contexts';

function Modalka(props) {
  const {open, setOpen} = useContext(Contexts)  
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
    
  return (
    <div>
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
            >
            <Box sx={style} >
            <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                Xato
            </Typography>
            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
              Bu maxsulotdan savatchada mavjud
            </Typography>
            </Box>
        </Modal>        
    </div>
  )
}

export default Modalka