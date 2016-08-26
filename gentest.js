var   dependencies = {
  "aws-sign2": "~0.6.0",
  "aws4": "^1.2.1",
  "bl": "~1.1.2",
  "caseless": "~0.11.0",
  "combined-stream": "~1.0.5",
  "extend": "~3.0.0",
  "forever-agent": "~0.6.1",
  "form-data": "~1.0.0-rc4",
  "har-validator": "~2.0.6",
  "hawk": "~3.1.3",
  "http-signature": "~1.1.0",
  "is-typedarray": "~1.0.0",
  "isstream": "~0.1.2",
  "json-stringify-safe": "~5.0.1",
  "mime-types": "~2.1.7",
  "node-uuid": "~1.4.7",
  "oauth-sign": "~0.8.1",
  "qs": "~6.2.0",
  "stringstream": "~0.0.4",
  "tough-cookie": "~2.3.0",
  "tunnel-agent": "~0.4.1"
};
var dependencies_arr = Object.keys(dependencies);

for (var i = 0; i <dependencies_arr.length; i++){
  console.log('node test.js ', dependencies_arr[i], ' ', dependencies[dependencies_arr[i]], " &&")
}