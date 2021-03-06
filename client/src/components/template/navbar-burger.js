import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class NavbarBurger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuClicked: false,
      menuLinks: props.menuLinks
    }
    this.menuClosed = this.menuClosed.bind(this)
  }

  componentDidMount() {
    console.log(this.state.menuLinks, "this.state.menuLinks")
  }
  menuClosed() {
    this.setState({ menuClicked: true })
  }

  menuOpened() {
    this.setState({ menuClicked: false })
  }

	render() {
		return (
			<div className="Menu-burger" >
        {/*this is a hidden checkbox that will receive click*/}
        <input className="Menu-burger-checkbox" type="checkbox" onClick={() => this.menuOpened()} />
        {/*the hamburger part of the menu --->*/}
        <span></span>
        <span></span>
        <span><p>MENU</p></span>

				<div className='Menu-links-burger'>
          <NavLink
            className='Menu-link-burger'
            exact
            to='/'
          >
            Home
          </NavLink>
          {this.props.azure === 'AZURE'? <NavLink
            className='Menu-link-burger'
            to='/azure-portal'
          >
            My Portal
          </NavLink> : 
          <NavLink
            className='Menu-link-burger'
            to='/portal'
          >
            My Portal
          </NavLink>}
          <NavLink
            className='Menu-link-burger'
            to='/forms'
          >
            Forms
          </NavLink>
          <NavLink
            className='Menu-link-burger'
            to='/faqs'
          >
            FAQs
          </NavLink>
          <NavLink
            className='Menu-link-burger'
            to='/video-resources'
          >
            Video Resources
          </NavLink>
          <NavLink
            className='Menu-link-burger'
            to='/contact-us'
          >
            Contact
          </NavLink>
        </div>
			</div>
		)
	}
}
