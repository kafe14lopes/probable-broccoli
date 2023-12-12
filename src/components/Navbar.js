import styles from '../styles/Components.module.css';

export default function Navbar() {
    return (
        <div>
            <ul className={styles.navbar}>
                <li><a href='/logos'>Logotipos</a></li>
                <li><a href='/'>Inicio</a></li>
                <li><a href='/sobre'>Sobre Nós</a></li>
            </ul>
        </div>
    )
}