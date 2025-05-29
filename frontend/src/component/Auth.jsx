import Button from "./Buttons";
import {Link } from "react-router-dom";

function AuthButtons() {
    return (
      <div className="flex items-center gap-4">
        <Link to="/signin">
          <Button variant="ghost" className="hidden md:inline-flex">Sign In</Button>
        </Link>
        <Link to="/signup">
          <Button>Get Started</Button>
        </Link>
      </div>
    );
  }
  

  export default AuthButtons;
