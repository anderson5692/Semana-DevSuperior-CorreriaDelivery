import './styles.css';
import {ReactComponent as MainImage} from './main.svg'
import Footer from '../Footer';

function Home() {
    return(
        <>
            <div className="home-container">
            <div className="home-content">
            <div className="home-actions">
                <h1 className="home-title">
                    Bateu aquela fominha, <br/> peça já no Correria!!!
                </h1>
                <h3 className="home-subtitle"> 
                    Escolha seu pedido e deixa<br/> a correria com a gente
                </h3>
                <a href="link pra pg pedidos" className="home-btn-order">
                    FAZER PEDIDO
                </a>
                </div>
                <div className="home-image">
                    <MainImage/>
                </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home;