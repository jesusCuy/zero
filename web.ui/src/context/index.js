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
		isLoading: false,
		location:"",
		area:"",
		prediction:{}
	}
	setLoading = () => {
		this.setState({isLoading: !this.state.isLoading});
	};

	setPrediction = (newPrediction) => {
		this.setState({prediction:newPrediction});
	};
	setAreaInformation = (info) => {
		this.setState({area: info.area, location: info.location });
	};

	render() {
		const {
			children
		} = this.props;

		return (
			<Context.Provider value={ {
					...this.state, 
					setLoading : this.setLoading,
					setPrediction : this.setPrediction,
					setAreaInformation: this.setAreaInformation 
					}
				 }>
				{ children }
			</Context.Provider>
		);
	}
}
export { Context, ContextProvider };