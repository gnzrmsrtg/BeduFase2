function addOne(value) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value + 1), 500)
    })
    }

    // addOne(1)
    // .then(result => {
    //     console.log(result) // 2
    //     return addOne(result)
    // })
    // .then(result => console.log(result)) // 3;

    function addOne(value) {
        return new Promise(resolve => {
          setTimeout(() => resolve(value + 1), 500)
        })
      }
      
      addOne(1)
        .then(result => {
          console.log(result)
          return addOne(result)
        })
        .then(result => {
          console.log(result)
          return Promise.reject('Oops!')
        })
        .catch(err => {
            console.log(err) // Oops!
            return addOne(1)
          })
        .then(result => {
           console.log(result) // 2
            return addOne(result)
        })
        .then(result => console.log(result)); // 3