import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <header>
          <div className="header-center">
            <h1 className="header-title">
              Optimize Your Online Experience with Our Advanced
              <span className="primary-blue-400 header-bold">
                URL Shortening
                </span>
                <img src="/assets/blue-line.png" alt="blue-line" className="blue-line" />
             
              Solution
            </h1>
            <p className="header-text">
              Personalize your shortened URLs to align with your brand identity.
              Utilize custom slugs, branded links, and domain customization
              options to reinforce your brand presence and enhance user
              engagement.
            </p>
            <div className="header-btns">
              <Link to="SignUp">
                <button className="header-btn btn-blue btn">Sign up</button>
              </Link>
             <Link to="Learnmore">
             <button className="header-btn bg-none primary-blue-300 btn">
                Learn more
              </button>
             </Link>
              
            </div>
            <div className="chain-container">
              <div className="chain">
                <img src="/assets/Group.png" alt="chain" />
              </div>
            </div>
          </div>
          <div className="circle-layer">
            <img
              src="/assets/url_dish.png"
              alt=""
              className="circle-layer-img"
            />
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
