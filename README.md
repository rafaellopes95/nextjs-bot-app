# NextJS Chatbot App
This is a NextJS website with chatbot capabilities PoC. Chatbot is powered by Amazon Lex service.

## Requirements
This PoC requires a AWS account to run it on local machine, as well as Cognito and Lex resources properly provisioned on that account. You can folow below instructions to quickly provision them using Amplify CLI.

### Setting up Amplify
In order to add Lex easy integration the Amplify can be used.
After this is installed, it is necessary to configure both authentication and the bot interaction as detailed in next sections.
Amplify getting started doc: https://docs.amplify.aws/start/getting-started/installation/q/integration/react

### Adding auth
Detailed instructions can be found on this documentation: https://docs.amplify.aws/lib/auth/getting-started/q/platform/js

1. Add auth with `amplify add auth` and complete the guided configuration with default options. It will create the amplify/backend folders with necessary code to deploy a Cognito user pool for the app.
2. Deploy Cognito to your account with `amplify push` command. You should see in outputs that resources are being provisioned into your AWS account.
3. On _app.js include the Amplify configuration from auto-generated src/aws-exports.js file in order to integrate Cognito with your app:
```javascript
import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";

Amplify.configure(awsconfig);
```
4. You need to add the AmplifyAuthenticator component so auth is handled for your app:
```javascript
export default function App({ Component, pageProps }) {
    return (
        <AmplifyAuthenticator>
            <Component {...pageProps} />
        </AmplifyAuthenticator>
    );
}
```
### Adding bot interaction
Detailed instructions can be found on this documentation: https://docs.amplify.aws/lib/interactions/getting-started/q/platform/js
1. Add bot interaction with `amplify add interactions` and completed guided configuration, picking a sample bot like OrderFlowers. It will create the amplify/interactions folders with necessary code to deploy a Lex bot for the app.
2. Deploy Lex to your account with `amplify push` command. You should see in outputs that resources are being provisioned into your AWS account.

You will notice that src/aws-exports.js file now contains configurations for the interaction too.

## Running locally
1. If not done yet, install dependencies with NPM: `npm install`
2. Build and start website:
```
npm run build
npm run dev
```
3. Access `http://localhost:3000`.

## Further readings
- Complete Guide to Amplify and Next.js: https://dev.to/dev_sahan/complete-guide-to-amplify-and-next-js-4318
