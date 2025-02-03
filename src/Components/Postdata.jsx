import React from 'react'
import post1 from '../assets/post1.png';
import post2 from '../assets/post2.jpg';
import post3 from '../assets/post3.jpg';
const Postdata = () => {
  
    const pvtdata=[
     
      {id:1,title:"Post"},
      {id:2,title:"Vibes"},
      {id:3,title:"Tag"}


    ]

    return (
    <div className='container'>
     <div style={{display:"flex",flexDirection:"column",background:"#60606017"}}>
      <div className="mt-3" style={{display:"flex",color:"#ffff",fontFamily:"roboto",fontWeight:"400"}}>
          {
            pvtdata.map(data=>(
             <ul key={data.id}>
               <li>{data.title}<span className='ms-4'>|</span></li> 
             </ul>  
           
            ))
          }
        </div>


        
       <div style={{width:"100%",display:"flex"}}>
       
         <div style={{width:"33.33%"}}>
            <img src={post1} width="287px" height="495px" style={{
                borderBottomRightRadius:"30px",
                borderBottomLeftRadius:"30px",
                borderTopRightRadius:"30px",
                borderTopLeftRadius:"30px"
               }}/>
            
          </div>
          <div style={{width:"33.33%"}}>
          
          <img src={post2} width="287px" height="495px" style={{
                borderBottomRightRadius:"30px",
                borderBottomLeftRadius:"30px",
                borderTopRightRadius:"30px",
                borderTopLeftRadius:"30px"
               }}/>
          </div>
          <div style={{width:"33.33%"}}>
          <img src={post3} width="287px" height="495px" style={{
                borderBottomRightRadius:"30px",
                borderBottomLeftRadius:"30px",
                borderTopRightRadius:"30px",
                borderTopLeftRadius:"30px"
               }}/>
          </div>
         
       </div>
       </div>
    </div>
  )
}

export default Postdata