function Home() {
    return (
        <div
            style={{
                backgroundColor: "#312e81",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <article
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr", // Define as duas colunas
                    color: "white",
                    width: "100%",
                    maxWidth: "1280px",
                }}
            >
                {/* Lado Esquerdo: Texto e Botão */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "1rem",
                        paddingTop: "2rem",
                        paddingBottom: "1rem"
                    }}
                >
                    <h2
                        style={{
                            fontSize: "3rem",
                            fontWeight: "bold",
                        }}
                    >
                        Seja Bem Vindo(a)!
                    </h2>
                    <p style={{ fontSize: "1.25rem" }}>
                        Expresse aqui seus pensamentos e opiniões
                    </p>

                    <div
                        style={{
                            borderRadius: "0.5rem",
                            color: "white",
                            border: "2px solid white",
                            padding: "0.5rem 1rem", // Corrigido de vazio para valor real
                        }}
                    >
                        Nova Postagem
                    </div>
                </div>

                {/* Lado Direito: Imagem */}
                <figure
                    style={{
                        display: "flex",
                        justifyContent: "center"
                        
                    }}
                >
                    <img
                        src="https://i.imgur.com/fyfri1v.png"
                        alt="Imagem Página Home"
                        style={{
                            width: "60%", // Ajustado para preencher melhor o grid
                            
                        }}
                    />
                </figure>
            </article>
        </div>
    );
}

export default Home;