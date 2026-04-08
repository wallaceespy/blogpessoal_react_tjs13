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


//Função para autentificar Usuario 
export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}


//Função para consultar com token 
export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
}


//Função para cadastrar com token 
export const cadastrar = async (url: string, dados: Object, setDados: Function, header:Object) => {
    const resposta = await api.post(url, dados, header);
    setDados(resposta.data);
}


//Função para atualizar token
export const atualizar = async (url: string, dados: Object, setDados: Function, header:Object) => {
    const resposta = await api.put(url, dados, header);
    setDados(resposta.data);
}

//Função deleter
export const deletar = async (url: string, header:Object) => {
   await api.delete(url, header);
}





