import React from "react";

const Error = () => {
  return (
    <div className="loading__container">
      <p className="loading__message">Is this a movie? Does this even sound like a movie?</p>
      <p className="loading__message--subtitle">You better check yourself before you wreck yourself buddy.</p>
      <p className="loading__message--subtitle--2">(Or we don't have this movie in our database. Highly unlikely cause we've got all sorts of weird stuff.)</p>

    </div>
  );
};

export default Error;
