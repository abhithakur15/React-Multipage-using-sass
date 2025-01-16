import Title from "../Component/Title";

function Team(){
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
    <section className="main-team">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="intro">
                    <Title  sub_heading=" Great Experience In Building" 
                    main_heading="A Modern Construction & Industrial Agency"
                     message="Construction is a general term meaning the art and science to form objects systems organizations, and comes from Latin"></Title>
                    </div>
                </div>
            </div>
        </div>
    </section>
 <section className="team team-full">
  <div className="container">
  <div className="row justify-content-center">
      {teamData.map((member, index) => (
        <div className="col-lg-4 col-md-6 mb-4" key={index}>
          <div className="team-box h-100">
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
    export default Team;