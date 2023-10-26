import styles from '../../styles/about.module.scss';

export default function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>About</h1>
            <p className="mx-3">Lakat is a manifestly pluralistic, conflict-resolution and process-oriented architecture for the continuous integration of publications, with a primary use case of research publications. In this way Lakat becomes a living document. At its core, the architecture consists of a linked data structure that resembles a DAG, where the
main objects are branches. This data structure facilitates collaborative work in much the same way as git does. Branches may be thought of as the analogue of a journal in traditional publishing. The role of journal editors is covered largely by branch contributors. Branches are chains of blocks that contain submissions. The addition of another block happens via a proof of peer review, where the peers are the contributors to that branch. In that sense branches resemble blockchains with blocks consisting of submitted changes instead of transactions. As a
consensus mechanism we discuss a solution that combines a proof-of-review at branch-level, a local (i.e. involving just branch-contributors) consensus rather than a global one, with a new finality gadget called Lignification.
The review process is open. The identities of the reviewers and the creators of the
reviewed content are disclosed. Data is content-addressable and conforms to
the IPLD CID format. Storage is handled by a networking component in Lakat, which delegates the bulk of data storage to a selection of other storage providers, including decentralized storage networks such as IPFS and others. This improves resilience and longevity.</p>

            <div className={styles.section}>
                <h3 className={styles.level0}>Core Components</h3>
                <div className={styles.level1}>
                    <a className={`nav-link ${styles.link}`} href="/about/buckets">
                        <span className={styles.roundedSquare}></span> Data Buckets
                    </a>
                    <p>Buckets are the most elementary data object in the Lakat protocol. Every item that is submitted, whether datasets, paragraphs, images, or formulae, is contained within a bucket. These are the foundational building blocks of the system. There are fundamentally two types of buckets, atomic buckets that hold data and molecular buckets that hold context.</p>
                </div>
                <div className={styles.level1}>
                    <a className={`nav-link ${styles.link}`} href="/about/branches">
                        <span className={styles.roundedSquare}></span> Branches
                    </a>
                    <p>The Branch is the central object type. It is a configurable wrapper for a directed history of updates maintained by the so-called branch <a href="#user"></a>contributors. Branches are similar to git branches and exhibit features that are akin to journals or research communities. They facilitate the organization and categorization of content within Lakat. There are three types of branches: the <b>proper branches</b> are like production branches in a software project, <b>twigs</b> are like feature branches, <b>sprouts</b> are auxilliary branches used in the concensus and lignification process.</p>
                </div>
                <div className={styles.level1}>
                    <a className={`nav-link ${styles.link}`} href="/about/submits">
                        <span className={styles.roundedSquare}></span> Submits
                    </a>
                    <p>Submits is a data structure in Lakat for proposed changes or additions to a given branch with some additional metadata attached to it. Any submit points to the updated data-trie. One may think of a submit like a submission of an article. There are three types of submits: regular submits, pull requests and merge submits.</p>
                </div>
                <div className={styles.level1}>
                    <a className={`nav-link ${styles.link}`} href="/about/data-trie">
                        <span className={styles.roundedSquare}></span> Data Trie
                    </a>
                    <p>Data Trie is a Merkle-Patricia trie, a data format that helps to query and hash the underlying data of Lakat. Each leaf of the trie is a data bucket. Lakat uses the trie to ensure efficient writing and retrieval of data, whilst at the same time keeping a fingerprint of the changes.</p>
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.level0} id="users">Users</h3>
                <div className={styles.level1}>
                    <a className={`nav-link ${styles.link}`} href="/about/user/branch-contributor">
                        <span className={styles.roundedSquare}></span> Branch Contributors
                    </a>
                    <p>These are individuals or entities that have made contributions to the data-trie of a specific branch. Every branch has a history of submits and is rooted in some parent branch or is itself a seedling. In either case, there is a set of contributors to every branch between its root and the current head. Any actor, human or AI, who can prove to have contributed content in any of the branch’s submits counts as a contributor. Branch contributors form the basis of the consensus mechanism in Lakat. Only branch contributors are allowed to make changes to the branch they are contributing to.</p>
                </div>

                <div className={styles.level1}>
                    <a className={`nav-link ${styles.link}`} href="/about/user/token-contributor">
                        <span className={styles.roundedSquare}></span> Token Contributors
                    </a>
                    <p>These are individuals or entities that have made contributions to the token entry of a specific branch. A Token contributor can prove to have deposited funds into the branch. Not every branch needs to have token contributors. </p>
                </div>

                <div className={styles.level1}>
                    <a className={`nav-link ${styles.link}`} href="/about/user/storage-contributor">
                        <span className={styles.roundedSquare}></span> Storage Contributors
                    </a>
                    <p>These are individuals or entities that have stored data. They are storage contributors to every branch that points to that data. A Token contributor can prove to have stored that data. </p>
                </div>

                <div className={styles.level1}>
                    <a className={`nav-link ${styles.link}`} href="/about/user/review-contributor">
                        <span className={styles.roundedSquare}></span> Reviewers
                    </a>
                    <p> A reviewer or review-contributor is a special role in a branch. They are a product of the proof-of-review process. A branch-contributor from another branch X can become a reviewer of a branch Y, whenever a pull-request is send to X from a contributor of Y</p>
                </div>

            </div>

            <div className={styles.section}>
                <h3 className={styles.level0}>Mechanisms</h3>
                <div className={styles.level1}>
                    <a className={`nav-link ${styles.link}`} href="/about/lignification">
                        <span className={styles.roundedSquare}></span> Lignification
                    </a>
                    <p>Lignification is an algorithm that deterministically and uniquely sets a new head for the branch. This is especially important in the case where multiple proposed changes for the new head exist. In the jargon of blockchains this is sometimes called a finality gadget. It determines the consensual new state of a gien branch.</p>
                </div>
                <div className={styles.level1}>
                    <a className={`nav-link ${styles.link}`} href="/about/proof-of-review">
                        <span className={styles.roundedSquare}></span> Proof of Review
                    </a>
                    <p>Proof of Review is a consensus mechanism ensuring content integrity and quality of a given branch. It encourages active community participation and trust in the content. To achieve this, a pull request to the reviewing branch is required. This sets into motion the review process.</p>
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.level0}>Philosophy and Principles</h3>
                <div className={styles.level1}>
                    <a className={`nav-link ${styles.link}`} href="/about/imre-lakatos">
                        <span className={styles.roundedSquare}></span> Imre Lakatos
                    </a>
                    <p>Imre Lakatos' philosophy influenced the design of the Lakat architecture. He is known for his work in the field of philosophy of science and developed the concept of scientific research programmes to address questions of progress, methodology and legitimacy of scientific work. Rather than considering static bodies of theory as the object of study, he was concerned with the evolving aspect and distinguished the work on and evolution of theories rather than the theories themselves. In Lakat we also put the idea of the process at the heart of our architecture.</p>
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.level0}>Integration and Future Developments</h3>
                <div className={styles.level1}>
                    <a className={`nav-link ${styles.link}`} href="/about/integration">
                        <span className={styles.roundedSquare}></span> Integration with Other Systems
                    </a>
                    <p>Lakat is designed to seamlessly integrate with other platforms or systems. This flexibility ensures that Lakat remains adaptable and extensible. Some of the systems we aim to integrate with ipfs, ceramic (anchored in ethereum and leveraging ipfs) and mediawiki.</p>
                </div>
                
            </div>
        </div>
    );
}
