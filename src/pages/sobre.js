import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Pages.module.css';

export default function Home() {

    return (

        <div>

            <Navbar />

            <div className={styles.sobre}>
                <h1> Sobre Nós</h1>

                <h2>Kelson e Gabrielly Rodrigues 6B</h2>

                <p>Site de descrição de logotipos</p>

            </div>

            <Footer />
            
        </div>
    )
}
