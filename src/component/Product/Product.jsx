/* eslint-disable react/prop-types */

import { useState } from 'react'
import style from './Product.module.css'

function Product({item,setCount,count}) {
  const[counts,setCounts]= useState(0);
    const handelAdd = ()=>{

        setCount(pre=>pre + 1)
        setCounts(pre=>pre + 1)
     
    }
    const handelRemove = ()=>{
      if(count > 0){
        setCount(pre=>pre - 1)

      }
      setCounts(pre=>pre - 1)

  
     
    }
  return (
    <>
    <div  className={style.productCardCon}>

    <div  className={style.productCart} >

    <div  style={{    position: 'relative',display: 'block'}}>
      
    <div style={{cursor:'pointer'}}>
        <img src={item.src} alt="" />
    </div>
    {counts > 0 ?  <div className={style.addTocart}>
        <div  style={{position: 'relative',width: '100%',height: '100%'}}>
        <button   onClick={handelAdd} className={style.addBtn}>
        <span   role="img" aria-label="plus" ><svg viewBox="64 64 896 896" focusable="false" data-icon="plus" width="1em" height="1em" fill="currentColor" aria-hidden="true"><defs><style></style></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path></svg></span>
        </button>
       <div  className={style.count}>{counts}</div> 
        

        <button onClick={handelRemove} className={style.removeBtn}>
        <span role="img" aria-label="delete" ><svg viewBox="64 64 896 896" focusable="false" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path></svg></span>
        </button>
        </div>
     
    </div>:
    <div style={{width:'0px',left:'40%'}} className={style.addTocart}>
    <div  style={{position: 'relative',width: '100%',height: '100%'}}>
    <button   onClick={handelAdd} className={style.addBtn}>
    <span   role="img" aria-label="plus" ><svg viewBox="64 64 896 896" focusable="false" data-icon="plus" width="1em" height="1em" fill="currentColor" aria-hidden="true"><defs><style></style></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path></svg></span>
    </button>
    </div>
 
</div>
    
    }
   
    </div>
  
</div>

<div  className={style.discription}>
    <div className={style.cardTitle}>
      {item.name}
    </div>
    <div className={style.cardTitle}>
        <div style={{fontWeight:'bold'}}>
            {item.price} sp
        </div>
    </div>

</div>
</div>
</>
  )
}

export default Product