'use strict';

function genesis() {
 return true
}

function bridgeGenesis(side, dna, appData){
  debug(getBridges()[0].ToApp)
  debug('App.Agent.String ' + App.Agent.String.slice(0, App.Agent.String.indexOf('}') + 1))
  var Agent = JSON.parse(App.Agent.String.replace(/'/g, '"').slice(0, App.Agent.String.indexOf('}') + 1))
  var keyMgtAppDNA = Agent.KeyMgtAppDNA
  debug(keyMgtAppDNA)
  debug('getGenesisPublicKey' + bridge(keyMgtAppDNA, 'verify', 'getGenesisPublicKey', ''))
  var genesisPublicKey = bridge(keyMgtAppDNA, 'verify', 'getGenesisPublicKey', '')
  var signature = bridge(keyMgtAppDNA, 'verify', 'getSignature', '')
  debug('signature ' + signature)
  var messageVerified = verifySignature(signature, 'Revocation Method', genesisPublicKey)
  return messageVerified;
}
