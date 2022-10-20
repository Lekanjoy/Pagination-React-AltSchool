import React, { useEffect, useState } from "react";
import User from "./User";
import SkeletonLoading from "../SkeletonLoading";
import Pagination from "../Pagination";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(12);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://randomuser.me/api/?results=144")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch((err) => console.error(err));
    // setLoading(false);
  }, []);

  // Get current user
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = () => setCurrentPage(pageNumber);

  return (
    <section className="user-container">
      <h1>Users</h1>

      <div className="users">
        {loading === true ? (
          <SkeletonLoading />
        ) : (
          <User users={currentUser} loading={loading} />
        )}
      </div>
      <Pagination
        userPerPage={userPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </section>
  );
};

export default Users;
