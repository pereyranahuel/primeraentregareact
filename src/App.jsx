import Navbar from './components/navbar/Navbar'


import './App.css';
import ItemListContainer from './components/itemList/ItemListContainer';

function App() {
  const mensaje = 'Bienvenido a mi tienda';
  return (
    <>
      <Navbar />
      <div>
      
        <ItemListContainer mensaje={mensaje} />
      </div>
    </>
  )
}

export default App;
