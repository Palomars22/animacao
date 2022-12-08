
import './App.css';


import Banner from './components/Banner/Banner';
import Produto from './components/Content/Produto';
import Cadastro from './components/Form/FormRegister';

import Template from './templates/Default'
function App() {
  return (
    <Template>
     <Banner/>
      <Produto/>
      <Cadastro/>
    </Template>
  );
}

export default App;
