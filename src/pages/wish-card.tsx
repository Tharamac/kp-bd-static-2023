import { CardPattern,  getStyle } from "../modules/card-pattern";
import { WishEntry } from "../modules/wish-entry";

export default function WishCard({data, onOpenModal}: {data: WishEntry, onOpenModal?: () => void}){
    const style = getStyle(data?.pattern);
    return (
      <div 
       onClick={
        onOpenModal
       }
       style={{
        backgroundColor: style.backgroundColor,
        borderColor: style.borderColor
       }}
      className={`rounded-none justify-self-center flex-col relative overflow-hidden flex h-full w-full max-w-[425px] min-[425px] text-black/50 bg-[${style.backgroundColor}] border-[20px] border-[${style.borderColor}]`}>
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
            <span className='row-start-1 row-span-2'>{data?.createdDate.toFormat('dd LLLL yyyy HH:mm')}
         
              {/* {DateTime.fromISO(post.createdAt).setZone('Asia/Bangkok').toFormat('LLLL')}
      {DateTime.fromISO(post.createdAt).setZone('Asia/Bangkok').toFormat('yy')} */}
            </span>   {<img src={style.footerImageSource} className='h-[80px] object-contain row-end-2  row-span-2'/>} 
            {/* <span className='flex-1 text-right'>{DateTime.fromISO(post.createdAt).setZone('Asia/Bangkok').toFormat('HH')}:{DateTime.fromISO(post.createdAt).setZone('Asia/Bangkok').toFormat('mm')
      }
      </span> */}
          </div>
        </div>
      </div>

    );
} 

