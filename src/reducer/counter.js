export default (counter = 1, action) => {
  action.type === 'PLUS' ? counter++ : counter
  return counter
}