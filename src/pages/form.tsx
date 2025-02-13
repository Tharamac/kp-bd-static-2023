import { CardPattern, WishEntry } from "../modules/wish-entry";
import { useForm, SubmitHandler, UseFormSetError, SubmitErrorHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Emoji from "@/component/emoji";


export type Inputs = {
    senderName: string,
    wishMessage: string,
    cardPattern: string,
    isConsentPublish: boolean,
};

export default function Form({mutateFunction}: {mutateFunction: Function}) {


    const saveData = async (entry: WishEntry, postMutate: Function) => {
        console.log(JSON.stringify(entry))
        const response = await fetch('/api/storeWishDB', {
            method: 'POST',
            // headers: {
            //   'Content-Type': 'application/json'
            // },
            body: JSON.stringify(entry)
          });
        const data = await response.json();     
        postMutate()
        console.log(data);
    }

    const { register, handleSubmit, watch, setError, reset, formState: { errors } } = useForm<Inputs>( {defaultValues: { isConsentPublish: false }}, );
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        reset();
        const entry = WishEntry.fromInputs(data);
        console.log(entry);
        await saveData(entry, mutateFunction);
    }
    const onInvalid: SubmitErrorHandler<Inputs> = (errors) => {
        return console.error(errors);
    }
 
    //min-[341px]:py-4
    //onSubmit={handleSubmit(onSubmit)}w
    return (
        <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="bg-[#FDA172] w-auto md:w-[640px] rounded-2xl mx-4 sm:mx-16 md:mx-auto p-8 items-center h-full justify-center">
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-8">
                    {/* <p className="mt-1 text-sm leading-6 text-white">This information will be displayed publicly so be careful what you share.</p> */}
                    <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="sender" className="block text-2xl font-medium leading-6 text-gray-900 font-semibold">จาก</label>
                            <div className="mt-2">
                                <div className="flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-200 sm:max-w-md">
                                    <input type="text" id="sender"
                                        {...register("senderName", {required: "\"แกไม่มีสิทธิ์ ไม่บอกชื่อ\" - คัมภีร์ไม่ได้กล่าว", maxLength: 40 })}
                                        className="block flex-1 border-0 rounded-md bg-white py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="ชื่อที่อยากให้ปรากฏในการ์ดอวยพร"></input>           
                                </div>
                                <ErrorMessage
                                    errors={errors}
                                    name="senderName"
                                    render={({ message }) => <p className="text-[#b90e0a] mt-2"><Emoji symbol="❗" ></Emoji> {message}</p>}
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="wishing" className="block text-2xl font-medium leading-6 text-gray-900 font-semibold">คำอวยพร</label>
                            <div className="mt-2">
                                <textarea id="wishing_message" 
                                    {...register("wishMessage", { required: "\"นี่กะจะไม่เขียนอะไรเลยหรอห้ะ\" - คัมภีร์ไม่ได้กล่าว", })}
                                    className="block w-full rounded-md border-0 py-1.5 px-2 h-[200px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                    placeholder="เช่น ขอให้ไม่ปวดหลัง"
                                ></textarea>
                            </div>
                            <ErrorMessage
                                    errors={errors}
                                    name="wishMessage"
                                    render={({ message }) => <p className="text-[#b90e0a] mt-2"><Emoji symbol="❗" ></Emoji> {message}</p>}
                                />
                            {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences wishing yourself.</p> */}
                        </div>

                        {/* 
                        
                        - [ ] ต่างหูอะมีไว้ประดับหู แต่ยูมีไว้ประดับใจ (earrings)
                        - [ ] ดอกทานตะวันที่ว่าสดใสก็ยังสดใสไม่เท่าเทอ (sunflower)
                        - [ ] หน้ากากก็ปิดความหล่อ(แปลก)ของเธอไม่มิดหรอกนะ (kpMask)
                        - [/] ปกติแพะร้องแบะ ๆๆๆ แต่แพะส้มร้อง โสด ๆๆๆ (orangeGoat)
                        - [/] ไม่ใช่ส้มก็ร่วงได้เพราะผมคือทุเรียน (orangeDurian)
                        - [ ] เมเปิ้ลเมใจแล้วเมื่อไหร่เคพีเขาจะมีหวานใจสักที (maple)
 
                        */}

                        <div className="col-span-full">
                            <fieldset >
                                <legend className="text-2xl font-semibold leading-6 text-gray-900 flex">เลือกลายการ์ด</legend>

                                <div className="ml-4 mt-4 space-y-4">
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="orangeGoat"
                                        
                                            {...register("cardPattern", {required: " \"เลือกซักอย่างนึงดิ๊ โธ่\" - คัมภีร์ไม่ได้กล่าว"})}
                                            value="orangeGoat"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="orangeGoat" className="block text-lg font-medium leading-6 text-gray-900">
                                            ปกติแพะร้องแบะ ๆๆๆ แต่แพะส้มร้อง โสด ๆๆๆ
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="orangeDurian"
                                            {...register("cardPattern")}
                                            type="radio"
                                            value="orangeDurian"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="orangeDurian" className="block text-lg font-medium leading-6 text-gray-900">
                                        ไม่ใช่ส้มก็ร่วงได้เพราะผมคือสายรุ้ง
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="maple"
                                            {...register("cardPattern",  )}
                                            type="radio"
                                            value="maple"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="maple" className="block text-lg font-medium leading-6 text-gray-900">
                                            เมเปิ้ลเมใจแล้วเมื่อไหร่เคพีเขาจะมีหวานใจสักที 
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="kpMask"
                                            {...register("cardPattern",  )}
                                            type="radio"
                                            value="kpMask"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="kpMask" className="block text-lg font-medium leading-6 text-gray-900">
                                            หน้ากากก็ปิดความหล่อ(แปลก)ของเธอไม่มิดหรอกนะ
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="sunflower"
                                            {...register("cardPattern",  )}
                                            type="radio"
                                            value="sunflower"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="sunflower" className="block text-lg font-medium leading-6 text-gray-900">
                                        ดอกทานตะวันที่ว่าสดใสก็ยังสดใสไม่เท่าเทอ
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="earrings"
                                            {...register("cardPattern",  )}
                                            type="radio"
                                            value="earrings"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        
                                        <label htmlFor="earrings" className="block text-lg font-medium leading-6 text-gray-900">
                                            ต่างหูอะมีไว้ประดับหู แต่ยูมีไว้ประดับใจ
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            {/* {errors. && <p>{errors.username.message}</p>} */}
                            <ErrorMessage
                                errors={errors}
                                name="cardPattern"
                                render={({ message }) => <p className="text-[#b90e0a] mt-2"><Emoji symbol="❗" ></Emoji> {message}</p>}
                            />

                        </div>

                      

                        {/* <div className="col-span-full">
                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                    </svg>
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only"></input>
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div> */}
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-x-6">
                <div>
                <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                        <input id="consent" {...register("isConsentPublish", {required: "กรุณายินยอมให้เผยแพร่ด้วยนะคร้าบบบบบ"})} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange"></input>
                    </div>
                    <div className="text-sm">
                        <label htmlFor="consent"  className="font-medium text-lg text-gray-900">ยินยอมให้เผยแพร่คำอวยพรนี้สู่สาธารณะ</label>
                        {/* <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p> */}
                    </div>
                   
                </div> 
                <ErrorMessage
                        errors={errors}
                        name="isConsentPublish"
                        render={({ message }) => <p className="text-[#b90e0a] mt-2"><Emoji symbol="🙏" ></Emoji> {message}</p>}
                    />
                </div>
               
               
            </div> 
            <div className="flex items-center gap-x-6 mt-8 justify-end">
                    <button type="reset" className="text-xl font-semibold leading-6 text-gray-900">เคลียร์ฟอร์ม</button>
                    <button type="submit" 
                    className="rounded-md bg-orange-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">ส่งคำอวยพร</button>
                </div>
        </form>
    )
}