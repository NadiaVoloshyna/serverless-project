'use strict';

module.exports.hello = (event, context, callback) => {
  console.log(event);

  let message = 'HELLO WORLD!';
  const name = event.queryStringParameters && event.queryStringParameters.name;
  if(name !== null) {
    message = 'Hello ' + name;
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: message,
        input: event,
      }),
  };

  callback(null, response);
};
