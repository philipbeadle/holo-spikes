cp -r ./dna ../technical
cp -r ./dna ../ico
cp -r ./dna ../welcome

jq -c '.Name = "technical"' dna/dna.json > ../technical/dna/dna.json
jq -c '.Name = "ico"' dna/dna.json > ../ico/dna/dna.json
jq -c '.Name = "welcome"' dna/dna.json > ../welcome/dna/dna.json
