import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Instagram 2.0  </title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <h1>This is the INSTAGRAM 2.0 BUILD</h1>
      {/* Header */}
      <Header />

      {/* Feed */}

      {/* Modal */}
    </div>
    

  );
}