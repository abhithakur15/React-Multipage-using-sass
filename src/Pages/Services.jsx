import img1 from "../assets/Images/stair.jpg";
import Title from "../Component/Title";
import Service_box from "../Component/Service_box";
function Services(){
    return(
    <>
   <section className="main_services">
    <div className="container">
        <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 col-md-6">
                <div className="img_box">
                    <img src={img1} alt="" className="img-fluid"/>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="text-box">
                <Title  sub_heading=" Great Experience In Building" 
                    main_heading="A Modern Construction & Industrial Agency"
                     message="Construction is a general term meaning the art and science to form objects systems organizations, and comes from Latin"></Title>
               <p>Construction is a general term meaning the art and science to form objects systems organizations, and comes from Latin construction and Old French construction. To construct is the verb: the act of building, and the noun</p>
                </div>
            </div>
        </div>
    </div>
   </section>
    <section className="main_ser_box">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
<Service_box icon="fa-solid fa-building" title="Industrial construction" text="over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home."></Service_box>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
<Service_box icon="fa-solid fa-oil-can" title="Oil Gas & Power Plant" text="over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home."></Service_box>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
<Service_box icon="fa-solid fa-gear" title="Mechanical Works" text="over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home."></Service_box>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
<Service_box icon="fa-solid fa-power-off" title="Power & Energy" text="over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home."></Service_box>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
<Service_box icon="fa-solid fa-gas-pump" title="Petroleum Refinery" text="over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home."></Service_box>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
<Service_box icon="fa-solid fa-house" title="Interior Design" text="over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home."></Service_box>
                </div>
            </div>
        </div>
    </section>


    </>
    );
    }
    export default Services;