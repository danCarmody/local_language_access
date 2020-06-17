import React, { Component } from 'react';

class Header extends Component {
    render() {
        if(this.props.data){
            var title = this.props.data.title;
            var founder = this.props.data.founder;
            var motto = this.props.data.motto;
            var state = this.props.data.location.state;
            var city = this.props.data.location.city;
            var social = this.props.data.social.map(function(social){
                return <li key={social.name}><a href={social.url}><i className={social.className}></i></a></li>
            })
        }
        return(
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show Navigation</a>
                        <a className="mobile-btn" href="#home" title="Hide navigation">Hide Navigation</a>
                    
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li className="current"><a className="smoothscroll" href="#about">About</a></li>
                        <li className="current"><a className="smoothscroll" href="#episodes">Episodes</a></li>
                        <li className="current"><a className="smoothscroll" href="#news">News</a></li>
                        <li className="current"><a className="smoothscroll" href="#contact">Contact</a></li>
                        <li className="current"><a className="smoothscroll" href="#resources">Resources</a></li>
                    </ul>
                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">{title}</h1>
                        <h3><span>{motto}</span></h3>
                        <hr />
                        <ul className="social">
                            {social}
                        </ul>
                    </div>
                </div>
                
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>
            </header>
        )
    }
}

export default Header;