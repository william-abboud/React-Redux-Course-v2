class Container extends React.Component {
	render() {
      return <button onClick={(event) => this.props.callback}>Foo</button>
    }
}

class Foo extends React.Component {
	constructor(props) {
    	super(props);
      
        this.pesho = this.pesho.bind(this);
    }
  
  	pesho() {
    	console.log(this);
      	
      	this.showYourself();
    }
  
	render() {
      return <Container callback={this.pesho} />;
    }
}
