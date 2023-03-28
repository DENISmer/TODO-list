import React, {useState} from "react";
import ModalWinStyle from './ModalWindow.module.css'
import closeIcon from '../icons/closeButton/1x/twotone_close_black_24dp.png'
export function ModalWindow(props){
    const [isActive,setIsActive] = useState(false)


    return(<>{props.isActive &&

        <div className={ModalWinStyle.ModalMainStyle}>
            <div className={ModalWinStyle.Window}>
                <h3>Write new TODO</h3>
                <div className={ModalWinStyle.CloseButton} onClick={props.isActivepdate(props.isActive)}><img src={closeIcon} /></div>
                <textarea />

                <div>
                    <button>confirm</button>
                </div>
            </div>

        </div>
    }
    </>)
}