import React from "react";
import list from './List.module.css'
 export function List(props){
     return (<>
         <div className={list.mainList}>
             <ol>
                 {props.value.map((text, index)=> (
                     <li className={list.forLi} key={index}>
                         {text}
                         <button onClick={props.delete(index)}>X</button>
                     </li>
                 ))}
             </ol>
         </div>
         </>)
 }