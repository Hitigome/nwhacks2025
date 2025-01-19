import styles from './textbox.module.css'

function Textbox() {
    return(
        <div className={styles.textbox}>
            <div>
                <p className={styles.p}>Enter your notes here:</p>
                <textarea className={styles.input} defaultValue=""/>
            </div>
            <button className={styles.button}>Summarize</button>
        </div>
    );
}

export default Textbox;