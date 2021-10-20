// Styles
import styles from "./App.module.css";
// Styles

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// Components

function App() {
  return (
    <main className={styles.main}>
      <Header />
      <Footer />
    </main>
  );
}

export default App;
