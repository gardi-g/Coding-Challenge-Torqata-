const express = require('express');
const fetch = require('node-fetch');

const app = express();
app.enable('trust proxy');

const METADATA_NETWORK_INTERFACE_URL =
  'http://metadata/computeMetadata/v1/' +
  '/instance/network-interfaces/0/access-configs/0/external-ip';

const getExternalIp = async () => {
  const options = {
    headers: {
      'Metadata-Flavor': 'Google',
    },
    json: true,
  };

  try {
    const response = await fetch(METADATA_NETWORK_INTERFACE_URL, options);
    const ip = await response.json();
    return ip;
  } catch (err) {
    console.log('Error while talking to metadata server, assuming localhost');
    return 'localhost';
  }
};

app.get('/', async (req, res, next) => {
  try {
    const externalIp = await getExternalIp();
    res.status(200).send(`External IP: ${externalIp}`).end();
  } catch (err) {
    next(err);
  }
});

const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});