var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage',() => {
  it('should generate correct message', () => {
    var from = 'jen';
    var text ='Some Message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});


describe('generateLocationMessage',() => {
  it('should generate correct location', () => {
    var from = 'admin';
      var latitude='19';
    var longitude ='15';
    var url = 'https://www.google.com/maps?q=19,15';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});
