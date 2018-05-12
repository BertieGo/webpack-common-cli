import * as React from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';

class Child extends React.Component {

  render() {
    console.log(this.props);
    return (
      <span>
        <Button>123123123</Button>
      </span>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    accountId: state.account.accountId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Child);
