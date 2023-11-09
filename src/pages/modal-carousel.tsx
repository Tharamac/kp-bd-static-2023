import React from "react";
import { Modal, Button, Box, Typography, Dialog, DialogContent, makeStyles, DialogContentText, DialogTitle, DialogActions } from '@mui/material'
import { WishEntry } from '../modules/wish-entry';
import WishFullCard from './wish-full-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
     
export default function WishCardModalCarousel(
  {data, order, onChangeIndex, open, handleClose}: {data: WishEntry, order: {current: number, total:number} | undefined, onChangeIndex: (add:number) => void , open: boolean, handleClose: () => void}) {

  return (
    <div>
    
      <Dialog
        open={open}
        fullWidth={true}
        maxWidth='lg'
        style={{ backgroundColor: 'transparent' }}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <div className="flex justify-center h-[30px] bg-transparent"></div>

        <div className='flex flex-row'>
          <Button className='bg-transparent' onClick={
            () => onChangeIndex(-1)
          }

          ><FontAwesomeIcon className="text-[24px] text-[#FF8C00] aspect-square" icon={faChevronLeft} /></Button>

          <WishFullCard key={data?.id} data={data}></WishFullCard>
          <Button onClick={() => {
            onChangeIndex(1)
          }

          }><FontAwesomeIcon className="text-[24px] text-[#FF8C00] aspect-square" icon={faChevronRight} /></Button>
        </div>
        <div className="flex justify-center bg-transparent pr-4" style={{ backgroundColor: 'transparent' }}>
        {order && 
          <b className='text-[30px]'> {order.current + 1} / {order.total}</b>}</div>

      </Dialog>





    </div>
  
  )
}
