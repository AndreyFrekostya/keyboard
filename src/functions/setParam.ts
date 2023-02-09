export const setParams=(buttonkey:string, index:number, setWidth:(a:string)=>void, setColor:(b:string)=>void):void=>{
    if(buttonkey=='BACK' || buttonkey=='TAB'){
        setWidth('74px')
      }if( buttonkey=='CAPS' || buttonkey=='ENTER'){
        setWidth('111px')
      }if(buttonkey=='SHIFT'){
        setWidth('154px')
      }
      if(index==0 || index==1 || index>9){
        setColor('crimson')
      }
      if(index==2||index==9){
        setColor('coral')
      }if(index==3 || index==8){
        setColor('darkorange')
      }if(index==4 || index==7){
        setColor('gold')
      }if(index==5 || index==6){
        setColor('khaki')
      }
}
