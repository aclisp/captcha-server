let counter = 0

export default defineEventHandler((_event) => {
  counter++

  foo(counter)

  return {
    hello: 'world',
    counter,
  }
})

function foo(_p: string) {
  console.log('foo needs a string parameter')
}
