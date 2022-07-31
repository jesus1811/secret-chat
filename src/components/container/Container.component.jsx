import Head from "next/head";
import { Content } from "./Styled";

const Container = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="aplicacion web de chat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content>{children}</Content>
    </>
  );
};

export default Container;
