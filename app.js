var React = require('react');
var ReactDOM = require('react-dom');

const cities = [
'san', 'san jose', 'santiago', 'san francisco', 'santa rosa', 'san juan', 'sabadell', 'salamanca', 'salt lake city', 'salinas', 'salem', 'sausalito', 'taipei', 'tel aviv', 'tempe', 'termez', 'temuco', 'tiajuna', 'tieling', 'thousand oaks', 'thunder bay', 'tokyo', 'tulsa'
];

var styles = {
  container: {
  	fontFamily: 'sans-serif',
  	width: 500,
  	height: 500,
  	position: 'absolute',
  	top: '50%',
  	left: '50%',	
  	margin: '-250px 0 0 -250px',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
  	textAlign: 'center',
    fontSize: '2em',
    fontWeight: 'bold',
  },
  search: {
    width: '100%',
    border: 'none',
    borderBottom: '1px solid black',
  },
  results: {
  	listStyle: 'none',
  	boxShadow: '0px 10px 10px 0px #CCCCCC',
  	marginTop: 0,
  	padding: 10
  },
  text: {
  	margin: 5,
  }
};

var MyResultsBox = React.createClass({
	componentDidUpdate: function(){
		// console.log(this.props.results);
	},
	render: function(){
		if(this.props.results.length>0)
			return(
				<ul style={styles.results}>
					{this.props.results.map(function(elem, index) {
						// console.log('rendering li');
						return <li key={elem+index} style={styles.text}>{elem}</li>;
					})}
				</ul>
				);
		else
			return null;
	}
});

var MyAutoComplete = React.createClass( {
	getInitialState: function() {
		return {value: '', results: []};
	},
	handleChange: function(event) {
		var input = event.target.value;
		if(input.length === 0) {
			var found = [];
		} else if(input.length < 3) {
			// console.log('<3');
			var found = ["I need at least 3, keep on typing!"]
		} else {
			//apply a RegEx across the cities array for cities starting with the current input
			var found = cities.filter(function(elem, index) {
				return(elem.search(new RegExp('^'+input,'i')) > -1);
			});

			if(found.length === 0) found = ["Sorry, no results!"];
		}
		this.setState({value: event.target.value, results:found});
	},
	render: function() {
		return (
			<div>
				<input
				style={styles.search}
				type="text"
				placeholder="Enter at least three characters to get a result"
				value={this.state.value}
				onChange={this.handleChange}
				ref={function(input){if(input != null)input.focus();}}
				/>
				<MyResultsBox results={this.state.results} />
			</div> 
			);
	}
});


var App = React.createClass({
	render(){
		return( 
		<div style={styles.container}>
		<h1 style={styles.title}>The Wonderful World of AutoComplete Search</h1>
		<MyAutoComplete />
		</div>
		);
	}
});


ReactDOM.render(
	<App/>,
	document.getElementById('app-autocomplete')
);	