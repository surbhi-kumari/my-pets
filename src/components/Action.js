import Filter from './Filter';
import Sort from "./Sort";
export default function Action({filterType, setFilterType, setSortBy, orderBy}){
    return <>
        <Filter filterType={filterType} setFilterType={setFilterType}/>
        <Sort setSortBy={setSortBy} orderBy={orderBy}/>
    </>
}