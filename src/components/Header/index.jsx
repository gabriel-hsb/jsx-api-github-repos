import styles from "./Header.module.scss";

const Header = ({ username }) => {
  return (
    <header className={styles.header}>
      <h1>
        Olá, <span>{username}</span>!
      </h1>
      <div className={styles.divStats}>
        <a href={`https://github.com/${username}`} target="_blank">
          <img
            className={styles.avatar}
            src={`https://github.com/${username}.png`}
          ></img>
        </a>
        <img
          className={styles.stats}
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=7&theme=tokyonight`}
        ></img>
      </div>
      <p>Abaixo estão todos os seus repositórios públicos do Github</p>
    </header>
  );
};

export default Header;
