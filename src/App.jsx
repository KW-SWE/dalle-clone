import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        {/* OpenAI logo on the left of the navbar, links to homepage which is "/" */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>

        {/* Create button on the right of the navbar, links to homepage which is "/CreatePost" page */}
        <Link
          to="/CreatePost"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>
      {/* for main: the calc portion calculates the 100vh (entire page) - 73px (the size of the navbar) to be the grey area */}
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
