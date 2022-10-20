import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/pages/About'
import Users from './components/pages/Users'
import Posts from './components/pages/Posts'
import CreatePost from './components/pages/CreatePost'
import DeletePost from './components/pages/DeletePost'
import Layout from './components/pages/Layout'
import Error404 from './components/pages/Error404'



function App() {


  return (
    <>
      <Routes>
        <Route path="/">
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="users" element={<Users />} />
            <Route path="posts" element={<Posts />}>
              <Route path=":createpost" element={<CreatePost />} />
              <Route path=":deletepost" element={<DeletePost />} />
            </Route>
          </Route>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
