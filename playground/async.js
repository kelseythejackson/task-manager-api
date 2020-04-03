const doWork = async () => {
  throw new Error('something')
  return 'Kelsey'
}

doWork().then(result => console.log('result', result)).catch(e => console.log(e))