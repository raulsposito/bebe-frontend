import React from 'react';
import { connect } from 'react-redux'
import { fetchBebes } from '../actions/fetchBebes'
import Bebes from './Bebes'
import BebeForm from './BebeForm'

class BebesContainer extends React.Component {

  componentDidMount() {
    this.props.fetchBebes(this.props.user.id)
  }

  render() {
    return (
      <div>
        <h1>my bébés</h1>
        <Bebes user={this.props.user} bebes={this.props.bebes}/>
        <BebeForm user={this.props.user} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    bebes: state.bebes
  }
}

export default connect(mapStateToProps, {fetchBebes})(BebesContainer)
