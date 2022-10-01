import axios from 'axios';
import React, {useState,useEffect} from 'react';
import './App.css';
import Dogs from './components/Dogs';
import Search from './components/Search';

function App() {
  const [dogsData, setDogsData] = useState({
    s : '',
    results: [],

  })
  const api_key = 'live_1eMZRFgv9AHUnwxebKFUeukLhdoGH9peUarQfbkjWLDrzv28XE6rIM8VG5tdaa0a'
  // const url = `https://api.thedogapi.com/v1/breeds/?apikey=${api_key}`
  const url = `https://api.thedogapi.com/v1/breeds`


  useEffect(() => {
     const fetchDogs = async () =>{
       const res = await axios.get(`https://api.thedogapi.com/v1/breeds/?apikey=${api_key}`)
       console.log(res)
       setDogsData({results : res.data})
     }
     fetchDogs()
  }, [])

  const searchHandler = async (e) =>{  
    axios(url+ "&s=" + dogsData.s)
    .then(( { data} )=>{
      let results = data.Search
        setDogsData(prevState=>{
          return { ...prevState , results : results}
        });
    });
  
  }

  const handleInput = (e) =>{
    let s = e.target.value
    setDogsData(prevState=>{
      return {...prevState, s: s}
    });
    
  }
  
  console.log(dogsData)

  return (
    <div className="App">
      <header>
        <h1>Dog Search App</h1>
      </header>
     <main>
     <Search searchHandler = {searchHandler} handleInput={handleInput}/>
     <Dogs dogs = {dogsData.results}/>
     </main>
    </div>
  );
}

export default App;
