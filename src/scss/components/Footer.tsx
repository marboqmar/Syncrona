import { Button, Icon, Input, Logo } from "../../components/atoms";

const Footer = () => {
  return (
    <div className='bg__gradient'>
      <div className="footer__flexbox_wrapper">
        <Logo logoTheme="Pastel" width="80px"></Logo>
        <div className="landing__wrapper_centered">
          <div>
          <Input value="" type="email" placeholder="Enter e-mail"></Input>
          <Button className="syncrona-yellow" type='primary' height="60px" text='Register'></Button>
          </div>
          <div className="footer__icon">
            <Icon iconType="social" iconName="Twitter" fill="white"></Icon>
            <Icon iconType="social" iconName="Instagram"></Icon>
            <Icon iconType="social" iconName="LinkedIn"></Icon>
          </div>
        </div>
        <div>
          <></>
        </div>
      </div>
      
    </div>
  

  );
};

export default Footer;
