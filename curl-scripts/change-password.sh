# TOKEN=<token> OLD_PASSWORD=123 NEW_PASSWORD=321 sh curl-scripts/json/change-password.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=BAhJIiU0NjZhNmJmODI1MTAyMjdjZWY5MTg2MGE2MzI5ZmQzOQY6BkVG--d4d5280a3b9a04643a576362d13a638ac41ac1a7" \
  --data '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'

echo
