import abt from "../assets/Images/ab.png";
import Title from "../Component/Title";
import Button1 from "../Component/Button1";
function About(){
    return(
    <>
<section className="about-exper">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
                <div className="about_exper_img">
<img src={abt} alt="" className="img-fluid"/>

                </div>
            </div>
            <div className="col-lg-6 col-md-6">
<div className="about_expr_text">
<Title  sub_heading="Great Experience In Building" 
                    main_heading="Solutions For Residentials & Industries!"
                     message="Construction is a general term meaning the art and science to form objects systems organizations, and comes from Latin"></Title>
 <p>Construction is a general term meaning the art and science to form objects systems organizations, and comes from Latin construction and Old French construction. To construct is the verb: the act of building, and the noun</p>
 <div className="img_but">
              <Button1 path="#" name="button-2 " text_name="About Us"></Button1>
              </div>
</div>
            </div>
        </div>
    </div>
</section>
    
    <section className="company_envolved">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                <Title  sub_heading="123-456-7890/call" 
                    main_heading="A Company Involved In
Service, Maintenance"
                     message="Construction is a general term meaning the art and science to form objects systems organizations, and comes from Latin"></Title>
                </div>
            </div>
        </div>
    </section>
    
    </>
    );
    }
    export default About;