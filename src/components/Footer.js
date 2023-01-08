import MenuLinks from "./MenuLinks"

const Footer = () => {
   return (
    <footer>
      <img 
      src="https://www.kyleecooks.com/wp-content/uploads/2019/03/Mini-Lemon-Meringue-Pies-28.jpg"
      ></img>
      <div>
         <h4>Doormat Navigation</h4>
         <MenuLinks/>
      </div>
      <div>
         <h4>Social Media Links</h4>
         <ul>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>YouTube</li>
         </ul>
      </div>
    </footer>
   ) 
}
export default Footer;