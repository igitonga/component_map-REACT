import logo from './logo.svg';
import './App.css';
import DestinationCard from './components/DestinationCard';
import dataSet from './components/dataSet'; 

const destination = dataSet.map(item => {
  return(
    <DestinationCard data = {item}/>
  )
})
function App() {
  return (
    <div className="App pl-5 pr-5">
      {destination}
    </div>
  );
}

export default App;
