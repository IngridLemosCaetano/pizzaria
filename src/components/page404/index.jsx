import "./style.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom'

function NaoLocalizado() {
    return (
        <div className="container">
            <div className="animation">
                <DotLottieReact src="https://lottie.host/b8d69574-9c8c-46bc-8ddc-7686c49c595c/FWHlSLwgGT.lottie" loop autoplay/>
            </div>
            <h2>Pizza não encontrada...</h2>
            <Link to="/">Início</Link>
        </div>
    );
}

export default NaoLocalizado;



