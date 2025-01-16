import vid from "../assets/Images/3.mp4";
import great_image from "../assets/Images/exp.png";
import Title from "../Component/Title";
import Button1 from "../Component/Button1";
import two from "../assets/Images/two.jpg";
import first from "../assets/Images/1.jpg";
function Home(){
    const services = [
        {
          id: 1,
          icon: "fa-solid fa-hammer",
          title: "Mechanical Works",
          description: "Construction is a general term the art and science to form",
          link: "/Services",
        },
        {
          id: 2,
          icon: "fa-solid fa-power-off",
    
          title: "Power & Energy",
          description: "Construction is a general term the art and science to form",
          link: "/Services",
        },
        {
            id: 3,
            icon: "fa-solid fa-oil-can",
            title: "Petroleum Refinery",
            description: "Construction is a general term the art and science to form",
            link: "/Services",
           
          },
          {
            id: 4,
            icon: "fa-brands fa-intercom",
            title: "Interior Design",
            description: "Construction is a general term the art and science to form",
            link: "/Services",
         
          },
      ];
      const features = [
        "Living rooms are pre-wired for Surround",
        "Nestled in the Buckhead Vinings communities",
        "A rare combination of inspired architecture",
        // Add more features as needed
      ];
      const features1 = [
        "Luxurious interior design and amenities",
        "Private balconies with stunning views",
        "Outdoor grilling with dining court",
      ];
      const teamData = [
        {
          name: "Rosalina D. William",
          title: "Technology Officer",
          image: "/src/assets/Images/1.jpg",
          socialLinks: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
        {
          name: "John Doe",
          title: "Marketing Specialist",
          image: "/src/assets/Images/2.jpg",
          socialLinks: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
        {
          name: "Jane Smith",
          title: "Creative Director",
          image: "/src/assets/Images/3.jpg",
          socialLinks: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
      ];
return(
<>
<section className="hero">
    <div className="container-fluid p-0">
        <div className="col-lg-12">
        <video autoPlay loop muted playsInline id="myVideo">
         <source src={vid} type="video/mp4" />

        
     </video>
        </div>
        <div className="col-lg-12">
            <div className="hero-text">
                <span><i class="fa-solid fa-house"></i> Great Experience In Building</span>
                <h1>Creating a brighter<br/>
                future, together</h1>
            </div>
        </div>
    </div>
</section>

<section className="great_exp">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
                <div className="great_img me-lg-5">
                    <img src={great_image} alt="" className="img-fluid"/>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="great_text">
                    <Title  sub_heading="Great Experience In Building" 
                    main_heading="Solutions For Residentials & Industries!"
                     message="Construction is a general term meaning the art and science to form objects systems organizations, and comes from Latin"></Title>
              <p>Construction is a general term meaning the art and science to form objects systems organizations, and comes from Latin construction and Old French construction. To construct is the verb: the act of building, and the noun</p>
            
                </div>
                <div className="img_but">
              <Button1 path="/About" name="button-2 " text_name="About Us"></Button1>
              </div>
            </div>
        </div>
    </div>
</section>
<section className="construct_services">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
                <div className="const_ser_text">
                <div className="great_text">
                    <Title  sub_heading="Construction Service" 
                    main_heading="Provide Construction Service For You"
                     message="Construction is a general term meaning the art and science to form objects systems organizations, and comes from Latin"></Title>
              <p>Construction is a general term meaning the art and science to form objects systems organizations, and comes from Latin construction and Old French construction. To construct is the verb: the act of building, and the noun</p>
            
                </div>
                <div className="img_but">
              <Button1 path="/Services" name="button-1 " text_name="About Us"></Button1>
              </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
            <div className="row">
      {services.map((service) => (
        <div className="col-lg-6 col-sm-12 col-md-12  mb-3" key={service.id}>
          <div className="card-services h-100">
            <div className="icon">
              <i className={service.icon}></i>
            </div>
            <div className="text-box">
              <h6>{service.title}</h6>
              <p>{service.description}</p>
              <a href={service.link}>
                Service Details <span><i className="fa-solid fa-arrow-right"></i></span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
            </div>
        </div>
    </div>
</section>
<section className="great_experience overflow-hidden">
    <div className="container-fluid  p-lg-0">
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
                <div className="great-text ps-lg-5">
                <Title  sub_heading="Great Experience In Building" 
                    main_heading="Our Specialization & Company Features"
                     message=""></Title>
                     <div className="row">
                        <div className="col-lg-6 col-md-6">
                        <ul className="detail_a">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
                        </div>
                        <div className="col-lg-6 col-md-6">
                        <ul className="detail_a">
      {features1.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
                        </div>
                        
                     </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="great_exp_img">
                <img src={two} alt="" className="img-fluid"/>
              </div>
            </div>
        </div>
    </div>
</section>
<section className="how_we_work">

  <div className="container">
    <div className="box-white">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="text-center">
        <Title  sub_heading="Working Process" 
                    main_heading="How We Work"
                     message=""></Title>
        </div>
    
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-4 col-sm-6 col-md-6">
        <div className="work_box">
        <div className="num_box">
          <span>01</span>
        </div>
        <div className="text-box">
          <h4>Finding Out Needs</h4>
          <p>Construction is a general term meaning the art and science to for</p>
        </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 col-md-6">
        <div className="work_box">
        <div className="num_box">
          <span>02</span>
        </div>
        <div className="text-box">
          <h4>Developing Projects</h4>
          <p>Construction is a general term meaning the art and science to for</p>
        </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 col-md-6">
        <div className="work_box">
        <div className="num_box">
          <span>03</span>
        </div>
        <div className="text-box">
          <h4>Production launch</h4>
          <p>Construction is a general term meaning the art and science to for</p>
        </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</section>
<section className="team">
  <div className="container">
  <div className="row justify-content-center">
      {teamData.map((member, index) => (
        <div className="col-lg-4 col-sm-6 col-md-6 mb-4" key={index}>
          <div className="team-box">
            <div className="image-box">
              <img src={member.image} alt={member.name} className="img-fluid" />
            </div>
            <div className="text-box">
              <h5>{member.name}</h5>
              <h6>{member.title}</h6>
              <ul className="d-flex">
                <li>
                  <a href={member.socialLinks.facebook}>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href={member.socialLinks.twitter}>
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href={member.socialLinks.linkedin}>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
</>
);
}
export default Home;