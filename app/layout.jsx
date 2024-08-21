import Navbar from "@components/Navbar";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share Ai Prompts",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradiant"></div>
          </div>

          <main className="app">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Rootlayout;
