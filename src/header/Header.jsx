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
            localData.push({txt: text,value: text})
        }
        setLi(localData)
        console.log(localData)

    }
    const UpdateToDoValue = (value) =>{
        setIstActive(!value)

    }
    return(<>
        <div className={HeaderStyle.Header} onClick={() => handle(isActive)}>
            <h1>Click to add new</h1>

        </div>
            <div>
                {li.map((li,index)=>(
                    <List key={index} value={li.txt} />
                ))}
            </div>
            <ModalWindow isActive={isActive} isActivepdate={() => handle} addNewLi={addNewLi}/>
        </>
    );
}