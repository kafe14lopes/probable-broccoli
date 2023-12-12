import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import styles from '../styles/Pages.module.css';

export default function Home() {
  return (
      <div>

          <Navbar />

              <div className={styles.home}>

                
                <h1> Magrellons </h1>
                
                

              </div>
          <Footer />
      </div>
  )
}