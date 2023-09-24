import { useState } from 'react'
import Projeto from './../projeto/Projeto'
import './Main.css'
type ProjetoType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Main() {
    const [texto,setTexto]=useState("")

    const projetos:ProjetoType[] = [
        {
            id:1,
            titulo:'Louis Airlines',
            sinopse:"Proyecto de una página de aviación realizado en NODE con EJS para la asignatura Sever-Side Programming por la profesora Tabatta de Souza Izael",
            imagem:'/louis-airlines.png'
        },
        {
            id:2,
            titulo:'projeto Barbie',
            sinopse:'Depois de ser expulsa da Barbieland por ser.',
            imagem:'/KEN.png'
        },
        {
            id:3,
            titulo:'projeto Barbie',
            sinopse:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
            imagem:'/boneca.jpg'
        },
        {
            id:4,
            titulo:'Barbie',
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/barbie.png'
        },
    ]

    //O parâmetro "e" da minha função será o meu evento que ocorreu
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        //console.log(e.target.value)
        //Como eu faço para mudar o texto para "TERE"
        setTexto(e.target.value)
    }
    return (
        <>
            <div className="campo_pesquisa">
                <p>Busque um Projeto</p>
                <input type="text" 
                       className='botao_pesquisa'
                       placeholder='Pesquise um Projeto'
                       onChange={TrataTexto} />
                {texto && <p>Resultados Para: {texto} </p>}
            </div>
            <main className="content-main">
                {/* 
                    Use algo do vetor para tentar criar os projetos 
                */}
                {
                    projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto.toLowerCase())).map(
                        (projeto)=>
                            <Projeto 
                                key={projeto.id}
                                sinopse={projeto.sinopse}
                                titulo={projeto.titulo}
                                imagem={projeto.imagem}
                            />
                    )
                }
            </main>
        </>
    )
}