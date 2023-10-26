import styles from '../../../styles/about.module.scss';
import BranchImage from '../../../assets/img/BranchV9.png';

import Image from 'next/image';

export default function AboutBranches() {
  return (
    <div className={styles.container}>
      <h1>Branches</h1>
      <div className="mx-3">
      <p>
      The central object type of Lakat is the branch. See the Schematic below for an illustration. Branches represent journals or
research communities. They share some properties with git-branches and some with blockchains. Every branch
contains an id, called branchID, that uniquely identifies it. The immutable entries of a branch and the initial head
are hashed to produce the branch identifier. The branch also points to a parent branch from which it originated.
This entry may however be empty for a certain type of branch, namely the sprout (see below). The corresponding
entry is called parentBranch. This construction turns the set of branches into a linked data structure. In git a
branch is simply a pointer to the head commit. In blockchains one often encounters ids attached to the chain
(so-called chainid) to avoid issues when the consensus mechanism yields two different chains. At creation time
the branch receives a timestamp. The previous entries are all immutable. There are then four mutable entries,
namely stableHead, then the two consensus entries sprouts and sproutSelection and finally branchToken. The stable head is a pointer to the latest stable submit. A submit is a set of changes (see <a href="/about/submits">submits</a>).
One may think of it as the Lakat version of an article submission. It has similarities to a commit in git – not
only phonetically – but also to a block in ethereum. The addition of new submits works through a consensus
mechanism called proof of review (PoR) and lignification (see <a href="/about/lignification">Lignification</a>). Also in this respect the branch
behaves a lot like a blockchain. Every branch has it’s own token, the branchToken. It allows funding bodies to
fund a particular branch. Token logic is not handled by Lakat. Instead this entry essentially points to proofs
of transactions on a blockchain where the respective token lives. The purpose of the integration of tokens is to
create an incentive layer on top of Lakat, because (unfortunately) humans as well as AI do not work without
incentives. The branch also carries configuration metadata, stored in branchConfig. It points to information
about the branch type, whether merge conflicts are accepted , the consensus rules and the
proofs that are accepted, such as proofs of token transfer or proofs of time. We use timestamps from latest blocks
on various blockchains as proofs of time (see  <a href="https://opentimestamp.org">opentimestamps.org</a>). The branchConfig’s mutability
is more constrained than that of the stable head. Finally, we envision a way to extend the
config schema. This would be done by an additional entry that points to a schema bucket, where the schema for
the config is defined. An empty entry would signify the use of the default schema.
There are three types of branches: proper branches, sprouts and twigs. The branch type is stored in the
branch config and can be changed under certain conditions. Proper branches can only be modified through the
local consensus mechanism (see <a href="/about/proof-of-review">Proof of Review</a>). They point to a set of sprouts, which helps with the process of
producing stable heads in the proper branch. Proper branches cannot be changed to any other branch type. A
sprout is a short-lived branch that is solely used to grow proper branches. Sprouts behave a bit like ommers in
the ethereum protocol in the sense that they are contestants to produce the next stable head. They do not have
an empty parent branch entry. Sprout branches point to an empty set of sprouts themselves. The sproutSelection
contains all the sprouts that are rooted in it. The branchToken entry is empty. The stableHead is immutable.
There is only one way to modify the sprout, namely indirectly when it turns into a proper branch during the
lignification process (See <a  href="/about/lignification">Lignification</a>). Once a sprout turns into a proper branch the parent branch entry is
filled with the id of the branch that it is rooted in. Finally, a twig can be thought of as a little feature branch.
Twigs can be modified through submits by contributors of the twig (see <a  href="/about/branch-contributors">Branch contributors</a>) or through merges. However, the process of merging into a twig does not need to go through the
consensus mechanism of proper branches (See <a  href="/about/branches">Branches</a>).
</p><p>
We distinguish between core and belt branches,
which correspond to this and other in git. These are not intrinsic properties of branches, but denote the role
they play during a merge. Lakat only has one type of merge. The core branch will be updated and the belt
branch will not. A branch may be a core with respect to one
merge and a belt with respect to another merge. This terminology originates in the core-belt dichotomy of
Lakatosian research programmes. There is a further distinction that is purely conceptual and is not manifested
in the technical specification, but in the nomenclature. We distinguish a derived branch from a seedling branch
in that the seedling branch has a singularity submit without a parent (See <a href="/about/submits">Submits</a>). A singularity submit corresponds to the genesis block in a blockchain. We invoke here a cosmological
metaphor rather than a biblical one. The seedling branch has no parent branch and the corresponding entry
points to zero. A derived branch on the other hand has a parent branch that it points to. We say that the derived
branch is rooted in the parent branch. The root of a derived branch is the last submit in the submit history that
is also in the history of the parent branch.
We also note that there are various levels at which Lakat can be viewed as a graph, going from high level to
low level. At the level of the branches one can form a graph B, where a branch is a node and a directed link from
one branch A to another branch B means that B is the parent of A or that B is merged into A. This directed graph is not necessarily a-cyclic, because A can be rooted in B and merge
back into B, however if one excludes merges it is. At the level of the submits, a graph S can be created with
the submits being nodes and a link can be drawn from a submit q to p when p is the parent of q. This yields a
directed acyclic graph (DAG). Finally at the level of the data buckets there exists a graph structure D induced
by the parent reference inside the bucket. There is a graph homomorphism from S to B, but not vice versa and
there are no homomorphisms between S and D or B and D. The lack of a homomorphism between the submit
structure and the data structure indicates that these are two separate layers. The relation between the elementary
bucket object and the higher level branch object is not simply a many-to-one relation. Different branches may
share some data buckets. In practice one would expect that most of the data inside a branch is shared with at
least one other branch.
      </p>
      </div>
      <Image
              src={BranchImage}
              alt="Branch Schema"
              width={800}
              // height={600}
              className="ms-3 mt-3 mb-3"
        />
        <br />
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