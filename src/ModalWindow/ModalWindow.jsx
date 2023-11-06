import React, {useEffect, useState} from "react";
import ModalWinStyle from './ModalWindow.module.css'
import closeIcon from '../icons/closeButton/1x/twotone_close_black_24dp.png'

export function ModalWindow(props) {

    const [textAreaValue, setTextAreaValue] = useState('')

    const myFunction = () => {
        props.addNewLi(textAreaValue)
    };

    useEffect(() => {
        const keyDownHandler = event => {
            if (event.key === 'Enter') {
                event.preventDefault();
                myFunction();
            }
        };
        document.addEventListener('keyup', keyDownHandler);

        return () => {
            document.removeEventListener('keyup', keyDownHandler);
        };
    }, [textAreaValue]);



    useEffect(() => {//set null text-area value, when modal window is ready
        setTextAreaValue('')
    }, [props.isActive])


    return (<>{props.isActive &&

        <div className={ModalWinStyle.ModalMainStyle}>
            <div className={ModalWinStyle.Window}>
                <h3>Write new TODO</h3>

                <div className={ModalWinStyle.CloseButton} onClick={
                    props.isActiveupdate(props.isActive)
                }>

                    <img src={closeIcon}/>
                </div>

                <textarea placeholder={"text here :)"}
                          onChange={(e) => {
                    setTextAreaValue(e.target.value)
                    }
                }
                          value={textAreaValue}/>

                <div>

                    <button className={ModalWinStyle.ConfirmButton}
                            id={"confirm"}
                            onClick={() => props.addNewLi(textAreaValue)}>confirm
                    </button>
                    <button className={ModalWinStyle.ClearAllButton} onClick={() => setTextAreaValue('')}>clear all
                    </button>

                </div>
            </div>

        </div>
    }
    </>)
}
