import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Posts = () => {
  return (
    <div className="">
      <div className="posts">
        <p style={{fontSize: '22px'}}>Posts</p>
        <div className="cta">
          <Link to="/posts/createpost">Create a New Post</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Posts