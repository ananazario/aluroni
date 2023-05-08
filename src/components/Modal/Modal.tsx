import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import './Modal.css';
import React from "react";

interface PropsModal {
    isClosed: React.Dispatch<React.SetStateAction<boolean>>;
    setIsClosed: React.Dispatch<React.SetStateAction<boolean>>;
    ref: React.RefObject<HTMLElement>;
}

const Modal = ({ isClosed, setIsClosed, ref } : PropsModal) => {

    return (
        <section ref={ref} className='modal'>
            <p className="phrase-modal">
                Continuar postando ou quer voltar à página inicial?
            </p>
            <div className="text-center mt-4">
                <Button onClick={() => setIsClosed(!isClosed)} variant="contained">
                    Continuar
                </Button>
                <Link to="/">
                    <Button variant="contained" className="mx-3">Voltar a tela inicial</Button>
                </Link>
            </div>
        </section>
    )
}

export default Modal