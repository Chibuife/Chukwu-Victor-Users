import Good from "./img.png"
export const Successful = ()=>{
    return(
        <div className="successfulBody">
            <div className="good"><img src={Good} alt="" /></div>
            <div className="s-header">Success!</div>
            <div className="s-description">Thanks for your information. We will get back to you</div>
        </div>
    )
}