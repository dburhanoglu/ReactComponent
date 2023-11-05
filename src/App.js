import logo from './logo.svg';
import './App.css';
import Mevsimler from './Mevsimler';
import Renkler from './Renkler';
import Shape from './Shape';
//tüm komponentleri buraya ekleyip ieriğindeki verileri ekliyoruz
function App() {
  return (
    <div className="App">
   <Mevsimler
     title = "Seasons"
     mevsimler = {["Summer","Spring","Winter"]}
   />
   <Renkler
   title="Colors Table"
   renkler ={["Pink","Blue","Purple"]} />
    </div>
  );
}

export default App;
