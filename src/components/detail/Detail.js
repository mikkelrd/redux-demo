import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDetail} from '../../actions/swapi';

class Detail extends Component {
	componentDidMount () {
		const {listEndpoint, detailId} = this.props.match.params
		getDetail(listEndpoint, detailId)
	}

	render () {
		return (
			<div className="detail">
				<div>Name: {this.props.detail.name}</div>
				<div>Films:</div>
				<ul>
					{this.props.detail.films && this.props.detail.films.map((film, index) => (
						<li key={index}>{film}</li>
					))}
				</ul>
			</div>
		)
	}
}

export default connect(state => ({detail: state.detail}))(Detail);
