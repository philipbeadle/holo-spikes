'use strict';

function genesis() {
  return true;
}

function bridgeGenesis(side, dna, appData){
  debug('Social DNA ' + App.Name + ' Bridged to: DNA: ' + dna + ' appData: ' + appData)
  return true;
}

function listMessagesBridged(value){
  var channelDNA = call('channels', 'getDNA', value.channel)
  debug('listMessagesBridged' + App.Name + JSON.stringify(value) + value.channel)
  var messages = bridge(channelDNA, 'messages', 'listMessages', '')
  return messages
}

function listMessages(){
  debug('listMessages' + App.Name)
  return 'getMessages' + App.Name
}

function createMessageBridged(value){
  debug(value)
  var channelDNA = call('channels', 'getDNA', {"channel": value.channel}).replace(/"/g, '')
  debug('channelDNA ' + channelDNA)
  debug('createMessageBridged' + App.Name + JSON.stringify(value) + value.channel)
  var createMessage = bridge(channelDNA, 'messages', 'createMessage', {'message': value.message})
  return createMessage
}

function createMessage(value){
  debug('createMessage' + App.Name + value.message)
  var createMessage = commit('message', {'message': value.message})
  debug('createMessage ' + createMessage)
  debug('link' + commit('message_link', { Links:[{Base: App.DNA.Hash, Link: createMessage, Tag: 'message'}]}))
  return createMessage
}

function validateCommit (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case "message":
      return true
    case "message_link":
      return true
    default:
      // invalid entry name
      return false;
  }
}

function validatePut (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case "message":
      return true;
    case "message_link":
      return true
    default:
      // invalid entry name
      return false;
  }
}

function validateMod (entryName, entry, header, replaces, pkg, sources) {
  switch (entryName) {
    case "message":
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validateDel (entryName, hash, pkg, sources) {
  switch (entryName) {
    case "message":
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validateLink(linkEntryType,baseHash,links,pkg,sources) {
  return true;
}

function validatePutPkg (entryName) {
  return null;
}

function validateModPkg (entryName) {
  return null;
}

function validateDelPkg (entryName) {
  return null;
}

function validateLinkPkg (entryName) {
  return null;
}
