import styles from './App.module.css';

import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
    <div>
      <Header></Header>
      <main className={styles.main}>
        <h1>Conteudo...</h1>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
