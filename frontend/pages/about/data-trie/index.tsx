import styles from '../../../styles/about.module.scss';

export default function AboutDataTrie() {
  return (
    <div className={styles.container}>
      <h1>Data-Trie</h1>
      <div className="mx-3">
      <p>
      The data buckets as well as the mutable information attached to them can be looked up with the help of a
Merkle-Patricia trie, called the DataMPTrie. This is cryptographically secure and very useful when resolving the
information attached to buckets inside of an article. The keys that are stored in the trie are truncated versions
of the content identifiers of the data buckets. And the values are the mutable entries attached to the buckets. To
look up the bucket data itself one uses simply the content identifier of the bucket. Storage is handled separately. We propose to use a modified Merkle-Patricia trie – very similar to the one used
in Ethereum – with four types of nodes: null nodes, leaf nodes, extension nodes and branch nodes. The data at
each node is serialized and hashed. The specifics of this encoding are yet to be specified. One may use any of
the existing IPLD-formats. The encoding should have the property that data lists with a lot of empty entries
are serialized in a very compact way to save space. Many data items in Lakat have a lot of empty fields. A
bucket without any interaction information is mostly empty fields. Twigs and sprouts have many empty fields
as well. The leaf-nodes (in the trie) are special in this respect, because the hashing uses a salt that equals the
content identifier of the bucket. Why do we need a salt at all? When a data bucket is published it doesn’t have
any information attached to it, so without the salt all new data buckets would have the same hash, which is not
desirable.
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