function Home() {
    return (
        <section
        className="bg-indigo-900 flex justify-between"
           
        >
            <article
            className="container grid grid-cols-2 text-white"
                
            >
                {/* Lado Esquerdo: Texto e Botão */}
                <div 
                className="flex flex-col justify-center items-center gap-4 py-4"
                    
                >
                    <h2
                      className="text-5xl font-bold" 
                    >
                        Seja Bem Vindo(a)!
                    </h2>
                    <p
                    className="text-xl"
                    >
                 Expresse aqui seus pensamentos e opiniões

                    </p>

                    <div
                    className="flex justify-around gap-4"
                        
                    >
                        <div
                        className="rounded border-white border-solid border-2 py-2 px-4"
                        >                        Nova Postagem
</div>
                    </div>
                </div>

                {/* Lado Direito: Imagem */}
                <figure
                    className="flex justify-center"
                >
                    <img
                        src="https://i.imgur.com/fyfri1v.png"
                        alt="Imagem Página Home"
                       className="w-2/3"
                    />
                </figure>
            </article>
        </section>
    );
}

export default Home;