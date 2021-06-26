export default function SearchBar({onChange, value}){
    return <input className="search-text" type="search" value={value} placeholder="Search pets" onChange={(event) => onChange(event.target.value)}/>
}