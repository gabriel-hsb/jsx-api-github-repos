import { useEffect, useState } from "react";

import styles from "./List.module.scss";

const List = ({ username }) => {
  const [repos, setRepos] = useState([]); // vai iniciar o State com um array vazio
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); //deixa isLoading como true para aparecer a mensagem 'Carregando...'
    if (username.length >= 4) {
      fetch(`https://api.github.com/users/${username}/repos`)
        .then((res) => res.json())
        .then((resJson) => {
          console.log(resJson);
          setTimeout(() => {
            setRepos(resJson);
            setIsLoading(false);
          }, 1500);
        });
    }
  }, [username]);

  return (
    <>
      {isLoading ? (
        <h3>Carregando...</h3>
      ) : (
        <ul className={styles.lista}>
          {repos.map(
            (
              { id, name, language, html_url, description } //usando aqui a destructuring - veja https://github.com/gabriel-hsb/estudos-js/blob/objetos/destructuring%20.js
            ) => (
              <li key={id}>
                <div>
                  <b>Nome do repositório:</b> {name}
                </div>
                <div>
                  <b>Principal linguagem:</b>
                  <span className={styles.language}>{language}</span>
                </div>
                <div>
                  <b>Descrição do repositório:</b> {description}
                </div>
                <a target="_blank" href={html_url}>
                  {" "}
                  Acessar o repositório{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>{" "}
                </a>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default List;
