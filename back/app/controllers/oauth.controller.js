const oAuthConfig = require("../../config/oauth.config.js");
const crypto = require("crypto");
const { ClientCredentials, ResourceOwnerPassword, AuthorizationCode } = require('simple-oauth2');
const client = new AuthorizationCode(oAuthConfig);

exports.authorize = (req, res) => {
  const randomString = crypto.randomBytes(32).toString('hex');
  const authorizationUri = client.authorizeURL({
    redirect_uri: 'http://' + process.env.DOMAIN + ':' + process.env.PORT + '/oauth/callback',
    state: randomString
  });
  res.cookie('state', randomString, { maxAge: 300, httpOnly: true })
  res.redirect(authorizationUri);
  return;
};

exports.callback = async (req, res) => {
  if (req.cookies.stage != req.query.stage) {
    res.status(500).send({
      message: 'SCRF'
    });
    return;
  }
  const tokenParams = {
    code: req.query.code,
    redirect_uri: 'http://' + process.env.DOMAIN + ':' + process.env.PORT + '/oauth/callback'
  };

  try {
    const accessToken = await client.getToken(tokenParams);
    res.send({
      message: accessToken
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
  return;
};

exports.session = (req, res) => {
  res.send({
    message: "TO DO"
  });
  return;
};