import styles from '../../../styles/about.module.scss';

export default function AboutDataTrie() {
  return (
    <div className={styles.container}>
      <h1>Data-Trie</h1>
      <div className="mx-3">
      <p>

      </p>
      </div>
      <a
                className={`nav-link`}
                href="/about"
              >
              <button
                className="btn btn-info btn-constant-width mx-2 my-2"
              >
                Back to About
              </button>
              </a>
            
    </div>
    );
}