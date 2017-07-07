const InitClient = require('initai-node')

const runLogic = eventData => {
  return new Promise((resolve, reject) => {
    const client = InitClient.create(eventData)

    // Use `done` to wrap `sendResult` from any number of places in your code
    const done = () => client.sendResult().then(resolve).catch(reject)

    // Add your custom logic here!
    client.addTextResponse('Responding from `runLogic.js`!')
    done()
  })
}

module.exports = runLogic
