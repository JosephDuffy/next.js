export default ({ query, method }, res) => {
  res.setHeader('Last-Modified', 'Wed, 21 Oct 2015 07:28:00 GMT')
  if (method === 'POST') {
    res.status(200).json([{ title: query.title }])
  } else {
    res.status(200).json([{ title: 'Cool Post!' }])
  }
}
