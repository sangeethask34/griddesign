import './header.css'
const navbar = () => {
    return ( 
        <div className="topbar">
            <div className="leftmenu">
            <h1>edyoda</h1>
            <span>stories</span>
            </div>
            <button className="btn">explore Categories<i className="fa fa-caret-down"></i></button>
            <div className="rightmenu">
            <p className="description">EdYoda is free learning and knowledge
            <br /> sharing platform for techies
          </p>
          <button className="site-btn">go to main website</button>
          </div>
        </div>
     );
}
 
export default navbar;