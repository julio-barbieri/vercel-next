import {useState} from 'react';

function Home(){
    return <Contador />
}

function Contador(){
    const [cont, setContador] = useState(1);

    const contar = () => setContador(cont+1);

    return  <button onClick={contar}>Contar! {cont}</button>       
}

export default Home