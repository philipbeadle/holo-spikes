

"{'KeyMgtAppDNA':'Qmf9vufB4tbbFmjU5uzmeHa6CFn24SeU9JAbqxZQAqDbwR','KeyRevocationAuth':'QmRztFDGmZ8H7b7MLuf4gCXEYAY6oympT22k4aFQJs7ktg'}"

hcdev -execpath=$HOME/.holochaindev1 -no-nat-upnp -port=6001 -agentID="{'KeyMgtAppDNA':'QmbBAPW6fimVwxVBEtH5QiPSpPTiTqXangYXcCxoyENgUd','KeyRevocationAuth':'QmRztFDGmZ8H7b7MLuf4gCXEYAY6oympT22k4aFQJs7ktg'}" -mdns=true web


Run HOLOPATH=/Users/philipbeadle/.holochaindev hcadmin join . <new channel name> to create a new channel.

hcdev -no-nat-upnp -port=6001 -agentID="{'KeyMgtAppDNA':'QmbBAPW6fimVwxVBEtH5QiPSpPTiTqXangYXcCxoyENgUd','KeyRevocationAuth':'QmRztFDGmZ8H7b7MLuf4gCXEYAY6oympT22k4aFQJs7ktg'}" -mdns=true test messages
