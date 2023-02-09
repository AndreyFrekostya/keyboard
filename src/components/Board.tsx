import React,{useState, useEffect, FC} from 'react'
import Key from './Key'
interface IProps{
  neededKey:string
  hitKey:string
}
interface IAllKeys{
  firstRow:string[],
  secondRow:string[]
  thirdRow:string[]
  fourthRow:string[]
}
const Board: React.FC<IProps> = ({neededKey, hitKey}) => {
  const allkeys: IAllKeys={firstRow:['ESC','1','2','3','4','5','6','7','8','9','0','-','+','BACK'],
  secondRow:['TAB','Q','W','E','R','T','Y','U','I','O','P','[',']','/'],
  thirdRow:['CAPS','A','S','D','F','G','H','J','K','L',':','"','ENTER'],
  fourthRow:['SHIFT','Z','X','C','V','B','N','M',',','.',';','SHIFT']}
  return (
    <div className='flex gap-5 max-w-1/3 flex-wrap'>
      <div  className='flex gap-5 flex-wrap'>
        {allkeys.firstRow.map((keyk,index)=>(
          <Key buttonkey={keyk} key={index} index={index} needKey={neededKey===keyk ? keyk : null} hitKey={hitKey===keyk ? keyk : null}/>
        ))}
        {allkeys.secondRow.map((keyk,index)=>(
          <Key buttonkey={keyk} key={allkeys.firstRow.length+index} index={index} needKey={neededKey===keyk ? keyk : null} hitKey={hitKey===keyk ? keyk : null}/>
        ))}
        {allkeys.thirdRow.map((keyk,index)=>(
          <Key buttonkey={keyk} key={allkeys.firstRow.length+allkeys.secondRow.length+index} index={index} needKey={neededKey===keyk ? keyk : null} hitKey={hitKey===keyk ? keyk : null}/>
        ))}
        {allkeys.fourthRow.map((keyk,index)=>(
          <Key buttonkey={keyk} key={allkeys.firstRow.length+allkeys.secondRow.length+index+allkeys.fourthRow.length} index={index} needKey={neededKey===keyk ? keyk : null} hitKey={hitKey===keyk ? keyk : null}/>
        ))}
      </div>
    </div>
  )
}

export default Board