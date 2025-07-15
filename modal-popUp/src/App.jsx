
import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
 import { Box } from '@mui/material';
import './App.css'
function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

const [child,setChild]=useState(false);
const handleChildClose=()=>{
  setChild(false);
}
  return (
    <div className='main'>
      <h1>This is Modal Pop Up Task!</h1>
      <button onClick={handleOpen}>Open Modal</button>

      <Modal open={open} onClose={handleClose}>
        <div className='modal-div' >
          <div>
            <p>This is the modal. You can see how it works.</p>
          <button onClick={()=>setChild(true)}>Child Modal</button>
       <Modal open={child} onClose={handleChildClose}>
  <Box className='box' sx={{ padding: 2, backgroundColor: '#fff', margin: '20% auto', width: 300 }}>
    <p>This is the child popup</p>
    <span onClick={() => setChild(false)} style={{ float: 'right', cursor: 'pointer' }}>X</span>
  </Box>
</Modal>
          </div>
          <span onClick={handleClose} style={{ cursor: 'pointer', float: 'right' }}>X</span>
        </div>
      </Modal>
    </div>
  )
}

export default App;
