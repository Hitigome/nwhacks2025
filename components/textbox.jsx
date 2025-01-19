import styles from './textbox.module.css'

function Textbox() {
    return(
        <div className={styles.textbox}>
            <p className={styles.p}>Enter your notes here:</p>
            <textarea className={styles.input} defaultValue=""/>
        </div>
    );
}

export default Textbox;