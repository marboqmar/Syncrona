import { Button, Icon, Input, Logo } from "../../components/atoms";

const Footer = () => {
  return (
    <div className='footer__gradient'>
     <div className="footer__base_wrapper"> 
        <Logo logoTheme="Pastel" width="80px"></Logo>
        <div className="footer__flexbox_wrapper">
          <div className="footer__wrapper_centered">
            <div className="footer__wrapper_centered" >
            <Input  type="email" placeholder="Enter e-mail" height="60px"></Input>
            <Button className="syncrona-yellow" type='primary' height="60px" text='Register'></Button>
            </div>
            <div className="footer__icon_wrapper">
              <Icon  iconType="social" iconName="Twitter" className="footer__icon" ></Icon>
              <Icon  iconType="social" iconName="Instagram" className="footer__icon"></Icon>
              <Icon  iconType="social" iconName="LinkedIn" className="footer__icon"></Icon>
            </div>
          </div>
          <div  className="footer__wrapper_centered">
            <p>Tus opciones de Privacidad</p>
            <p>Política de Privacidad</p>
            <p>Términos y condiciones</p>
            <p>Copyright 2024 Syncrona</p>
          </div>
        </div>
      </div>
    </div>
  

  );
};

export default Footer;
