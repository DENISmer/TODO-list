import React from "react";
import list from './List.module.css'
import closeButton from '../icons/closeButton/1x/twotone_close_black_24dp.png'

 export function List(props){
     return (<>
         <div className={list.mainList}>
             <ol>
                 {props.value.map((text, index)=> (
                     <li className={list.forLi} key={index}>
                         {`${index + 1}) ${text}`}
                         <div className={list.closeButtonForLi} onClick={() => props.delete(index)}><img src={closeButton}/> </div>
                     </li>
                 ))}
             </ol>
         </div>
         </>)
 }