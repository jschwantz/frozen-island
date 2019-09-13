import axios from 'axios'
// import history from '../history'

/**
 * ACTION TYPES
 */
const GOT_LEASES = 'GOT_LEASES'
const GOT_LEASE = 'GOT_LEASE'

/**
 * INITIAL STATE
 */
const initialState = {all: [], selected: {}}

/**
 * ACTION CREATORS
 */
const gotLeases = leases => ({type: GOT_LEASES, leases})
const gotLease = lease => ({type: GOT_LEASE, lease})

/**
 * THUNK CREATORS
 */
export const getLeases = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/leases')
    dispatch(gotLeases(data))
  } catch (err) {
    console.error(err)
  }
}

export const fetchLease = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/leases/${id}`)
    dispatch(gotLease(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_LEASES:
      return {...state, all: action.leases}
    case GOT_LEASE:
      return {...state, selected: action.lease}
    default:
      return state
  }
}
