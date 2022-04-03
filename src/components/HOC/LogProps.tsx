import { Component } from 'react';

export default function logProps(WrappedComponent: any) {
  
  class LogProps extends Component {

    componentDidMount() {
      console.log('this.props: ', this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return LogProps;
}
