export default function dayReducer(state = [], action) {

  switch(action.type) {
    case 'FETCH_BEBE_DAYS':
      return action.payload.data

    case 'CREATE_DAY':
      return state.concat(action.payload.data)

    case 'CLEAR_DAYS':
      return []

    default:
      return state
  }

}
