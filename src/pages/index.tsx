import { useState, useMemo, useCallback } from 'react';

// Estados dentro de um componente

export default function Teste() {

    const [age, setAge] = useState(19)
    const [name, setName] = useState('Alairton')

    const handleChangeAge = useCallback(() => {
        setAge(prev => prev === 19 ? 20 : 19)
    }, [])

    const handleChangeName = useCallback(() => {
        const newAge = 10 * age;
        console.log('age atual', age, newAge)
        setName(prev => prev === 'Alairton' ? 'Pascoal' : 'Alairton')
    }, [])

    // usoMemo = referencia em variavel
    // useCallback = referencia de funcao

    const calcule = useMemo(() => {
        console.log("calculou", age)
        return 10 * age
    }, [age]);

    console.log('renderizou', calcule);

    return (
        <div>
            <p>IDADE: {age}</p>
            <p>Nome: {name}</p>
            <button onClick={handleChangeName}>Alterar Nome</button>
            <button onClick={handleChangeAge}>Alterar Idade</button>
        </div>
    )
}