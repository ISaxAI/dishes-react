import {Link} from "react-router-dom";

function Header() {
    return (
        <nav className="blue lighten-3">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                    React Shop
                </Link>

                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="https://github.com/ISaxAI/react-shop"
                              target="_blank"
                              rel="noreferrer">
                            Repo

                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export {Header};