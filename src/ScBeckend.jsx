import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';


const ScBeckend = () => {
const [data,setdata] = useState([])

const bekend = async () =>{
    try {
        const res = await axios.get('https://30fd32de73b188f8.mokky.dev/yandex')
        setdata(res.data)
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
    bekend()
},[])

    return (
        <div className='grid grid-cols-4'>
            {
                data.map((v)=>{
                    return(
                        <div>
                            <img src={v.ims} className='' alt="eror 404 sorry" />
                            <img src={v.img1} className='w-[280px] rounded-[30px] h-[350px] object-contain' alt="eror 404 sorry" />
                            <h4 className='line-clamp-2 w-[220px] leading-5 font-[700]'>{v.titel}</h4>
                            <div className='flex items-end gap-1'>
                            <p className='noselect text-[23px] text-[#006933] font-[700]'>{v.price}</p>
                            <del className='font-[500] text-[#00000083] noselect'>{v.akksiya}</del>
                            </div>
                        </div>
                    )        
                })
            }
        </div>
    );
}

export default ScBeckend