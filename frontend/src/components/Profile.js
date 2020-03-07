import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { UserProfile } from "./UserProfile";
import { Logout } from "./Logout";

// const URL = "http://localhost:8080/:reviewId";

export const Profile = () => {
  const [filtered, setFiltered] = useState([]);
  const name = useSelector(store => store.auth.name);
  const token = useSelector(store => store.auth.accessToken);
  const [author, setAuthors] = useState();

  useEffect(() => {
    fetch(`http://localhost:8080/profile?username=${name}`)
      .then(res => res.json())
      .then(json => {
        setFiltered(json);
      });
  }, []);

  return (
    <div>
      <div>
        {token && (
          <div>
            <p>Your profile: {name}!</p> <Logout></Logout>{" "}
          </div>
        )}
        {/* The names filtered, usersArray and UserProfile are a bit confusing, but I know you're currently changing it. Here you could use Review Component. 
            It'll have the delete review feature available even. 
        */}
        {filtered.map(usersArray => {
          return (
            <UserProfile
              reviewId={usersArray._id}
              author={usersArray.authorName}
              authors={usersArray.authors}
              review={usersArray.review}
              title={usersArray.title}
              bookId={usersArray._id}
            ></UserProfile>
          );
        })}
      </div>
    </div>
  );
};
