import { useState} from "react"
import Card from "./card"

const Body = (props) =>
{
const data = props.data
console.log(data)
//----------------------- Filtering Functions-------------------------------------------------------
const [Pass,setPass]=useState(data)
function filter(a)
{
if(a===1 )
{
  let Rent = props.data.filter((x)=> {return(x.Rent<10000)})
  setPass(Rent)
}
    

if(a===2)
{
  let location = props.data.filter((x)=> {return(x.location==="Jaipur")})
  setPass(location)
}
if(a===3)
{
  let time = props.data.filter((x)=> {return(x.time==="june")})
  setPass(time)
    
}
if(a===4)
{
  let type = props.data.filter((x)=> {return(x.type==="Rental")})

  setPass(type)
}

if(a===5)
{
  setPass(data)
}
}

//----------------------- Filtering-Functions-END-------------------------------------------------------

return(<>

<>
<div className = "row justify-content-center">
<button onClick={()=>filter(1)} className="mb-4   btn btn-primary col-sm-2 col-md-2  col-lg-2 col-xl-2 col-xxl-2">Rent less then 10,000</button>
<button onClick={ ()=>filter(2)} className="mb-4  ml-4 btn btn-info col-sm-2 col-md-2  col-lg-2 col-xl-2 col-xxl-2"> Jaipur</button>
<button onClick={()=>filter(3)} className="mb-4  btn btn-success col-sm-2 col-md-2  col-lg-2 col-xl-2 col-xxl-2">June</button>
<button onClick={ ()=>filter(4)} className="mb-4  btn btn-primary col-sm-2 col-md-2  col-lg-2 col-xl-2 col-xxl-2">Rental Properties</button>
<button onClick={ ()=>filter(5)} className="mb-4  btn btn-danger col-sm-2 col-md-2  col-lg-2 col-xl-2 col-xxl-2">Reset</button>
</div>  
 <Card data={Pass} key = {data.key}></Card> 
</>

</>)
}
export default Body
