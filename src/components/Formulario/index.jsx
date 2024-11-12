import { useState, useEffect } from "react"

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);

    useEffect(() => {
        console.log('o estado mudou');
    }, [materiaA])

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Você foi aprovado</p>
            )
        } else {
            return (
                <p>Você foi reprovado</p>
            )
        }
    }

    return (
        <form>
            {[1,3,4,5,6,7,8].map(item => (
                <li key={item}>{item}</li>
            ))}
            <input onChange={evento => setMateriaA(parseInt(evento.target.value))} type="number" placeholder="Nota Matéria A"/>
            <input onChange={evento => setMateriaB(parseInt(evento.target.value))} type="number" placeholder="Nota Matéria B"/>
            <input onChange={evento => setMateriaC(parseInt(evento.target.value))} type="number" placeholder="Nota Matéria C"/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario