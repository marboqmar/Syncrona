import React from "react";
import "./boardmenu.scss";

<body>
  <header>
    <a href="home.html" className="back-button">
      &lt;
    </a>
    <h1>
      <span id="boards">Boards</span>
    </h1>
    <a href="board-settings.html" className="board-settings">
      ...
    </a>
  </header>
  <main>
    <section className="board-menu">
      <h2>Your Boards</h2>
      <div className="board-columns">
        <ul className="board-list">
          <li className="board-item">
            <a href="#">Board Name 1</a>
          </li>
          <li className="board-item">
            <a href="#">Board Name 2</a>
          </li>
          <li className="board-item">
            <a href="#">Board Name 3</a>
          </li>
          <li className="board-item">
            <a href="#">Board Name 4</a>
          </li>
          <li className="board-item">
            <a href="#">Board Name 5</a>
          </li>
          <li className="board-item">
            <a href="#">Board Name 6</a>
          </li>
        </ul>
      </div>
      <a href="#" className="new-board">
        New Board
      </a>
    </section>
  </main>
</body>;
