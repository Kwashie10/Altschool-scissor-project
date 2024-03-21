

const Pricing = () => {
  return (
    <div>
        <div>
        <section className="pricing" id="pricing">
    <div className="section-center pricing-center">
      <div className="pricing-title-container">
        <div className="section-title-bar" />
        <h1 className="features-title pricing-title">
          A <span className="primary-blue-200">price perfect</span> for your
          needs.
        </h1>
      </div>
      <p className="pricing-para">
        From catering for your personal, business, event, socials needs, you can
        be rest assured we have you in mind in our pricing.
      </p>
      <div className="prices">
        {/* single price */}
        <article className="price">
          <h3 className="price-plan">Basic</h3>
          <h2 className="price-type">Free</h2>
          <p className="price-text">Free plan for all users</p>
          <ul className="price-lists">
            <li className="price-option">
              <img src="/assets/check-circle.png" alt="" /> Unlimited URL
              Shortening
            </li>
            <li className="price-option">
              <img src="/assets/check-circle.png" alt="" /> Unlimited Basic
              Link Analytics
            </li>
            <li className="price-option">
              <img src="/assets/check-circle.png" alt="" /> Unlimited
              Customizable Short Links
            </li>
            <li className="price-option">
              <img src="/assets/check-circle.png" alt="" /> Unlimited Standard
              Support
            </li>
            <li className="price-option">
              <img src="/assets/check-circle.png" alt="" /> Unlimited
              Ad-Supported
            </li>
          </ul>
        </article>
        {/* single price */}
        <article className="price price-active">
          <h3 className="price-plan">Professional</h3>
          <h2 className="price-type">$15/ month</h2>
          <p className="price-text">Ideal for business creators</p>
          <ul className="price-lists">
            <li className="price-option">
              <img src="/assets/check-circle.png" alt="" /> Enhanced Link
              Analytics
            </li>
            <li className="price-option">
              <img src="/assets/check-circle.png" alt="" /> Custom Branded
              Domains
            </li>
            <li className="price-option">
              <img src="/assets/check-circle.png" alt="" /> Advanced Link
              Customization
            </li>
            <li className="price-option">
              <img src="/assets/check-circle.png" alt="" /> Priority Support
            </li>
            <li className="price-option">
              <img src="/assets/check-circle.png" alt="" /> Ad-free Experience
            </li>
          </ul>
        </article>
        {/* single price */}
        <article className="price">
          <h3 className="price-plan">Teams</h3>
          <h2 className="price-type">$25/ month</h2>
          <p className="price-text">Share with up to 10 users</p>
          <ul className="price-lists">
            <li className="price-option">
              <img src="/assets/check-circle.png" alt="" /> Team Collaboration
            </li>
            <li className="price-option">
              <img src="/assets/check-circle.png" alt="" /> User Roles and
              Permissions
            </li>
            <li className="price-option">
              <img src="/assets/check-circle.png" alt="" /> Enhance Security
            </li>
            <li className="price-option">
              <img src="/assets/check-circle.png" alt="" />
              API Access
            </li>
            <li className="price-option">
              <img src="/assets/check-circle.png" alt="" /> Dedicated Account
              Manager
            </li>
          </ul>
        </article>
      </div>
      <div className="pricing-btns">
        <a href="#d" className="btn pricing-btn btn-white">
          Get Customer Pricing
        </a>
        <a href="#d" className=" btns_blue">
          Select Pricing
        </a>
      </div>
    </div>
  </section>
        </div>
    </div>
  )
}

export default Pricing