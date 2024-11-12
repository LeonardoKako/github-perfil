import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        setCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setCarregando(false)
                setRepos(resJson)            
            }, 3000)
        })
    }, [nomeUsuario])

    return (
        <div className='container'>
        {carregando ? (
        <h1>Carregando...</h1>
        ): (    
        <ul className={styles.list}>
            {repos.map(repositorios => (
                <li className={styles.listItem} key={repositorios.id}>
                    <div className={styles.listItemName}>
                    <b>Nome:</b>{ repositorios.name}
                    </div>
                    <div className={styles.listItemLanguage}>
                    <b>Linguagens:</b>{ repositorios.language}
                    </div>
                    <a className={styles.listItemLink} target="_blank" href={repositorios.html_url}>Visitar no Github</a>
                </li>
            ))}
        </ul>
        )}
    </div>
    )
}

export default ReposList;