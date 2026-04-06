import axios from "axios";

//Cria uma nova instacia do Axios
const api = axios.create({
    baseURL: 'https://blogpessoal-tjs-13.onrender.com'
})


//Funçãoi para cadastrar Usuario 
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}


//Funçãoi para autentificar Usuario 
export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}