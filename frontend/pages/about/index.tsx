import styles from '../../styles/about.module.scss';

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About</h1>
      <p>
        This page provides an overview of all the components and mechanisms of
        Lakat.
      </p>

      {/* Core Components */}

      {/* <div className={`card mb-3 ${styles.cardStyle}`}> */}

      <div className={`card mb-3 ${styles.cardStyle}`}>
        <div className="card-header bg-primary text-white">Core Components</div>
        <div className="card-body">
          <div className="card mb-2">
            <div className="card-header bg-secondary text-white">Branches</div>
            <div className="card-body">
              <a className={`nav-link ${styles.link}`} href="/about/branches">
                Branches
              </a>
              <p>
                Branches serve as the central object type representing journals
                or research communities. They facilitate the organization and
                categorization of content within Lakat. There are various types
                of branches, including main branches, side branches, and review
                branches, each serving a distinct purpose in the workflow.
              </p>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-header bg-secondary text-white">Submits</div>
            <div className="card-body">
              <a className={`nav-link ${styles.link}`} href="/about/submits">
                Submits
              </a>
              <p>
                Submits are the primary method for contributors to propose
                changes or additions. They play a crucial role in the continuous
                integration process of Lakat. Submits can be of various types,
                such as data submits, review submits, or configuration submits,
                catering to different aspects of the platform.
              </p>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-header bg-secondary text-white">Data Trie</div>
            <div className="card-body">
              <a className={`nav-link ${styles.link}`} href="/about/data-trie">
                Data Trie
              </a>
              <p>
                Data Trie is a structured data format in Lakat, designed to hash
                the submitted data efficiently. The platform will utilize a
                Patricia Merkle trie to ensure efficient storage and retrieval
                of data, especially in a decentralized environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`card mb-3 ${styles.cardStyle}`}>
        <div className="card-header bg-primary text-white">Mechanisms</div>
        <div className="card-body">
          <div className="card mb-2">
            <div className="card-header bg-secondary text-white">
              Lignification
            </div>
            <div className="card-body">
              <a
                className={`nav-link ${styles.link}`}
                href="/about/lignification"
              >
                Lignification
              </a>
              <p>
                Lignification is a finality gadget in Lakat. It offers a
                deterministic method to determine the consensual state in
                systems, ensuring that once data is added, it remains permanent
                and immutable.
              </p>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-header bg-secondary text-white">
              Proof of Review
            </div>
            <div className="card-body">
              <a
                className={`nav-link ${styles.link}`}
                href="/about/proof-of-review"
              >
                Proof of Review
              </a>
              <p>
                Proof of Review is a consensus mechanism ensuring content
                integrity and quality. It encourages active community
                participation and trust in the content. To achieve this, it
                requires a pull request to the reviewing branch, ensuring a
                thorough review process.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`card mb-3 ${styles.cardStyle}`}>
        <div className="card-header bg-primary text-white">
          Philosophy and Principles
        </div>
        <div className="card-body">
          <div className="card mb-2">
            <div className="card-header bg-secondary text-white">
              Imre Lakatos
            </div>
            <div className="card-body">
              <a
                className={`nav-link ${styles.link}`}
                href="/about/imre-lakatos"
              >
                Imre Lakatos
              </a>
              <p>
                Imre Lakatos' philosophy heavily influences the Lakat
                architecture. His work aimed to address the demarcation problem
                in the field of philosophy of science. The ideas of progressive
                innovations and the distinction between core and periphery in
                Lakatosian research programmes drive the design of Lakat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`card mb-3 ${styles.cardStyle}`}>
        <div className="card-header bg-primary text-white">
          Integration and Future Developments
        </div>
        <div className="card-body">
          <div className="card mb-2">
            <div className="card-header bg-secondary text-white">
              Integration with Other Systems
            </div>
            <div className="card-body">
              <a
                className={`nav-link ${styles.link}`}
                href="/about/integration"
              >
                Integration with Other Systems
              </a>
              <p>
                Lakat is designed to seamlessly integrate with other platforms
                or systems. This flexibility ensures that Lakat remains
                adaptable and extensible. Some of the systems we aim to
                integrate with include [System A], [System B], and [System C]
                (replace with actual systems from the whitepaper).
              </p>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-header bg-secondary text-white">
              Future Developments
            </div>
            <div className="card-body">
              <a
                className={`nav-link ${styles.link}`}
                href="/about/future-developments"
              >
                Future Developments
              </a>
              <p>
                Future developments will focus on enhancing Lakat's capabilities
                and addressing the evolving needs of the academic community.
                This includes new features and improvements based on user
                feedback. Our immediate goal is to develop a Rust client,
                ensuring a robust and efficient implementation of Lakat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
