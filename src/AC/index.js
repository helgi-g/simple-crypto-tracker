export function loadData() {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_DATA_START'
    })
    fetch(`https://api.coinmarketcap.com/v1/ticker/`)
      .then(res => res.json())
      .then(res => dispatch({
        type: 'LOAD_DATA_SUCCESS',
        payload: res
      }))
      .catch(error => dispatch({
        type: 'LOAD_DATA_ERROR',
        payload: { error }
      }))
  }
}