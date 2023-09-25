// Main.tsx

import { useState } from 'react'
import Projeto from './../projeto/Projeto'
import './Main.css'

type ProjetoType = {
    id: number,
    titulo: string,
    descricao: string,
    imagem: string,
    links: { nome: string, url: string }[] // Array de objetos com nome e URL dos links
}

export default function Main() {
    const [texto, setTexto] = useState("")

    const projetos: ProjetoType[] = [
        {
            id: 1,
            titulo: 'Louis Airlines',
            descricao: "Proyecto de una página de aviación realizado en NODE con EJS para la asignatura Sever-Side Programming por la profesora Tabatta de Souza Izael",
            imagem: '/louis-airlines.png',
            links: [
                { nome: 'página web', url: 'https://louis-airlines.luisenrique20.repl.co/' },
                { nome: 'Replit', url: 'https://replit.com/@LuisEnrique20/Louis-Airlines' }
            ]
        },
        {
            id: 2,
            titulo: 'Proyecto Netflix con Node',
            descricao: 'Proyecto de una página que replica Netflix realizado en NODE y Javascript para la asignatura Sever-Side Programming por la profesora Tabatta de Souza Izael.',
            imagem: '/netflix-com-node.png',
            links: [
                { nome: 'página web', url: 'https://exemplo.com/site-principal' },
                { nome: 'Codigo del Proyecto en Replit', url: 'https://replit.com/@LuisEnrique20/projeto-netflix-com-node' }
            ]
        },
        {
            id: 3,
            titulo: 'Barbie DreamHouse V2',
            descricao: "Proyecto desarrollado en la asignatura Frameworks 2 por el profesor Guilherme Figueiredo Terenciani 'El Terere' con la tematica inspirada en la pelicula de Barbie de este año.",
            imagem: '/barbie-dreamhousev2.png',
            links: [
                { nome: 'Site', url: 'https://barbie-dreamhousev2.vercel.app/' },
                { nome: 'GitHub', url: 'https://github.com/LouisFaker/BarbieDreamhousev2' }
            ]
        },
    ]

    function TrataTexto(e: React.ChangeEvent<HTMLInputElement>) {
        setTexto(e.target.value)
    }

    return (
        <>
            <section className="sobre-mim">
                <h2>Acerca de mi</h2>
                    <p>
                    ¡Hola! Soy Luis Enrique, un estudiante del curso técnico en informática para internet del Instituto Federal de Mato Grosso del Sur, Campus Naviraí. 
                    Tengo 18 años y soy un apasionado de la tecnología y los deportes, como el Atletismo y el Tenis. 
                    Estoy encantado de darles la bienvenida a mi portafolio personal.
                    </p>
                    <p>
                    Creo firmemente en el poder de la tecnología para resolver problemas complejos y transformar el mundo. 
                    Siempre estoy ansioso por aprender mas cosas que me permitan aplicar mis conocimientos y contribuir con los otros.
                    Cuando no estoy inmerso en el mundo de la tecnología, me encontrarán disfrutando de mi pasión por el atletismo y el Ciclismo también. 
                    Estos deportes me flipan mucho y complementan mi vida académica.
                    </p>
                    <p>
                    Estoy a gustito de compartir mi trabajo y mis proyectos en este portafolio. Si desean colaborar o simplemente charlar sobre temas como la tecnologia y los deportes, no duden en ponerse en contacto conmigo chavales. 
                    ¡Espero que disfruten explorando mi trabajo y mis proyectos!
                    </p>
            </section>
            <div className="campo_pesquisa">
                <p>Busque um Projeto</p>
                <input
                    type="text"
                    className='botao_pesquisa'
                    placeholder='Pesquise um Projeto'
                    onChange={TrataTexto}
                />
                {texto && <p>Resultados Para: {texto} </p>}
            </div>
            <main className="content-main">
                <div className="projetos-container">
                    {projetos
                        .filter((projeto) => projeto.titulo.toLowerCase().includes(texto.toLowerCase()))
                        .map((projeto) => (
                            <Projeto
                                key={projeto.id}
                                descricao={projeto.descricao}
                                titulo={projeto.titulo}
                                imagem={projeto.imagem}
                                links={projeto.links}
                            />
                        ))}
                </div>
            </main>
        </>
    )
}
