
export default function cards(props) {
    return <div className="con">
        <div
           style={{
               backgroundImage:`url(${props.img})`,
               width: "300px",
               height: "400px",
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               backgroundPosition:"center",
               borderRadius:"15px",
           }}
></div>

        <div className="tit">    
            <h1>{props.title} </h1>
            <h2>
                    {/* <i className="far fa-star" style={{color:"gold"}} ></i> */}
                *{props.rev}</h2> 
      
        </div>
          <h3>{ props.desc}</h3>
         <h3 className="pp">{props.price}</h3>

    </div>
}