'use strict';

function genesis() {
  return true
}

function bridgeGenesis(side, dna, appData) {
  debug('HoloChat ' + App.Name + ' Bridged to: DNA: ' + dna + ' appData: ' + appData)
  var Agent = JSON.parse(App.Agent.String.replace(/'/g, '"').slice(0, App.Agent.String.indexOf('}') + 1))
  var genesisPublicKey = bridge(Agent.KeyMgtAppDNA, 'verify', 'getGenesisPublicKey', '')
  var signature = bridge(Agent.KeyMgtAppDNA, 'verify', 'getSignature', '')
  return verifySignature(signature, 'Revocation Method', genesisPublicKey)
}
