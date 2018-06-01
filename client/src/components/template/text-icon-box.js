import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class TextIconBox extends Component {
	static defaultProps = { 
		TextIconBoxClass: 'Box Text-icon-box Grey-background medium-box' 
	};
	render() {
		return (
			<div className={this.props.TextIconBoxClass}>
				<div className="text-icon-box-grid">
					<div className="text-icon-box-content">
						<h3>{this.props.boxTitle}</h3>
						<hr />
						<div>{this.props.boxContent}</div>
					</div>
					<div className="text-icon-box-content">
						<Link to={{pathname: this.props.buttonLink, state: {caseType: this.props.caseType, party: this.props.party}}}>
							<img src={this.props.iconLarge} />
						</Link>
					</div>
				</div>
			</div>
			)
	}
} 

TextIconBox.propTypes = { limit: PropTypes.number };
