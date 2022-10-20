import React from "react";

const User = ({ users}) => {

  return (
    <>
      {users.map((user) => {
        return (
          <div className="user">
            <img src={user.picture.medium} alt="user photo" />
            <p className="name">{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
            <p className="email">
              <span style={{ fontWeight: "500" }}>Email:</span> {user.email}
            </p>
            <p className="phone">
              <span style={{ fontWeight: "500" }}>Phone:</span> {user.phone}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default User;
