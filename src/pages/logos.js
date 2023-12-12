import styles from '../styles/Pages.module.css';
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function Logotipo({ logotipo }) {
    return (
        <div>

            <Navbar />

            <div className={styles.caixa_logo}>

                <div className={styles.caixa_logo_bordas}>
                    <h1> Logotipos </h1>
                    {logotipo.map((logotipo, index) => (
                        <Link href='/profile/[id]' as={`/profile/${index}`} class="blau">
                            <div key={logotipo.id}><p>{logotipo.nome}</p></div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />

        </div>
    )
}


export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=logotipo')
    const repo = await res.json()
    const logotipo = await repo;
    return {
        props: { logotipo }
    }
})


export default Logotipo;