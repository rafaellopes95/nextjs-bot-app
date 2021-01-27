import Layout from "../../components/layout";
import Head from "next/head";
import { ChatBot } from "aws-amplify-react";

export default function OrderFlowers() {
    return (
        <Layout>
            <Head>
                <title>Order Flowers</title>
            </Head>
            <h1>Order Flowers Service</h1>

            <ChatBot
                title="OrderFlowers"
                botName="OrderFlowersBot"
                welcomeMessage="Hello, how can I help you today?"
                conversationModeOn={false}
            />
        </Layout>
    )
}