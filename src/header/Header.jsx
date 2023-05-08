import React, {useState} from "react";
import HeaderStyle from './Header.module.css'
import {ModalWindow} from "../ModalWindow/ModalWindow";
import {List} from "../List/List";

export function Header(){
    const [isActive,setIstActive] = useState(false);
    const [list,setList] = useState([])
    const [li,setLi] = useState([])
    let localData = [];
    const handle = (value) =>{
        setIstActive(!value)
        console.log(isActive)
    }
    const addNewLi = (text) =>{
        if(text !== undefined){
            li.push(text)
            setIstActive(!isActive)
        }

        console.log(li)
    }
    const deleteLi = (value) => {
        li.pop()
    }
    const UpdateToDoValue = (value) =>{
        setIstActive(!value)

    }
    return(<>
        <div className={HeaderStyle.Header} onClick={() => handle(isActive)}>
            <h1>Click to add new</h1>

        </div>
            <ModalWindow isActive={isActive} isActivepdate={() => handle} addNewLi={addNewLi}/>
        {!isActive && <List value={li} delete={() =>deleteLi}/>}

        </>
    );
}