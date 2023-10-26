import styles from '../../../styles/about.module.scss';

export default function AboutSubmits() {
  return (
    <div className={styles.container}>
      <h1>Submits</h1>
      <div className="mx-3">
      <p>
      Buckets are the central data structure of Lakat. They are a generalization of the concept of a file.
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