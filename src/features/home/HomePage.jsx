import React from 'react'

const HomePage = ({history}) => {
    return(
        <div>
              <div className="ui inverted vertical masthead center aligned segment">
                <div className="ui text container">
                  <h1 className="ui inverted stackable header">
                    <img
                      className="ui image small"
                      src="/assets/logo.png"
                      alt="logo"
                    />
                    <div className="content">B-Quest</div>
                  </h1>
                  <h2>Create Your Treasure Hunt, Invite Friends and More</h2>
                  <div onClick={() => history.push('/events')} className="ui huge white inverted button">
                    Let's Play!
                    <i className="right arrow icon" />
                  </div>
                </div>
              </div>
            </div>
    )
}
export default HomePage;