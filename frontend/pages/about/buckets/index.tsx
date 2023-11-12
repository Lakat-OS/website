import styles from '../../../styles/about.module.scss';

export default function AboutBuckets() {
  return (
    <div className={styles.container}>
      <h1>Buckets</h1>
      <div className="mx-3">
      <p>
      The most elementary data object is the bucket. Each and every submitted item is submitted in a bucket: datasets,
paragraphs, images and formulae are contained in buckets. These are examples of atomic buckets, expressing the
fact that they are the building blocks of the system. Instead of a folder structure, we solve the containment
relation through designated buckets that we call molecular buckets (like tree nodes in git). The data part of those
buckets contains merely an arrangement of atomic buckets. One may think of them as the analogue of an article,
a book or some other curated content.
      </p>
      <p>
      Every bucket contains six entries: A schema, a creatorRoot, a parent, a dataRoot, a refsRoot and a timestamp. Here and henceforth the word root refers to the root of a Merkle tree. We go
through the entries in turn. The schema contains details about the format of the data. For instance we have
already mentioned that the data in the molecular buckets is formatted as an arrangement. The creatorRoot
points to information about the creator of this bucket. In Lakat contributors have one or many public-private
keys and contributions are signed off with them. We wish to transition to a system where
contributors only submit proofs of their contribution without revealing their identity (public keys etc). The parent
is the content identifier of the parent bucket. For genesis buckets that would be 0. The dataRoot is a content
identifier of the data contained in the bucket. In future versions the schema could be absorbed into the dataRoot
using the IPLD CID format. This would require a Lakat-specific codec. The refsRoot points to all references
made to other buckets within the data. This is necessary, since references to other buckets might be obscured
inside the data-encoding. This is an analogue of a list of citations. The timestamp records the time of inclusion
of the bucket into the branch. It is important to note that we use Ethereum and some Layer2 block hashes as
time stamps in our first version, since the local consensus is too weak to ensure that all participants are truthful
to the time otherwise. Anticipating block hashes is close to impossible. One cannot change the data inside the
bucket. One would have to create a new bucket that points to the original bucket via its parent entry.
      </p>
      </div>
      <a
        className={`nav-link`}
        href="/about"
      >
      <button
        className="btn btn-primary btn-constant-width mx-2 my-2"
      >
        Back to About
      </button>
      </a>
            
    </div>
    );
}