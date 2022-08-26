// async function foo() {
//     return 'Hello World';
//   }
  
//   foo().then(value => console.log(value)) // Hello World 


async function foo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hell of world'), 1000);
        setTimeout(() => reject('failed'), 1000)
    })
}

// async function bar() {
//     let result = await foo();
//     console.log(result)
// }

// bar()

async function bar() {
    try {
        let result = await foo();
        console.log(result)
    } catch(err) {
        console.log(err)
    }
}

bar()