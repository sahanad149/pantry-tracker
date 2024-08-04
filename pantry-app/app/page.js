'use client'
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { firestore } from "@/firebase";
import { collection, query, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { transform } from "next/dist/build/swc";

// const item = ['apple', 'orange', 'banana', 'carrot', 'beans', 'corn', 'pepper', 'kiwi', 'Pea', 'mango']

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export default function Home() {
  const [pantry, setPantry] = useState( [] )

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    const updatePantry = async () => {
      const snapshot = query(collection(firestore, 'pantry'))
      const docs = await getDocs(snapshot)
      const pantryList = []
      docs.forEach((doc) => {
        // console.log(doc.id);
        pantryList.push(doc.id)
      })
      console.log(pantryList)
      setPantry(pantryList)
    }
    updatePantry();
  }, [])
  return (
    <Box 
    width="100vw"
    height="100vh"
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    flexDirection={'column'}
    gap={2}
    > 

    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <Box style={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{mt:2}}>
            Lorem Ipsum Delor, et tu los´
          </Typography>
        </Box>
      </Modal>

    <Button variant="contained" onClick={handleOpen}>ADD</Button>
    <Box border={'1px solid #333'}>

    <Box 
      width="800px" 
      height="100px" 
      bgcolor={'#ADD8E6'} 
      display={'flex'} 
      justifyContent={'center'} 
      alignItems={'center'}
      // border={'1px solid #333'}
      >
        <Typography variant={'h2'} color={'#333'} textAlign={'center'}>
          Pantry Items
        </Typography>
      </Box>

    <Stack width="800px" height="300px" spacing={2} overflow={'auto'} >
      {pantry.map((i) => (
        <Box 
        key={i}
        width="100%"
        minHeight="150px"
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        bgcolor={'#f0f0f0'}>
          <Typography
          variant={'h4'}
          color={'#333'}
          textAlign={'center'}
          fontWeight={'medium'}>
            {
              i.charAt(0).toUpperCase() + i.slice(1)
            }
          </Typography>
        </Box>
      ))}
    </Stack>
    </Box>
    </Box>
  )
}