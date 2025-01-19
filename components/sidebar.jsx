import SidebarItem from "./sidebarItem.jsx";

const Sidebar = ({subjects, removeSubject}) => {
    return (
        <ul>
            {subjects.map(subject => (
                <SidebarItem key={subject.id} id={subject.id} name={subject.name} removeSubject={removeSubject}/>
            ))}
        </ul>
    )
}

export default Sidebar;