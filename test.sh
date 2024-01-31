RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

assertContains() {
    expected=$1
    actual=$2
    message=$3

    if [[ $2 =~ $1 ]];
    then echo "${GREEN}$message${NC}\n";
    else echo "${RED}Womp womp: Expected $actual \n to contain '$expected'${NC}\n" ; killall node ; exit 1;
    fi
}

node index.js & 

sleep 4

RESPONSE=$(curl -s http://localhost:3000)

assertContains "Build: green" "$RESPONSE" "Response should contain build status"
assertContains "Velocity: 1" "$RESPONSE" "Response should contain velocity"
assertContains "Volatility: 2" "$RESPONSE" "Response should contain volatility"
assertContains "Release Count: 100000000000" "$RESPONSE" "Response should contain release count"

killall node
