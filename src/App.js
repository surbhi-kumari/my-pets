import React, {useState, useEffect} from 'react';
import './App.css';
import './main.css';
import SearchBar from './components/SearchBar';
import PetList from './components/PetList';
import useDebounce from './components/hooks/useDebounce';
import Action from "./components/Action";
import Pagination from "./components/Pagination";

function App() {
  const [pets, setPets] = useState([]);
  const [searchText, setSearchText] = useState("");
  const debouncedSearchTerm = useDebounce(searchText, 500);
  const [filterType, setFilterType] = useState(-1);
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("asc");
  const [page, setPage] = useState(1);
  const petsFilter = async (name, sortBy, orderBy, page) => {
    let url = `https://60d075407de0b20017108b89.mockapi.io/api/v1/animals?page=${page ? page : 1}&limit=10`;
    if(name){
      url += `&name=${name}`;
    }
    if(sortBy){
      url += `&sortBy=${sortBy}&orderBy=${orderBy ? orderBy : "asc"}`;
    }
    const petsApi = await fetch(url);
    const petsData = await petsApi.json();
    console.log(petsData);
    setPets(petsData);
  };

  useEffect(() => {
    petsFilter(debouncedSearchTerm);
  }, [debouncedSearchTerm]);
  
  useEffect(() => {
    petsFilter();
  }, []);

  useEffect(() => {
    petsFilter(debouncedSearchTerm, sortBy, orderBy);
  },[orderBy]);

  useEffect(()=>{
    petsFilter(debouncedSearchTerm, sortBy, orderBy, page);
  }, [page])

  const setSort = (event) => {
    console.log(event.target.getAttribute('name'));
    setSortBy(event.target.getAttribute('name'));
    setOrderBy(orderBy == "asc" ? "desc" : "asc");
  }


  return (
    <div className="App">
      <h1>My Pets</h1>
      <SearchBar onChange={setSearchText} value={searchText}/>
      <Action filterType={filterType} setFilterType={setFilterType} orderBy={orderBy} setSortBy={setSort}/>
      <PetList pets={pets} searchText={searchText} filterType={filterType}/>
      <Pagination page={page} setPage={setPage} isNext={pets.length > 0}/>
    </div>
  );
}

export default App;
