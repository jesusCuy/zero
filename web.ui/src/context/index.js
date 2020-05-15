// Libraries
import React from "react";
import PropTypes from "prop-types";

const Context = React.createContext({});

class ContextProvider extends React.Component {
	static propTypes = {
		children: PropTypes.node,
		history: PropTypes.object
	}

	state = {
		dashboardDetails: [],
		setDetails: dashboardDetails => {
			this.setState({ dashboardDetails});
		}
	}

	render() {
		const {
			children
		} = this.props;

		return (
			<Context.Provider value={ this.state }>
				{ children }
			</Context.Provider>
		);
	}
}
export { Context, ContextProvider };