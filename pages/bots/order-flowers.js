import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import { ChatBot } from "aws-amplify-react";

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

                <ChatBot
                    title="Order your flowers!"
                    botName="OrderFlowersBot"
                    welcomeMessage="Hello, how can I help you today?"
                    onComplete={this.handleComplete.bind(this)}
                    clearOnComplete={true}
                    voiceEnabled={true}
                    conversationModeOn={false}
                />
            </Layout>
        )
    }
}

export default OrderFlowers;
