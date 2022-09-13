const customFetch = (products) => {
  return new Promise((res,rej) => {
    setTimeout(() => {
        res(products)
    }, 2000 )
  })
}

export default customFetch