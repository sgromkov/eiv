const getVisibleRows = (
  list,
  query
) => ((query)?
  list.filter(row => (
    row.some(item => item.indexOf(query) !== -1)
  )) :
  list
);

export default getVisibleRows;