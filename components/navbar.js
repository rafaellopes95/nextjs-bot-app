import { Auth } from "aws-amplify";
import Link from "next/link";

const signOutHandler = async () => {
    try {
        await Auth.signOut();
    } catch (err) {
        console.log(err);
    }
}

export default function Navbar() {
    return (
        <nav className="navbar w-100 navbar-expand navbar-dark bg-dark mb-4">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Profile App
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/edit-user">
                                <a className="nav-link">Edit User</a>
                            </Link>
                        </li>
                        <button
                            className="btn btn-danger"
                            type="button"
                            onClick={signOutHandler}
                        >   
                            Sign out
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
}