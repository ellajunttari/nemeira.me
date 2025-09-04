import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import About from './pages/About';
import Art from './pages/Art';
import Blog from './pages/Blog';
import Bookshelf from './pages/Bookshelf';
import Guestbook from './pages/Guestbook';
import Contact from './pages/Contact';
import Wardrobe from './pages/Wardrobe'


function Menu({}) {
  const items = [
    { name: 'About', component: About },
    { name: 'Art', component: Art },
    { name: 'Bookshelf', component: Bookshelf },
    { name: 'Wardrobe', component: Wardrobe},
    { name: 'Blog', component: Blog },
    { name: 'Guestbook', component: Guestbook },
    { name: 'Contact', component: Contact }
  ];
  return (
    <>
      <Router>
        <nav className="menu">
          <ul className="pages">
            {items.map((item) => (
              <li key={item}>
                <Link to={`/${item.name.toLowerCase()}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          {items.map((item) => (
            <Route path={`/${item.name.toLowerCase()}`} element={<item.component />} />
          ))}
          {/* optional home route */}
          {/*<Route path="/" element={<About />} />*/}
        </Routes>
      </Router>
    </>
  );
}

export default function Page({}) {
  return (
    <div className="game">
      <div className="banner"></div>
      <Menu />
    </div>
  );
}


