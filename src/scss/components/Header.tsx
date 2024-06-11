import {  Logo} from "../../../src/components/atoms";


const Header = () => {
  return (
    <div className="align__center flex margin__center">
       <Logo logoTheme='OrangeTheme'
            width='2rem'/>
      <h1 className="login__tittle livvic-regular">Syncrona</h1>
    </div>
  );
};

export default Header;
