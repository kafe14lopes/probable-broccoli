import styles from '../../styles/Pages.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


function Profile({ logotipo }) {
    return (
        <div>

            <Navbar />


            <div className={styles.caixa_logo}>

            <div className={styles.caixa_logo_bordas}>

                    <p>Nome: {logotipo.nome}</p>
                    <p>{logotipo.descricao}</p>

                    </div>

            </div>


            <Footer />
        </div>
    );
}

export const getStaticProps = async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=logotipo');
    const repo = await res.json();
    const logotipo = repo[context.params.id];
    return {
        props: { logotipo }
    };
};


export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=logotipo');
    const repo = await res.json();
    const Logotipo = repo;
    const paths = Logotipo.map((logotipo, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}


export default Profile;
