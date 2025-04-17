import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
// import {TodosItem} from "./MyComponents/TodosItem";
import {Footer} from "./MyComponents/Footer";

function App() {
  return (
    <>
    <Header title="My Todos List"/>
    <Todos/>
    <Footer/>
    </>
  );
}

export default App;