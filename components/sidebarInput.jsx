const SidebarInput = ({newSubject, setNewSubject, addSubject}) => {
    return(
        <div className="subject-input">
            <input type="text" value={newSubject} onChange={(e) => setNewSubject(e.target.value)} placeholder="enter new subject"/>
            <button onClick={addSubject}>Add</button>
        </div>
    );
}

export default SidebarInput;