# Creating Lex bot through CLI
Check the steps from AWS docs: https://docs.aws.amazon.com/lex/latest/dg/gs-cli.html
Below are some commands for reference:

1. Create service role for Lex:
```
aws iam create-service-linked-role --aws-service-name lex.amazonaws.com
```
2. Create a custom slot (it specifies which types of flowers can be ordered):
```
aws lex-models put-slot-type --region us-east-1 --name FlowerTypes --cli-input-json file://bot\FlowerTypes.json
```
3. Create a bot intent (like a bot conversation):
```
aws lex-models put-intent --region us-east-1 --name OrderFlowers --cli-input-json file://bot\OrderFlowers.json
```
4. Create a bot:
```
aws lex-models put-bot --region us-east-1 --name OrderFlowersBot --cli-input-json file://bot\OrderFlowersBot.json
```
5. Check bot readiness (status key should be "READY"):
```
aws lex-models get-bot --region us-east-1 --name OrderFlowersBot --version-or-alias "$LATEST"
```
6. Get the custom slot checksum:
```
aws lex-models get-slot-type --region us-east-1 --name FlowerTypes --slot-type-version "$LATEST"
```
7. Create the custom slot version:
```
aws lex-models create-slot-type-version --region us-east-1 --name FlowerTypes --checksum "42971e7d-f892-4187-8ba7-ac46ce7fb89f"
```
8. Get the latest version of intent and save it on a file:
```
aws lex-models get-intent --region us-east-1 --name OrderFlowers --intent-version "$LATEST" > bot\OrderFlowers_V4.json
```
9. Save the intent revision:
```
aws lex-models put-intent --name OrderFlowers --cli-input-json file://bot\OrderFlowers_V4.json
```
10. Get the checksum of the latest revision of the intent (the checksum saved in this json will be used in next step):
```
aws lex-models get-intent --region us-east-1 --name OrderFlowers --intent-version "$LATEST" > bot\OrderFlowers_V4a.json
```
11. Publish new version of intent:
```
aws lex-models create-intent-version --region us-east-1 --name OrderFlowers --checksum "60b61886-5055-4f29-af73-29f680d8e9b1"

    "createdDate": "2021-01-26T22:51:33.799000-03:00",
    "version": "1",
    "checksum": "60b61886-5055-4f29-af73-29f680d8e9b1"
```
12. Get latest version of bot:
```
aws lex-models get-bot --region us-east-1 --name OrderFlowersBot --version-or-alias "$LATEST" > bot\OrderFlowersBot_V4.json
```
13. Put bot:
```
aws lex-models put-bot --name OrderFlowersBot --cli-input-json file://bot\OrderFlowersBot_V4.json
```
14. Get bot checksum:
```
aws lex-models get-bot --region us-east-1 --version-or-alias 1 --name OrderFlowersBot > bot\OrderFlowersBot_V4a.json
```
15. Publish new bot version:
```
aws lex-models create-bot-version --region us-east-1 --name OrderFlowersBot --checksum "8d03f403-85ca-457b-b2d6-2aa8ff8a63bd"
```
