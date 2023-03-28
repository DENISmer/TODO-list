import React, {useState} from "react";
import HeaderStyle from './Header.module.css'
import {ModalWindow} from "../ModalWindow/ModalWindow";

export function Header(){
    const [isActive,setIstActive] = useState(false);
    const [list,setList] = useState([])
    const handle = (value) =>{
        setIstActive(!value)
        console.log(isActive)
    }
    const UpdateToDoValue = (value) =>{
        setIstActive(!value)

    }
    return(<>
        <div className={HeaderStyle.Header} onClick={() => handle(isActive)}>
            <h1>Click to add new</h1>
        </div>
            <ModalWindow isActive={isActive} isActivepdate={() => handle}/>
        </>
    );
}