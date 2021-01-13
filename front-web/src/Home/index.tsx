import './styles.css';
import {ReactComponent as MainImage} from './main.svg'
import Footer from '../Footer';
import { Link } from 'react-router-dom';

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
                <Link to="/orders" className="home-btn-order">
                    FAZER PEDIDO
                </Link>
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