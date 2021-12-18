/* eslint-disable no-undef */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import styles from './about.module.css';

export default function About() {
  console.log('renders from About');
  return (
    <>
      <div className={styles.container}>
        <h3>Hi I'm Benjamin!</h3>
        <p>I'm a biotechnologist turned out developer passionate for learning new technologies</p>
        <img className={styles.picture} src={require('../IMG-20191205-WA0006.jpeg')} />
        <ul className={styles.list_decoration}>
          <p>
            <strong>Three things I learnt during this program</strong>
          </p>
          <li>
            - Trending technologies: React &nbsp;
            <FontAwesomeIcon icon={faReact} />, Express, MongoDB, NodeJS &nbsp;
            <FontAwesomeIcon icon={faNodeJs} />
          </li>
          <li>- Web development is always changing, you need to adapt as well</li>
          <li>- Team work and soft skills are as valuable as technical skills</li>
        </ul>
        <p>
          <strong>Email:</strong>
          <a className={styles.links} href="mailto:benjaminhonorio.12@gmail.com">
            benjaminhonorio.12@gmail.com
          </a>
        </p>
        <p>
          <strong>Github:</strong>
          <a className={styles.links} href="https://github.com/benjaminhonorio">
            benjaminhonorio
          </a>
        </p>
      </div>
    </>
  );
}
