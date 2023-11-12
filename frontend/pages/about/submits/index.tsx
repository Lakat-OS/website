import styles from '../../../styles/about.module.scss';

export default function AboutSubmits() {
  return (
    <div className={styles.container}>
      <h1>Submits</h1>
      <div className="mx-3">
      <p>
      Submits bundle up changes to the data with some additional metadata. Every submit points to a previous submit,
the parent submit. There exist singularity submits that have no parent. The parent entry of those submits is zero.
Like in Git or Ethereum, there is a field reserved for submit-specific data that we call submitMessage.
The change of the data within the submit is subsumed in trieRoot, which is the root of the DataMPTrie, a
Merkle-Patricia-Trie that references the data state of Lakat. The leaves of the trie are the data
buckets. They have some resemblance with accounts in the ethereum state trie. Usually only a small part of the
entire trie gets updated in a submit. Imagine the trie being all of wikipedia and a submit being just the creation
of a new page or even just editing a page. Even though the bucket identifier is immutable it points to mutable
entries. This is similar to ethereum, where the leaf nodes are immutable account addresses that point to mutable
entries like amount of ETH, the contract storage data or the account nonce. The mutable entries in the case of
Lakat are made up of information that is attached by other users to the bucket. It is information that is not
intrinsic to the bucket. This includes socialRefs, reviews, tokens, bucketRefs and storageProofs.
</p><p>
The socialRefs entry resolves to tokens of appreciation, such as thumbs up or down – the gold standard of
social media user interaction. The reviews point to data buckets that contain a review or comments on the bucket
in question. The tokens entry allows for the integration of tokens to data buckets. The bucketRefs are two
collections of references to other buckets. The first collection is immutable and contains all those other buckets
that are referenced inside the bucket data. This second collection is mutable and consists of all those molecular
buckets that the atomic bucket is part of. This is a reverse registry that can be understood as how much a content
has been reused. There is no analogue in classical publishing. StorageProofs are a ledger of timestamped proofs
of storage for the bucket.
</p><p>
There are some submits with a specific structure. These are the pull requests and the
merge submits. The pull request contains at least one context bucket, called the review
container, that references all the subsequent reviews. It also leaves a trace of the pull request in the submitTrace.
The merge submit contains all the data buckets of the belt branch and it points to the merged branch id in the
submitTrace
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