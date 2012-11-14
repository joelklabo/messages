var redis = require('redis')
  , client = redis.createClient();

client.on("error", function (err) {
  console.log("Error " + err)
})

client.set("test", "a test value", function (err, res) {
  if (err) throw err
  console.log(res)
  client.get("test", function (err, res) {
    if (err) throw err
    console.log(res)
  })
})
