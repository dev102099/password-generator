import Input from "./inputcopy";
import { useState } from "react";
function Range(){
    let [numisallowed,setnumState]=useState(false)
    let [charisallowed,setcharState]=useState(false)
    const [lenght,setlenght]=useState(6);

    return(
        <>
        
<Input Lenght={lenght} numisallowed= {numisallowed} charisallowed= {charisallowed} ></Input>
        <div style={{display:'flex',flex:'0 0 auto'}}>
        <input type="range" min={5} max={50} onChange={(e)=>setlenght(e.target.value)} className="range" style={{margin:'4%',minWidth:'20%',height:'50%',flexGrow: '0'}}></input>
        <p style={{fontSize:'80%',margin:'4% 2% 2% 2%',width:'75px',color:'#F2613F'}}><b>Lenght: {lenght}</b></p>
        <input type="checkbox" id="1"  onChange={()=>{setnumState(!numisallowed)}} style={{marginLeft:'5%'}}></input>
        <label htmlFor="1" style={{fontSize:'80%',margin:'4% 0 0 1%',color:'#F2613F'}}><b>Numbers</b></label>
        <input type="checkbox" id="2" style={{marginLeft:'5%'}} onChange={()=>setcharState(!charisallowed)}></input>
        <label htmlFor="2" style={{fontSize:'80%',margin:'4% 0 0 1%',color:'#F2613F'}}><b>Special CH</b></label>
        
        </div>
        </>
    )
}
export default Range 