import React from "react"
import { Link } from "react-router-dom";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Button from "../../components/Button";

/** Images */
import not_found_illustration from "../../assets/img/not_found_illustration.gif";


const NotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.error404}>
                <img src={not_found_illustration} alt="Not Found Illustration" />
                <h1 className={styles.text}>Error 404 : Page not found</h1>
            </div>
            <Link to="/dashboard" className={styles.link}>
                <Button text="Back to Dashboard" className={styles.btn} />
            </Link>
        </div>
    );
};

export default NotFound;