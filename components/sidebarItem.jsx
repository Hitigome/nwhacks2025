const SidebarItem = ({ id, name, removeSubject}) => {
    return (
        <li style={{marginBottom: '5px'}}>
            {name}
            <img 
                src="/x.svg"
                alt="delete"
                onClick={() => removeSubject(id)}
                style={{marginLeft: '10px',
                    width: '16px', 
                    height: '16px',
                    cursor: 'pointer'
                }}
            />
        </li>
    )
}

export default SidebarItem;