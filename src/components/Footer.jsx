import {
  Div,
  A 
} from "../styled-components/Footer"

function Footer() {
  return (
    <Div class="attribution">
      Challenge by{" "}
      <A href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </A>
      . Coded by <a href="#">Gauthier Lhomme</a>.
    </Div>
  );
}

export default Footer;
