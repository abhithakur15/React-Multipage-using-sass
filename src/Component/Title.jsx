function Title(props){
    return(
    <>
<div className="title-box">
    <h6><span></span>{props.sub_heading}</h6>
    <h1>{props.main_heading}</h1>
    <p>{props.message}</p>
</div>
    
    
    
    </>
    );
    }
    export default Title;