import './App.css';
import MyFooter from './Components/MyFooter';
import MyNav from './Components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/AllTheBooks';

function App() {
  return (
    <>
     <div className="App">
       <MyNav />
       <Welcome />
       <AllTheBooks />
       <MyFooter />
     </div>
    </>
  );
}

export default App;
