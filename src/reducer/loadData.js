export default (state = [], action) => {
  const { type, payload } = action
  return type == 'LOAD_DATA_SUCCESS' ? payload : state
}