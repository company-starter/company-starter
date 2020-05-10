#! env sh

test -z "$INIT_CWD" && echo "Error: This does not seem to be run by npm" && exit
test "$PWD" = "$INIT_CWD" && echo "Error: This cannot be executed in this directory" && exit

# eslint
# cp lib/.eslintrc.json $INIT_CWD/.eslintrc.json

# run the js postinstall
node lib/postinstall.js
