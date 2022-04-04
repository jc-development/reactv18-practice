import { PureComponent } from 'react';


class PureComp extends PureComponent {
  constructor() {
    super();

    this.state = {
      name: "Joe"
    }
  }

  componentDidMount() {
    setInterval(
      () => {
        console.log('interval');
        this.setState({ name: "Joe" })
      }, 2500
    );
  }

  render() {
    console.log('pure component render');
    return (
      <div>
        <p>Name: {this.state.name}</p>
      </div>
    );
  }
}

export default PureComp;

/*
  js shallow compare => https://www.youtube.com/watch?v=YCRuTT31qR0
  js value and reference passing
  js generators
*/