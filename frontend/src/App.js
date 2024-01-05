import './App.css';
import Header from './Header';
import Post from './Post';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route index element={
        <main>
          <Header />
          <Post />
          <Post />
          <Post />
        </main>
      } />
      <Route path={'/login'} element={
         <main>
          <Header />
          <div>Login PAGE</div>
        </main>
      } />      
      <Route path={'/register'} element={
                <main>
          <Header />
          <div>REGISTER PAGE</div>
        </main>
      } />            
    </Routes>
    </>
  );
}

export default App;
