import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, leases} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Lease Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Classification</th>
              <th>Prepaid Flag</th>
              <th>Discount Rate</th>
            </tr>
            {leases.map(lease => {
              const {
                description,
                classification,
                prepaidFlag,
                discountRate
              } = lease.leaseVersions[0].leaseOption
              return (
                <tr key={lease.id}>
                  <Link to={`/home/${lease.id}`}>
                    <td>{lease.name}</td>
                  </Link>
                  <td>{description}</td>
                  <td>{lease.status}</td>
                  <td>{classification}</td>
                  <td>{prepaidFlag ? 'Paid In Advance' : 'Paid in Arrears'}</td>
                  <td>{discountRate}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    leases: state.lease.all
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
