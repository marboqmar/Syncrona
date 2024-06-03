import React, { useContext } from "react";
import React, { userContext } from "react";
import { Button } from "../components/atoms";

const BoardListMenu = () => {
  return (
    <div>
      <div>
        <Button>Atrás</Button>
        <h1>Boards</h1>
        <Button>
          <img src="../assets/settings/user.svg" alt="" />
        </Button>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
