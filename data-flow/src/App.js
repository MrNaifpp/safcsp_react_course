import './App.css';
import { useState } from 'react';
import NameSearch from './component/name-search';
import UserList from './component/user-list';


function App() {
  
  const [search,setSearch] = useState("");

  return (
    <div className="App">
      <div className="App-header">
        <div style={{display:"flex",alignItems:"center"}}>
          <NameSearch  setSearchValue={(searchValue)=>setSearch(searchValue)} />
        </div>
        <div style={{display:"flex"}}>
          <UserList  searchName={search}/>
        </div>
      </div>
    </div>
  );
}

export default App;
