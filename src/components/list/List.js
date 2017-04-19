import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getList} from '../../actions/swapi';

class List extends Component {
	componentWillReceiveProps (nextProps) {
		const newEndpoint = nextProps.match.params.listEndpoint;
		if (newEndpoint !== this.props.match.params.listEndpoint) {
			getList(newEndpoint);
		};
	}

	componentDidMount () {
		getList(this.props.match.params.listEndpoint);
	}

	render () {
		const params = this.props.match.params;
		return (
			<ul className="list">
				{this.props.list.map((item, index) => (
					<li className="list__item" key={index}>
						<Link className="list__link" to={`/${params.listEndpoint}/${index+1}`}>{item.name}</Link>
					</li>
				))}
			</ul>
		)
	}
}

export default connect(state => ({list: state.list}))(List);
