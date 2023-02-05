import React from "react";
import "../index.css";
const About = () => {
  return (
    <div className="info">
      <div className="crudinfoheader">
        <h1 className="C" id="style-2" data-replace="Create">
          <span>C</span>
        </h1>
        <h1 className="C" id="style-2" data-replace="Read">
          <span>R</span>
        </h1>
        <h1 className="C" id="style-2" data-replace="Update">
          <span>U</span>
        </h1>
        <h1 className="C" id="style-2" data-replace="Delete">
          <span>D</span>
        </h1>
      </div>

      <div className="about-crud">
        <p>
          CRUD is a type of mechanism that allows you to create data, read data,
          edit it, and delete those data. In our case, we're gonna make a Todo
          app, so we will have 4 options to create tasks, read tasks, update
          tasks, or delete tasks.
        </p>
      </div>
    </div>
  );
};

export default About;
