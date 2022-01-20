import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import { AmplifyChatbot } from "@aws-amplify/ui-react/legacy";

class OrderFlowers extends React.Component {
  handleComplete(error, confirmation) {
    if (error) {
      console.log(error);
    } else {
      alert("Success! " + JSON.stringify(confirmation));
    }
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Flowers Service</title>
        </Head>

        <AmplifyChatbot
          title="Order your flowers!"
          botName="OrderFlowersBot"
          welcomeMessage="Hello, how can I help you today?"
          onComplete={this.handleComplete.bind(this)}
          clearOnComplete={false}
          voiceEnabled={true}
          conversationModeOn={true}
        />
      </Layout>
    );
  }
}

export default OrderFlowers;
