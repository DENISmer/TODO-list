import React, {useEffect, useState} from "react";
import HeaderStyle from './Header.module.css'
import {ModalWindow} from "../ModalWindow/ModalWindow";
import {List} from "../List/List";

export function Header(){

    const [isActive,setIstActive] = useState(false);//modal window state

    const [li,setLi] = useState([]);// list array-state


    let localData = [];

    const handle = (value) =>{//open & close modal window
        setIstActive(!value);
    }


    const addNewLi = (text) =>{
        if(text !== undefined && text.length > 1){

            li.push({text: text,checked: false});
            setIstActive(!isActive);

        }
    }


    const deleteLi = (value) => {
        let localLiArr = [...li];
        if(value !== -1){

            localLiArr.splice(value,1);
            setLi(localLiArr);

        }
    }


    const changeLiChecked = (text,index,value) =>{//change boolean value of li by the checkbox in li array-state
        let localLiArr = [...li];
        if(value !== -1){

            localLiArr.splice(index,1,{text: text, checked: !value});
            setLi(localLiArr);

        }
    }


    return<>
        <div className={HeaderStyle.Header} onClick={() => handle(isActive)}>
            Click to add new
        </div>
            <ModalWindow isActive={isActive}
                         isActivepdate={() => handle}
                         addNewLi={addNewLi}
            />

            {!isActive &&
                <List value={li}
                      delete={deleteLi}
                      change={changeLiChecked}
                />}

        </>
}