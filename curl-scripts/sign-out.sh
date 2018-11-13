# TOKEN=<token> sh curl-scripts/sign-out.sh

curl "https://wdi-library-api.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
