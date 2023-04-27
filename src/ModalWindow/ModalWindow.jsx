import React, {useState} from "react";
import ModalWinStyle from './ModalWindow.module.css'
import closeIcon from '../icons/closeButton/1x/twotone_close_black_24dp.png'
export function ModalWindow(props){
    const [isActive,setIsActive] = useState(false)
    const [textAreaValue,setTextAreaValue] = useState('asd')
    const handle = (data)=> {
        console.log(data)
    }
    return(<>{props.isActive &&

        <div className={ModalWinStyle.ModalMainStyle}>
            <div className={ModalWinStyle.Window}>
                <h3>Write new TODO</h3>
                <div className={ModalWinStyle.CloseButton} onClick={props.isActivepdate(props.isActive)}><img src={closeIcon} /></div>
                <textarea onChange={(e) =>setTextAreaValue(e.target.value)} value={textAreaValue}/>

                <div>
                    <button onClick={() => props.addNewLi(textAreaValue)}>confirm</button>
                </div>
            </div>

        </div>
    }
    </>)
}