import { CardPattern, getStyle } from "@/models/card-pattern";
import { WishEntry } from "@/models/wish-entry";
import { ReactNode } from "react";

export default function WishFullCard({data}: {data?: WishEntry},){
    const style = getStyle(data?.pattern);
    
    return (
      <div 
      className={`rounded-none justify-self-center flex-col relative overflow-hidden flex h-m-[600px] w-full max-w-[1400px] min-[425px] text-black/50 bg-[${style.backgroundColor}] border-[20px] border-[${style.borderColor}]`}>
        
        <div className='flex w-full flex-col px-4 py-2  top-0 left-0'>
          <div className='flex'>
            {<img src={style.headerImageSource} className='h-[80px] object-contain'/>} 
           
          </div>
        </div>
        {/* {ข้อความ} */}
        <div className='flex flex-1 h-full flex-col relative overflow-hidden px-4 py-2'>
          <span className='text-center text-[#4E4670] sm:text-xl overflow-hidden justify-center items-center flex flex-1'>{data?.message}</span>

          <div className='w-full flex grid grid-rows-1 grid-flow-col gap-1 pt-4 min-[425px]:pl-1  min-[425px]:text-base text-sm justify-between'>
          <b className='text-[#4E4670] min-[425px]:text-[20px] text-[14px] break-words overflow-hidden pt-4 min-[425px]:pr-20 min-[375px]:pr-16 pr-14'>{data?.sender}</b>
            <span className='row-start-1 row-span-2'>{data?.createdDate.toFormat('dd LLLL yyyy HH:mm')}</span>   
            {<img src={style.footerImageSource} className='h-[80px] object-contain row-end-2  row-span-2'/>} 
        
          </div>
        </div>
        {/* <div>{children}</div> */}
    
        {/* <b className='absolute top-0 right-0 text-[30px]'>{order.current+1}/{order.total}</b> */}
      </div>

    )
   
    
} 

