import styles from '../../../styles/about.module.scss';

export default function AboutIntegration() {
  return (
    <div className={styles.container}>
      <h1>Integration</h1>
      <div className="mx-3">
      <p>
      We envision Lakat as a base layer for an open, pluralistic and collaborative publication system that progresses
through continuous integration. As a base layer we strive to rely only on a bare minimum of other software and
aim to have an interface for existing software or protocols. Here we provide an overview of the protocols and
software that we plan to build upon or interface with.
</p><p>
We would like to use the libp2p library to implement Lakats demands for networking. Libp2p is a modular
peer-to-peer networking stack which amongst others also contains Kademlia as a distributed hash table protocol.
In particularly we would like to build a first client using the Rust implementation of libp2p.
</p><p>
We would like to interface with mediawiki. Mediawiki is an evolving database schema with a php frontend
that allows for the creation of knowledge databases such as wikipedia. There are various ways how Lakat could
interface with mediawiki. The weakest form requires the conversion of the data contributions in Lakat to database
entries in mediawiki. A stronger form converts also contributions to mediawiki into Lakat contributions.
</p><p>
Regarding storage we aim to stay agnostic and leave the storage protocol as a configurable option. As
options we consider IPFS, Ceramic (which is built on top of IPFS and anchored in Ethereum) or Urbit (lineDB).
Regarding the token layer we aim to be agnostic here as well. Since this is an optional feature it is left to the
branch contributors to decide and merge updates on their token transactions into their branch. We do recommend
deploying tokens on the Polygon Layer 2 network though and plan to integrate this into the pipeline.
</p><p>
Regarding version control we would like to reduce the complexity of branch operations to a bare minimum
in order to avoid security threats and reliance on other protocols. For the local consensus mechanism we believe
that a heavily reduced set of operations is favorable. Nevertheless we would like to interface with existing version
control systems such as git or radicle. We would like to interface with them in order to allow for the conversion
of git or radicle branches into Lakat branches.
</p><p>
We would also like to allow for new branches to be turned into parathreads in Polkadot. This would
allow for the integration of Lakat into the Polkadot ecosystem. To this end one would need to create a pipeline
to spin up a new parathread using Substrate together with a custom consensus protocol, namely the Lakat protocol. One would have to set the BlockImport to a custom way of importing new submits into the keyvalue database. SelectChain handles the finalization mechanism and would need to be set to the Lignification
mechanism. One would also need to set the proof-of-review mechanism
in the Environment option of the Substrate runtime.
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