import styles from './sidebar.module.css'

const SidebarInput = ({newSubject, setNewSubject, addSubject}) => {
    return(
        <div>
            <input className={styles.subjectInput} type="text" value={newSubject} onChange={(e) => setNewSubject(e.target.value)} placeholder="enter new subject"/>
            <button className={styles.addButton} onClick={addSubject}>
                <img src="/add.svg" height={15} width={15} alt="add button"/>
            </button>
        </div>
    );
}

export default SidebarInput;