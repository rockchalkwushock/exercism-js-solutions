var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  return who === undefined ?
    'One for you, one for me.' :
    `One for ${who}, one for me.`
};

module.exports = TwoFer;
