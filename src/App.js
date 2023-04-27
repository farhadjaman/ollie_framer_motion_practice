import { useEffect, useState } from "react";
import "./sass/main.scss";
import { AnimatePresence, motion } from "framer-motion";
// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loader from "./components/Loader";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (

    <AnimatePresence>
      {loading ? (
        <motion.div key='loader'>
          <Loader setLoading={setLoading} />
        </motion.div>

      ) : (
        <div


        >
          <Header />
          <Banner />
          {!loading && (
            <motion.div className="transition-image final">
              <motion.img src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                layoutId="main-image-1"
                transition={{
                  duration: 1.5,
                  ease: [0.6, 0.01, -0.05, 0.9],
                }}
              />
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
