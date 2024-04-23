import React from 'react';

import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div>
    <div>
        <header className="masthead" >
         <div className="container">
                <div className="masthead-subheading">{props.title}</div>
                <div className="masthead-heading text-uppercase">{props.subtitle}</div>
                {props.showButton &&  
                <Link className="btn btn-primary btn-xl text-uppercase" to={`${props.Link}`}> {props.buttonText}</Link> }
         </div>
        </header>
    </div>
</div>
  );
}

export default Header;
