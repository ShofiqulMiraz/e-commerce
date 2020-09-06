import React from 'react';

import './homepage.component.scss';

const Homepage = () => {
    return ( 
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span className="subtitle">shop now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">JACKETS</h1>
                        <span className="subtitle">shop now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">SNICKERS</h1>
                        <span className="subtitle">shop now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">WOMANS</h1>
                        <span className="subtitle">shop now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">MENS</h1>
                        <span className="subtitle">shop now</span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Homepage;