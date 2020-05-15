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
		},
		isLoading: false
	}
	setLoading = () => {
		this.setState({isLoading: !this.state.isLoading});
	};

	render() {
		const {
			children
		} = this.props;

		return (
			<Context.Provider value={ {...this.state, setLoading : this.setLoading  } }>
				{ children }
			</Context.Provider>
		);
	}
}
export { Context, ContextProvider };