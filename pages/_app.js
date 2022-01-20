import "../styles/global.css";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import awsconfig from "../src/aws-exports";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);
Amplify.configure({
  Interactions: {
    bots: {
      OrderFlowersBot: {
        name: "OrderFlowers_dev",
        alias: "dev",
        region: "us-east-1",
      },
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <Authenticator>
      {({ signOut, user }) => <Component {...pageProps} />}
    </Authenticator>
  );
}
