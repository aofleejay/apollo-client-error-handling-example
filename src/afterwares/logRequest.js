const logRequest = {
  applyAfterware({ response }, next) {
    if (response.status === 200) {
      console.log('log from afterware.')
    }
    next()
  }
}

export { logRequest }
