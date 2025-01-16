import footer_img from "../assets/Images/logo.png";
function Footer(){
return(
<>
<footer>
<div className="container">
<div className="row align-items-center">
<div className="col-lg-4 col-md-6">
    <div className="footer_logo">
        <img src={footer_img} alt="" className="img-fluid"/>
        <p className="text-white my-3">Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
    </div>
</div>
<div className="col-lg-4 col-md-6">
    <ul>
        <li><span><i class="fa-solid fa-location-dot"></i></span> <p>Brooklyn, New York, United States</p></li>
        <li><span><i class="fa-solid fa-phone"></i></span><p>+0123-456789</p></li>
        <li><span><i class="fa-solid fa-envelope"></i></span><p>example@example.com</p></li>
    </ul>
</div>
<div className="col-lg-4">
    <div className="footer-link">
        <ul className="d-flex">
        <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
        </ul>
    </div>
</div>
</div>
</div>
</footer>





</>
);
}
export default Footer;