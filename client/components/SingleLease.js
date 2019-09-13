import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchLease} from '../store'

class SingleLease extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      notes: '',
      status: '',
      version: 0,
      classification: '',
      discountRate: null,
      prepaidFlag: true,
      incentives: 0,
      initialDirectCosts: 0,
      purchaseOptionLikely: false,
      purchaseAmount: 0,
      terminationAmount: 0,
      residualGuarAmount: 0,
      residualPayAmount: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  // will have a handleEdit, where set local state with info
  componentDidMount() {
    this.props.getLease(this.props.match.params.leaseId)
    // this.setState({...this.props.lease})
  }
  render() {
    if (!this.props.lease.name) return <h3>Loading...</h3>
    const {
      description,
      classification,
      prepaidFlag,
      discountRate,
      notes
    } = this.props.lease.leaseVersions[0].leaseOption
    const {name, status} = this.props.lease
    const {version} = this.props.lease.leaseVersions[0]
    return (
      <form>
        <div id="lease-container">
          <div id="lease-header">
            <div id="lease-header-info">
              <div id="lease-header-info-left">
                <label htmlFor="name">Lease Name:</label>
                <input type="text" name="name" value={name} />
                <label htmlFor="description">Lease Description:</label>
                <input type="text" name="description" value={description} />
                <label htmlFor="classification">Lease Classification:</label>
                <input
                  type="text"
                  name="classification"
                  value={classification}
                />
                <label htmlFor="discountRate">Discount Rate:</label>
                <input type="text" name="discountRate" value={discountRate} />
              </div>
              <div id="lease-header-info-right">
                <label htmlFor="version">Lease Version:</label>
                <input type="text" name="version" value={version} />
                <label htmlFor="status">Lease Status:</label>
                <input type="text" name="status" value={status} />
                <label htmlFor="prepaidFlag">Prepaid or Arrears:</label>
                <input type="text" name="prepaidFlag" value={prepaidFlag} />
              </div>
            </div>
            <div id="lease-header-notes">
              <label htmlFor="notes">Notes:</label>
              <input type="text" name="notes" value={notes} />
            </div>
          </div>
          <div id="lease-amounts">
            <div id="lease-amounts-left" />
            <div id="lease-amounts-right" />
          </div>
        </div>
      </form>
    )
  }
}

const mapState = state => ({
  lease: state.lease.selected
})

const mapDispatch = dispatch => ({
  getLease: id => dispatch(fetchLease(id))
})

export default connect(mapState, mapDispatch)(SingleLease)
