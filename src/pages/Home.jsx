import React from "react";
import '../styles/Home.css';


import HeroInicial from "../componentes/HeroInicial";
import CardInfo from "../componentes/CardInfo";
import Coments from "../componentes/Coments";
import Titulo from "../componentes/Titulo";
import CardLivro from "../componentes/CardLivro";
import AddComent from "../componentes/AddComentModal";
import LatestBooks from "../componentes/LatestBooks";

import img from '../assets/images/img';
import ComentsData from "../assets/DataStatic/DataComents";
import SomeBooks from '../assets/DataStatic/DataSomeBooks';


function Home(){

    

    return(
        <div>
            <HeroInicial
                imagemB={img.HeroImg}
                titulo='Ressonância Literária'
                texto='Todos os livros que você pode sonhar a um simples click de distância. Entre de corpo e alma por entre os mais diversos universos que aqui encontrar'
                
            />

            
            <Titulo title='Nossos livros mais recentes' />
            {/* <div className="Cards">

                <CardLivro 
                    id={0}
                    imagem={img.L01}
                    preco={40.00}
                    descricao="Um bom livro para se divertir no mundo feérico"
                    titulo='The Hobbit'
                    key={0}
                />
                <CardLivro 
                    id={1}
                    imagem={img.L02}
                    preco={40.00}
                    descricao="Um bom livro para se divertir no mundo feérico"
                    titulo='The Hobbit'
                    key={1}
                />
                <CardLivro 
                    id={2}
                    imagem={img.L03}
                    preco={40.00}
                    descricao="Um bom livro para se divertir no mundo feérico"
                    titulo='The Hobbit'
                    key={2}
                />
                <CardLivro 
                    id={3}
                    imagem={img.L04}
                    preco={40.00}
                    descricao="Um bom livro para se divertir no mundo feérico"
                    titulo='The Hobbit'
                    key={3}
                />
                <CardLivro 
                    id={4}
                    imagem={img.L05}
                    preco={40.00}
                    descricao="Um bom livro para se divertir no mundo feérico"
                    titulo='The Hobbit'
                    key={4}
                />
                <CardLivro 
                    id={5}
                    imagem={img.L06}
                    preco={40.00}
                    descricao="Um bom livro para se divertir no mundo feérico"
                    titulo='The Hobbit'
                    key={5}
                />
                <CardLivro 
                    id={6}
                    imagem={img.L07}
                    preco={40.00}
                    descricao="Um bom livro para se divertir no mundo feérico"
                    titulo='The Hobbit'
                    key={6}
                />
                <CardLivro 
                    id={7}
                    imagem={img.L08}
                    preco={40.00}
                    descricao="Um bom livro para se divertir no mundo feérico"
                    titulo='The Hobbit'
                    key={7}
                />
            </div> */}
            <LatestBooks livros={SomeBooks}  />

            <Coments Data={ComentsData} />
            <br/><br/>
            <AddComent  />
            <br/>

            <div className="cards-info">
                <CardInfo
                    img={img.IconCardInfo1}
                    title="Recursos"
                    text="Nossa página está repleta de funcionalidades que visam o melhor para os usuários, além disso, presamos muito pelo estado dos livros"
                    label="Saiba Mais"
                />

                <CardInfo
                    img={img.IconCardInfo2}
                    title="Público"
                    text="Livros para todas as idades e gostos. Maior facilidade e segurança para os pais no cuidado com o conteúdo visto pelos filhos"
                    label="Saiba Mais"
                />

                <CardInfo
                    img={img.IconCardInfo3}
                    title="E-Books"
                    text="Para aqueles que desejam o livro o mais depressa possível ou para aqueles que querem encontrar o precinho mais em conta ainda"
                    label="Saiba Mais"
                />
            </div>


        </div>
    );
}

export default Home;

