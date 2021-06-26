function FilterBox({onClick, text, selected}){
    return <button className={`${selected ? "selected" : ""}`} onClick={onClick}>{text}</button>
}

export default FilterBox;