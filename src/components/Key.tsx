import React, { useEffect, useState } from 'react'
import { setParams } from '../functions/setParam'
interface IKey{
  buttonkey:string,
  index:number,
  needKey:string | null,
  hitKey:string | null,
}
const Key: React.FC<IKey> = ({buttonkey, index, needKey, hitKey}) => {
  const [width, setWidth]=useState<string>('')
  const [color, setColor]=useState<string>('')
  useEffect(() => {
    setParams(buttonkey,index,setWidth,setColor)
  }, [])
  
  return (
    <div className=' h-16 bg-red-400 flex justify-center items-center rounded-md' 
      style={{animation: needKey!==null ? ' vibrate-1 0.3s linear infinite both' : 
      hitKey!==null ? 'hit 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both' : '',
      backgroundColor: needKey!==null ? 'transparent' : color,
      border: `2px solid ${color}`,
      minWidth:width ? width : '64px'}} 
      key={index}>
      <h2 className='font-semibold text-lg' style={{color: needKey!==null ? color : 'black'}}>{buttonkey}</h2>
    </div>
  )
}

export default Key