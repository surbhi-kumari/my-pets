import FilterBox from "./FilterBox";
import {FILTER_TYPES} from "../constants";
function Filter({filterType, setFilterType}){
    const handleOnClickFilter = (selectedFilter) => {
      if(filterType == selectedFilter){
        setFilterType(-1);
      } else {
        setFilterType(selectedFilter);
      }
    }
    return <div className="btn">
    <FilterBox selected={filterType == FILTER_TYPES.before} onClick={()=>handleOnClickFilter(FILTER_TYPES.before)} text={"More than 1 month Old"}/>
    <FilterBox selected={filterType == FILTER_TYPES.after} onClick={()=>handleOnClickFilter(FILTER_TYPES.after)} text={"Less than 1 month Old"}/>
  </div>
}

export default Filter;