const Header = ({ color, close, onToggle }) => {
    return (
        <div className="header">
            <h1>Task Manager</h1>
            <button onClick={onToggle} style={{backgroundColor: color}} className="btn">{close}</button>
        </div>
    )
}

export default Header
