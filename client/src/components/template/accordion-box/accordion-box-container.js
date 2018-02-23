import React, { Component, PropTypes } from 'react';
const fakeContent = [
	{
		id: 1,
		title: "What is Small Claims Court?",
		text: "Small claims court is set-up to resolve disputes quickly with little costs. Cases are always for less than $10,000. The rules are more simple and the hearings are less formal than in other courts. You can talk to a lawyer about your small claims case, but your lawyer cannot represent you in court."
	},
	{
		id: 2,
		title: "Who Can File a Claim in Small Claims Court",
		text: "Generally, any adult, business or government agency (except the federal government) can sue or be sued in small claims court – as long as the dispute is about money."
	}
]; 

export default class AccordionBoxContainer extends Component {
	constructor() {
		super();
		this.state = {
			activeId: 0,
			pressed: false
		}
		this.toggleClass = this.toggleClass.bind(this);
	}

	toggleClass(id) {
		this.setState({ 
			activeId: id,
			pressed: !this.state.pressed 
		});
		console.log(this.state)
  }

	render() {
		const renderedContent = fakeContent.map((content) => {
			return (
				<div className="Accordion-box-item " key={content.id}>
					<h3 onClick={() => this.toggleClass(content.id)}>{content.title}<span></span></h3>
					<div className={this.state.activeId == content.id && this.state.pressed == true ? " ": "hidden"} >{content.text}</div>
					<hr />
				</div>
			)
		})
		return (
			<div className="Box AccordionBoxContainer medium-box">
				<hr />
				{renderedContent}
			</div>
		)
	}
} 

AccordionBoxContainer.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    activeId: PropTypes.number.isRequired,
    // expanded: PropTypes.bool.isRequired,
    // blockText: PropTypes.string.isRequired, 
    
  }).isRequired).isRequired,
  	toggleClass: PropTypes.func.isRequired
  // onTabClick: PropTypes.func.isRequired,
  // onAccordionClick: PropTypes.func.isRequired,
}