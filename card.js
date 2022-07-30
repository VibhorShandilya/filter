const Card = (props)=> 
{
    return(
<>
<div className="row">
{props.data.map((x)=>{
    return(
    <div className="card col-sm-3 col-md-3  col-lg-4 col-xl-4 col-xxl-4">
      <img  src={x.url} alt="Cardcap"/>
      <div className="card-body">
        <h5 className="card-title">{x.Name}</h5>
        <p className="card-text">{x.location}</p>
        <p className="card-text">{x.Rent}</p>
        <p className="card-text">{x.time}</p>
    </div>
    </div>
   
    )
    
})}</div></>)}

export default Card