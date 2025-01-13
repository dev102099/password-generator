
import { useState,useEffect,useCallback,useRef } from "react"
function Input({Lenght,numisallowed,charisallowed}){

const [Password,setPassword]=useState("Password")
const Ref=useRef(null)




//pass generation function

const passgen=useCallback(
  () => {
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let spchar = "!@#$%^&*`?";
      let p = ""; 
      let ran;
   
      for (let i = 1; i <= Lenght; i++) {
        
  
        if (numisallowed && !charisallowed) {
          let strnum = alphabets + numbers;
          ran = Math.floor(Math.random() * strnum.length);
          p = p + strnum[ran];
        } else if (charisallowed && !numisallowed) {
          let strnum2 = alphabets + spchar;
          ran = Math.floor(Math.random() * strnum2.length);
          p = p + strnum2[ran];
        } else if (charisallowed && numisallowed) {
          let strnum3 = alphabets + spchar + numbers;
          ran = Math.floor(Math.random() * strnum3.length);
          p = p + strnum3[ran];
        } else{
           ran = Math.floor(Math.random() * alphabets.length);
          p = p + alphabets[ran];
        }

      }

      setPassword(p); // Set the generated password
    
  },
  [Lenght,numisallowed,charisallowed,setPassword],
)

//Copy function
function clicktoCopy(){
Ref.current?.select()
window.navigator.clipboard.writeText(Password)
alert("Password copied!")
}



    
 //for triggring passgen on every lenght change

 useEffect(() => {
    passgen()
    
  }, [Lenght,numisallowed,charisallowed,passgen])

    return(
        <>
       
        <div className="inputgrps" style={{justifyContent:'center',padding:'5%'}}> 
            <input type="text" readOnly ref={Ref} value={Password} style={{width:'60%',margin:'2% 0% 2% 2%',borderRight:'0',border:'.5px solid black',borderBottomLeftRadius:'10px',borderTopLeftRadius:'10px'}} ></input>
        <button onClick={clicktoCopy}style={{backgroundColor:'#9B3922',color:'white',border:'.5px solid black',borderLeft:'none',marginLeft:'0',borderBottomRightRadius:'10px',borderTopRightRadius:'10px',padding:'2%',margin:'2% 0 2% 0%'}}>Copy</button>
        </div>
       
        </>
    )
}
export default Input