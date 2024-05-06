import React from "react";
import "./home.scss";

<body>
  <header>
    <a href="board-menu.html" className="back-button">
      &lt;
    </a>
    <h1>
      <span id="board-name">Board Name</span>
    </h1>
    <a href="board-settings.html" className="board-settings">
      ...
    </a>
  </header>
  <main>
    <section className="board">
      <div className="pages">
        <h2>Page name</h2>
        <ul className="tasks">
          <li className="task">
            <p className="task-text">Task 1</p>
            <div className="task-details">
              <img src="image.jpg" alt="Task 1 image" className="task-image" />
              <ul className="subtasks">
                <li>Subtask 1.1</li>
                <li>Subtask 1.2</li>
              </ul>
              <button className="add-task">Add Task</button>
            </div>
          </li>
        </ul>
      </div>
      <h2></h2>
    </section>
    <div className="board-header">
      <button className="new-page">New Page</button>
    </div>
    <section className="board"></section>
  </main>
</body>;
