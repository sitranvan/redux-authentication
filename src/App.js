import { useSnackbar, withSnackbar } from 'notistack';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './components/Error';
import Header from './components/Header';
import Home from './components/Home';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import CreateListFeature from './features/CreateProducts';
import TodoFeature from './features/Todo';

import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/todo' element={<TodoFeature />}></Route>
        <Route path='/album' element={<AlbumFeature />}></Route>
        <Route path='/create-products' element={< CreateListFeature />}></Route>
        <Route path='/counter' element={< CounterFeature />}></Route>
        <Route path='*' element={< Error />}></Route>
      </Routes>
      <ToastContainer
        position="top-left" theme='light' autoClose='1000'
        hideProgressBar={true} pauseOnHover={false}
      />
    </div>
  );
}


export default withSnackbar(App);
