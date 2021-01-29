import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import dynamic from "next/dynamic";

const NoSSRChatBot = dynamic(() => import("aws-amplify-react").then((mod) => mod.ChatBot), { ssr: false });
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

                <NoSSRChatBot
                    title="Order your flowers!"
                    botName="OrderFlowersBot"
                    welcomeMessage="Hello, how can I help you today?"
                    onComplete={this.handleComplete.bind(this)}
                    clearOnComplete={true}
                    voiceEnabled={true}
                    conversationModeOn={true}
                />
            </Layout>
        )
    }
}

export default OrderFlowers;
