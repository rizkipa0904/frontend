/** Styles */
import styles from "./style.module.css";

const Button = ({ text, type, onClick }) => {
    return (
        <button type={type} className={styles.btn} onClick={onClick}>{text}</button>
    );
};

export default Button;