import { Fragment, useRef, useState } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
import React from "react";
import { Modal, Button, Box, Typography, Dialog, DialogContent, makeStyles, DialogContentText, DialogTitle, DialogActions } from '@mui/material'
import Banner, { Dimension } from './banner';
import { WishEntry } from '@/models/wish-entry';
import WishFullCard from './wish-modal-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  // const useStyles = makeStyles((theme) => ({
  //   gridList: {
  //     flexWrap: "nowrap",
  //     transform: "translateZ(0)"
  //   },
  //   modal: {
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     "&:hover": {
  //       backgroundcolor: "red"
  //     }
  //   },
  //   img: {
  //     outline: "none"
  //   }
  // }));
     
export default function WishCardModalCarousel({data, order, onChangeIndex, open, handleClose}: {data: WishEntry, order: {current: number, total:number}, onChangeIndex: (add:number) => void , open: boolean, handleClose: () => void}) {
  // if(index >= dataset.length)
  //   setCurrentIndex(0)
  // else if (index < 0)
  //   setCurrentIndex(dataset.length - 1)
  // var data = data.at(initialIndex)
  // console.log(initialIndex)
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Dialog
        open={open}
        fullWidth={true}
        maxWidth='lg'
        style={{backgroundColor: 'transparent'}}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        // slotProps.backdrop={{ style: { backgroundColor: "transparent" } }}
     
      >
            <div className="flex justify-center h-[30px] bg-transparent"></div>

            <div className='flex flex-row'>
            <Button className='bg-transparent' onClick={
              () => onChangeIndex(-1)
            }
               
            ><FontAwesomeIcon className="text-[24px] text-[#FF8C00] aspect-square"  icon={faChevronLeft} /></Button>
           
            <WishFullCard key={data?.id} data={data}></WishFullCard> 
            {/* <b className='absolute top-0 right-0 text-[30px]'>{order.current+1}/{order.total}</b> */}
            <Button onClick={ () => {
               onChangeIndex(1)
            }
               
            }><FontAwesomeIcon className="text-[24px] text-[#FF8C00] aspect-square"  icon={faChevronRight} /></Button>
            </div>
            <div className="flex justify-center bg-transparent pr-4" style={{backgroundColor: 'transparent'}}><b className='text-[30px]'>{order.current+1}/{order.total}</b></div>
               {/* <Banner dimensions={dimensions}></Banner>  */}
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>


     
   {/* <Banner dimensions={dimensions}></Banner>  */}

      </div>
    // <Transition.Root show={open} as={Fragment}>
    //   <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
    //     <Transition.Child
    //       as={Fragment}
    //       enter="ease-out duration-300"
    //       enterFrom="opacity-0"
    //       enterTo="opacity-100"
    //       leave="ease-in duration-200"
    //       leaveFrom="opacity-100"
    //       leaveTo="opacity-0"
    //     >
    //       <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
    //     </Transition.Child>

    //     <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    //       <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
    //         <Transition.Child
    //           as={Fragment}
    //           enter="ease-out duration-300"
    //           enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    //           enterTo="opacity-100 translate-y-0 sm:scale-100"
    //           leave="ease-in duration-200"
    //           leaveFrom="opacity-100 translate-y-0 sm:scale-100"
    //           leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    //         >
    //           <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
    //             <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
    //               <div className="sm:flex sm:items-start">
    //                 <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
    //                   <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
    //                     Deactivate account
    //                   </Dialog.Title>
    //                   <div className="mt-2">
    //                     <p className="text-sm text-gray-500">
    //                       Are you sure you want to deactivate your account? All of your data will be permanently
    //                       removed. This action cannot be undone.
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
    //               <button
    //                 type="button"
    //                 className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
    //                 onClick={() => setOpen(false)}
    //               >
    //                 Deactivate
    //               </button>
    //               <button
    //                 type="button"
    //                 className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
    //                 onClick={() => setOpen(false)}
    //                 ref={cancelButtonRef}
    //               >
    //                 Cancel
    //               </button>
    //             </div>
    //           </Dialog.Panel>
    //         </Transition.Child>
    //       </div>
    //     </div>
    //   </Dialog>
    // </Transition.Root>
  )
}
