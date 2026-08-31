import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/about.module.scss';

const RustClient: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Work on the Rust client has begun</title>
      </Head>

      <time dateTime="2026-08-15" style={{ color: '#6c757d', fontSize: '0.9em' }}>
        15 August 2026
      </time>
      <h1>Work on the Rust client has begun</h1>

      <div className="mx-3">
        <p>
          Implementation of a Rust client for Lakat has started. It follows a written
          technical specification rather than being derived directly from the earlier Python
          prototype, so that the wire formats and state-transition rules are pinned down
          before they are baked into code. The Python implementation remains the reference
          for concrete encodings, and the two are cross-checked against shared test vectors.
        </p>

        <h4>Why Rust</h4>
        <p>
          Layers 0&ndash;3 of a Lakat node &mdash; primitives, objects, authenticated
          structures and the state machine &mdash; have to be a pure, deterministic library:
          given the same store contents and the same inputs they must produce byte-identical
          objects. Object identity <i>is</i> the hash of the encoding, so any ambient
          non-determinism forks the address space. Everything non-deterministic (time,
          randomness, network, key material) enters through injected interfaces. Rust&apos;s
          type discipline makes that separation enforceable rather than aspirational, and the
          state machine contains no <code>async</code> at all, which is what keeps it testable.
        </p>

        <h4>What the specification covers</h4>
        <p>
          The specification is eighteen documents describing a node as five layers, each
          depending only on those below it:
        </p>
        <ul>
          <li>
            <b>0 &ndash; Primitives:</b> CIDs, deterministic CBOR, hashing, namespaces,
            storage keyspace, identity
          </li>
          <li>
            <b>1 &ndash; Objects:</b> buckets, the immutable content units
          </li>
          <li>
            <b>2 &ndash; Authenticated structures:</b> the Merkle trie, its transaction model
            and proofs
          </li>
          <li>
            <b>3 &ndash; State machine:</b> submits, branches, validation
          </li>
          <li>
            <b>4 &ndash; Protocol:</b> branch requests, Proof of Review, lignification, merge,
            networking
          </li>
          <li>
            <b>5 &ndash; API:</b> the node-external surface
          </li>
        </ul>
        <p>
          Three properties distinguish Lakat from both a blockchain and from git, and the
          specification is organised around them. There is <b>no global state</b>: no single
          chain, no canonical head, no global consensus &mdash; every{' '}
          <a href="/about/branches">branch</a> has its own head and its own contributor set,
          and two branches may disagree permanently. <b>Content and history are separate
          graphs</b>: the bucket graph and the submit graph are independent, so two branches
          sharing no submits may still share most of their buckets. And <b>finality is
          per-branch and deferred</b>: competing proposed heads are wrapped in short-lived
          branches called sprouts and resolved through{' '}
          <a href="/about/lignification">lignification</a>.
        </p>

        <h4>Where it stands</h4>
        <p>
          The workspace currently holds five crates covering layers 0 to 2 &mdash; roughly
          3,900 lines of Rust with around 80 tests:
        </p>
        <ul>
          <li>
            <b>lakat-primitives</b> &mdash; CID, multihash, varint, deterministic codec,
            length-prefixed text, namespaces, profiles
          </li>
          <li>
            <b>lakat-types</b> &mdash; bucket, submit, submit trace, branch state, config,
            interaction
          </li>
          <li>
            <b>lakat-traits</b> &mdash; the injected interfaces: content store, oracle
          </li>
          <li>
            <b>lakat-trie</b> &mdash; the Merkle trie: nodes, views, transactions, proofs
          </li>
          <li>
            <b>lakat-store</b> &mdash; store backends: in-memory, file, RocksDB
          </li>
        </ul>

        <h4>What comes next</h4>
        <p>
          The next milestone is <b>lakat-core</b>, the state machine: branch creation, content
          submits and full validation. Reaching it puts the Rust client at parity with the
          Python implementation, with signature verification, content-addressed storage
          guarantees and name-collision checks that the prototype lacks. After that come the
          RPC binding and CLI with an interop harness against Python, then networking
          (read-only participation first), then consensus &mdash; Proof of Review, and
          lignification under simulation before deployment. Merge comes last: it depends on
          ancestry queries, contributor unions and a resolution policy, and it is the least
          specified part of the system.
        </p>

        <h4>Timeline</h4>
        <p>
          The current estimate for the first usable client release is{' '}
          <b>15 November 2026</b>. That target covers layers 0 to 3 plus the RPC and CLI
          surface &mdash; enough to create a branch, make submits and validate them against
          the specification. Networking, consensus and merge follow after. As with any
          estimate on a system still being specified as it is built, treat the date as an
          intention rather than a commitment.
        </p>

        <p>
          If you would like to help, the work is public &mdash; see{' '}
          <a href="https://github.com/Lakat-OS" target="_blank" rel="noopener noreferrer">
            our GitHub repositories
          </a>{' '}
          or write to <a href="mailto:info@lakat.science">info@lakat.science</a>.
        </p>
      </div>

      <br />
      <a className="nav-link" href="/news">
        <button className="btn btn-primary btn-constant-width mx-2 my-2">Back to News</button>
      </a>
    </div>
  );
};

export default RustClient;
