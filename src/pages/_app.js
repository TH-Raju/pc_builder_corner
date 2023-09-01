import { AuthProvider } from "@/context/AuthContext";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import '../styles/globals.css'
import { Toaster } from "react-hot-toast";
import { store } from "@/redux/store";
import { ProductProvider } from "@/context/ProductContext";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
   
  <Provider store={store}>
      <ProductProvider>
        <AuthProvider>
          <Toaster position="bottom-right" />
          <SessionProvider session={pageProps.session}>
            {getLayout(<Component {...pageProps} />)}
          </SessionProvider>
        </AuthProvider>
      </ProductProvider>
    </Provider>
   
  
  );
}
