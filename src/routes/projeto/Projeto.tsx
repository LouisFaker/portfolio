import './Projeto.css';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type ProjetoProps = {
    titulo: string,
    descricao: string,
    imagem: string,
    links: { nome: string, url: string }[] // Array de objetos com nome e URL dos links
}

function Projeto(props: ProjetoProps) {
    const [ref, inView] = useInView({
        triggerOnce: true, // A animação será acionada apenas uma vez quando o elemento estiver visível
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <div className={`projeto-content ${isVisible ? 'in-view' : ''}`} ref={ref}>
            <div className="foto_projeto">
                <img className="img-projeto" src={props.imagem} alt="" />
            </div>
            <div className="text-barbie">
                <h1>{props.titulo}</h1>
                <p className="descricao">{props.descricao}</p>
                <div className="links">
                    {/* Mapeie os links e gere botões para cada um */}
                    {props.links.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                            <button>{link.nome}</button>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projeto;