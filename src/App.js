import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'

function App() {

  const[allData, setAllData] = useState({
    city:'',
    country:'',
    temperature:''
  })
  
  const [search, setSearch] = useState('')

  useEffect(() => {

  })

  const handleSubmit = (event) => {
    event.preventDefault()

  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const fetchData = async (city) => {
    try{
    const APIKEY = 'd96a55bc03f6c5e2500fd29b1a23a9b7'
    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
    await setAllData({
      city: result.data.name,
      country: result.data.sys.name,
      temperature: result.data.main.temp
    })
  } catch (e) {
    console.log('Api not loaded correctly')
  }
}

  return(
    <main>
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input 
        value={search}
        type='text'
        name='city'
        placeholder="City Name"
        onChange={handleChange}
        />
        <button for='city'>Search</button>
      </form>
      <section>
        
      </section>
    </div>
    </main>
  )
}

export default App;