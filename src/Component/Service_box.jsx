function Service_box(props){
return(
<>
<div className="service_box h-100">
    <div className="icon">
    <i class={props.icon}></i>
    </div>
    <div className="text-box">
<h5>{props.title}</h5>
<p>{props.text}</p>
    </div>
</div>



</>
);
}

export default Service_box;