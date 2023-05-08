import { Link, useLocation } from "react-router-dom";
import './Breadcrumbs.css'

const Breadcrumbs = () => {

    const location = useLocation()

    let currentLink = ''

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')

    return (
        <div className="mt-4 d-flex justify-content-left">
            <Link to="/" className="breadcrumb fs-5">Home /</Link>
                {crumbs.map((crumb) => (
                    <Link to={currentLink} key={crumb} className="breadcrumb breadcrumb-active fs-5 mx-1">
                        {`${crumb} /`}
                    </Link>
                ))}
        </div>
    )
}

export default Breadcrumbs;