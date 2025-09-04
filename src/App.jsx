import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import AdminPanel from './pages/AdminPanel';
import PublickPage from './pages/PublickPage';

function App() {
  const [news, setNews] = useState([])

  const handleAdd = (item) => setNews((prev) => [item, ...prev])
  const handleDelete = (id) => setNews((prev) => prev.filter((item) => item.id !== id))
  const handleToggleHidden = (id) => setNews((prev) => 
    prev.map((item) => item.id === id ? {...item, hidden: !item.hidden} : item)
  )

  return (
    <BrowserRouter>
      <nav className='nav'>
        <Link to="/">Публичная страница</Link>
        <Link to='/admin'>Админ-панель</Link>
      </nav>

      <Routes>
        <Route path='/' element={< PublickPage news={news}/>}/>
        <Route 
          path='/admin'
          element={
            <AdminPanel
              news={news}
              handleAdd={handleAdd}
              handleDelete={handleDelete}
              handleToggleHidden={handleToggleHidden}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
