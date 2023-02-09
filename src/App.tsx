import React,{useEffect,useState} from 'react';
import Board from './components/Board';
import logo from './logo.svg';
function App() {
  const [keys, setKeys]=useState<string >("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  const [neededKey, setNeededKey]=useState<string>('')
  const [stack, setStack]=useState<string[]>([])
  const [hit, setHit]=useState<string>('')
  const getRandomKey=():void=>{
      let length: number=keys.length-1
      let splitKeys:string[]=keys.split('')
      let rand:number=Math.floor(Math.random() * (length - 0 + 1)) + 0;
      let sym=splitKeys.at(rand)
      setNeededKey(sym!)
      for( let i=0; i<length+1;i++){
        if (sym==splitKeys[i]){
          let newarr=splitKeys.splice(i,1)
          setKeys(splitKeys.join(''))
          stack.push(sym)
        }
      }
  }
  const checkKey=(e:any):void=>{
    if(e.code=='Key'+neededKey){
      getRandomKey()
    }else{
      let last:string=e.code.split('').pop()
      setHit('')
      setHit(last)
    }
  }
  useEffect(() => {
    getRandomKey()
  }, []);
  useEffect(() => {
    if(stack.length>2){
      let elem: string | undefined=stack.shift()
      let splitKeys:string[]=keys.split('')
      splitKeys.push(elem!)
      splitKeys.sort()
      setKeys(splitKeys.join(''))
    }
  }, [stack.join('')]);
  return ( 
    <div className="h-screen bg-black flex justify-center items-center" style={{padding: '0px 370px'}} onKeyUp={checkKey} tabIndex={-1}>
      <div>
        <h3 className='text-center text-white mb-10 text-2xl tracking-widest'>EYES ON THE SCREEN</h3>
          <Board neededKey={neededKey} hitKey={hit}/>
        <h3 className='text-center text-white mt-10 text-2xl tracking-widest'>HANDS ON THE KEYBOARD</h3>
      </div>
    </div>
  );
}

export default App;
