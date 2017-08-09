const logRequest = {
  applyAfterware({ response }, next) {
    if (response.status === 400) {
      console.log('request failed.')
    }
    next()
  }
}

export { logRequest }
