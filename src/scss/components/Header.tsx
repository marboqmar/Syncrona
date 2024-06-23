import {Logo} from "../../../src/components/atoms";


const Header = () => {
  return (
    <div className="align__center flex margin__center justify__center">
      <div className="marginRLogo">
      <Logo logoTheme='MixedColors1'
            width='3rem'/>
      </div>
       <div>
       <h1 className="login__tittle livvic-regular">Syncrona</h1>
       </div>
      
    </div>
  );
};

export default Header;
