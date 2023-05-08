import Data from "../Data/Data";
import IApi from "../../shared/Types/IApi";
import './Home.css';
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const Home = ({ dados }: IApi) => {

    return (
        <div className="container">
            <Breadcrumbs />
            <h1>Home</h1>
            <Data dados={dados} />
        </div>
    )
}

export default Home