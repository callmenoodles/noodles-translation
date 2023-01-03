import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>Contact - Noodles Translation</title>
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <meta charSet="utf-8"></meta>
        <meta
          name="description"
          content="Contact Noodles Translation if you need translation, transcription or proofreading. Feel free to ask any questions."
        ></meta>
        <meta
          name="keywords"
          content="Noodles, Translation, Noodles Translation, Translate Dutch to English, Translate English to Dutch, Translate Dutch, Translate English, Translate Noodles, Alex Lushiku, Lushiku, Noodles Design, Web Development, Web Design, Proofreading, Dutch Proofreading, Dutch Translator, English Translator, Transcription, Dutch Transcription"
        ></meta>
        <meta name="author" content="Noodles Translation"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:title" content="Contact" />
        <meta
          property="og:image"
          content="https://i.postimg.cc/C5PRKRMh/Noodles-Translation.jpg"
        />
        <meta
          property="og:url"
          content="https://translation.noodles.services/contact"
        />
        <meta property="og:type" content="contact" />
        <meta
          property="og:description"
          content="Feel free to contact me. I will get back to you as soon as possible."
        />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Header />
      <div
        className="flex flex-col items-center justify-center mb-24"
        style={{ minHeight: "calc(100vh - 64px - 6rem)" }}
      >
        <div className="flex flex-col maxmd:w-4/5 md:w-144">
          <h1 className="text-3xl font-semibold mt-32">Contact</h1>
          <h3 className="mb-8 mt-2">
            Send me a message if you need English to Dutch or Dutch to English
            translation, transcription, or proofreading. Questions? Don't
            hesitate to ask!
          </h3>
          <form action="/api/message" method="post">
            <div className="flex flex-col mb-4">
              <label className="font-semibold mb-2">Name</label>
              <input
                className="border focus:border-primary rounded-md p-2 pl-3 text-black text-lg"
                name="name"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="font-semibold mb-2">Email</label>
              <input
                className="border focus:border-primary rounded-md p-2 pl-3 text-black text-lg"
                type="email"
                name="email"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="font-semibold mb-2">Service</label>
              <select
                className="border focus:border-primary rounded-md p-2 pl-3 text-black text-lg"
                name="topic"
              >
                <option value="Translation">Translation</option>
                <option value="Proofreading">Proofreading</option>
                <option value="Transcription">Transcription</option>
                <option value="Question">Question</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <label className="font-semibold mb-2">Message</label>
              <textarea
                className="border focus:border-primary rounded-md p-2 pl-3 text-black text-lg"
                name="message"
              ></textarea>
            </div>
            <button className="flex flex-col mb-4 bg-green-500 w-full rounded-md p-2 text-white">
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
