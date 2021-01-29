import "../styles/global.css";
import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "../src/aws-exports";
import "bootstrap/dist/css/bootstrap.min.css";

Amplify.configure(awsconfig);
Amplify.configure({ 
    Interactions: {
        bots: {
            "OrderFlowersBot": {
                "name": "OrderFlowersBot",
                "alias": "dev",
                "region": "us-east-1",
            },
        }
    } 
});

export default function App({ Component, pageProps }) {
    return (
        <AmplifyAuthenticator>
            <Component {...pageProps} />
        </AmplifyAuthenticator>
    );
}