import React from "react";
import { Button } from "../components";

const BoardSettings = () => {
  return (
    <div>
      <div>
        <Button>
          <img
            src="../src/assets/icons/navigation/arrows/left/left arrow-2.svg"
            alt="Back"
          />
        </Button>
        <h1>Settings</h1>
      </div>
      <div>Theme</div>
      <div>Languages</div>
      <div>Views</div>
      <div>Account Details</div>
      <div>Notify me</div>
      <div>
        <a>
          <span>Need more help? You can check our FAQ</span>
        </a>
      </div>
      <div>
        <Button>Apply</Button>
      </div>
      <div>
        <a>
          <span>Terms and Conditions</span>
        </a>
      </div>
    </div>
  );
};
