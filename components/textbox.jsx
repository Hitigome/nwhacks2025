import styles from './textbox.module.css'

function Textbox() {
    return(
        <div className={styles.textbox}>
            <textarea className={styles.input} defaultValue="Enter your notes here:"/>
        </div>
    );
}

export default Textbox;