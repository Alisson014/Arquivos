import React from "react";
import { Link } from "react-router-dom";
// import '../styles/LatestBooks.css';{dispatch(ReceberId(d.id))}Onclick={() => }
    import CardLivro from "./CardLivro";

function LatestBooks({livros}){
    return(
            <div className="Cards">
                {livros.map((d) => (
                     <Link to={`/Livrodetalhe`} key={d.id} className="LinkCard">
                        <CardLivro
                            key={d.id}
                            titulo={d.titulo}
                            descricao={d.descricao}
                            imagem={d.imagem}
                            preco={d.preco}
                        />
                    </Link>
                ))}
            </div>
    );
}

export default LatestBooks;