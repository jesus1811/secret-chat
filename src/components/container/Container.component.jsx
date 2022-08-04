import Head from "next/head";
import { Content } from "./Styled";

export const Container = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="aplicacion web de chat" />
        <link rel="icon" href="/jesuDev.ico" />
      </Head>
      <Content>{children}</Content>
    </>
  );
};
