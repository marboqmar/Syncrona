import React, { useContext } from "react";
import React, { userContext } from "react";
import { Button } from "../components/atoms";

const BoardListMenu = () => {
  return (
    <div>
      <div>
        <Button>
          <img
            src="../src/assets/icons/navigation/arrows/left/left arrow-2.svg"
            alt="User"
          />
        </Button>
        <h1>Boards</h1>
        <Button>
          <img src="../src/assets/icons/settings/user.svg" alt="User" />
        </Button>
        <Button>
          <img
            src="../src/assets/icons/settings/equalizer.svg"
            alt="Settings"
          />
        </Button>
      </div>
      <div>
        <li>
          <a>
            <img src="" alt="" />
            <span>Mis cosas</span>
          </a>
        </li>
      </div>
      <div>
        <Button>New board</Button>
      </div>
    </div>
  );
};

export default BoardListMenu;
