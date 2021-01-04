import React from 'react';
import { connect } from 'react-redux'
import { deleteTracking } from '../actions/deleteTracking'


class BebeDay extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showData: false,
      trackingData: []
    }
  }

  handleClick = () => {
    fetch('http://localhost:3000/api/v1/users/' + this.props.user.id + '/bebes/'  + this.props.bebes.bebe.id + '/days/' + this.props.dayId + '/trackings')
    .then(response => response.json())
    .then(trackings => {
      console.log(trackings.data)

      this.setState({
        showData: !this.state.showData,
        trackingData: trackings.data
      })
    })
  }

  createDataRow = (data) => {
    return(
      <tr key={data.id}>
        <td>{data.attributes.start_time} / {data.attributes.end_time}</td>
        <td>{data.attributes.info_type}</td>
        <td>{data.attributes.amount}</td>
        <td>{data.attributes.amount_unit}</td>
        <td>{data.attributes.notes ? data.attributes.notes : "None"}</td>
        <td><button className="delete" id={data.id} onClick={(event) => this.props.deleteTracking(event.target.id, this.props.user.id, this.props.bebes.bebe.id, this.props.dayId)}>X</button></td>
      </tr>
    )
  }

  render() {
    let body;

    if (this.state.showData) {
      body = <div className="trackingsData">
        <table>
          <tbody>
            <tr>
              <th>Start Time/End Time</th>
              <th>Data</th>
              <th>Amount</th>
              <th>Amount Unit</th>
              <th>Notes</th>
              <th>X</th>
            </tr>
          {this.state.trackingData.length > 0 ? this.state.trackingData.map((data) => this.createDataRow(data)) : null}
          </tbody>
        </table>
      </div>
    } else {
      body = null;
    }

    return (
      <>
        <button onClick={this.handleClick}>{this.props.date}</button>
        {body}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, { deleteTracking })(BebeDay)
