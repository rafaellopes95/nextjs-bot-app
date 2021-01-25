# NextJS Chatbot App
This is a NextJS website with chatbot capabilities PoC.

## Running locally
1. Install dependencies with NPM: `npm install`
2. Build and start website:
```
npm run build
npm run dev
```
3. Access `http://localhost:3000`.

## Creating Lex bot
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
