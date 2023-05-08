import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {

    const navigate = useNavigate()

    return (
        <section className={styles.notfound}>
            <div>
                <h1>Ops, página não encontrada</h1>
                <p>Por favor, retorne a página anterior</p>
                <Button onClick={() => navigate(-1)} variant="contained">{ '< Voltar' }</Button>
            </div>
        </section>
    )
}

export default PageNotFound;