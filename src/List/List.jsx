import React, {useState} from "react";
import list from './List.module.css'
import closeButton from '../icons/closeButton/1x/twotone_close_black_24dp.png'

export function List(props){

    const [checked,setChecked] = useState([]);


     return (<>
         <div className={list.mainList}>
                 {props.value.map((text, index)=> (
                     <div className={list.blockText} id={text}>
                         <br/>
                         <img className={list.closeButtonForLi} onClick={() => {
                             props.delete(index)
                         }} src={closeButton}/>
                         <input id={"checkbox"+text} type={"checkbox"} checked={props.value[index].checked} onChange={()=> props.change(text.text,index,text.checked)}/>

                         <div className={text.checked ? list.onChecked : null}>{`${index + 1}) ${text.text}`}</div>
                     </div>
                 ))}
         </div>
         </>)
}