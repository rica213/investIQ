import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import '../styles/App.css';
import NoMatch from '../pages/NoMatch';
import Layout from './Layout';
import Profile from '../pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
