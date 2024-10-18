import React, {useState, useEffect} from 'react'; 
import axios from 'axios';
import {FlatList} from 'flatlist-react/lib';

const Artigo = () => {
    const [dados, setDados] = useState([]);

    const Busca = async () => {
        axios
        .get("http://localhost:8080/artigo")
        .then((response) => {
            setDados(response.data);
        })
        .catch((e) => console.log(e.message));
    };

    const Item = (item, idx) => {
        return <li key = {idx}>{item.nome}
        </li>
    };

        
    return(
        <div>
            <ul>
                <FlatList list={dados} renderItem={({item})=><Item item={item}/>} />
            </ul>
        </div>
    );
};

export default Artigo;