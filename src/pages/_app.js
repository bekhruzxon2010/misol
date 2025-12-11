import SignUp from '@/pages/sign-up'
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SignUp /> 
      <Component {...pageProps} />
    </>
  );
}
