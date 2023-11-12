import styles from '../../../styles/about.module.scss';
import { useRouter } from 'next/router';

export default function AboutUsers() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1>User Types</h1>
      <p>
      Every branch has contributors, or rather contributors have branches. A contributor is an account that can prove
to have contributed to a given branch. There are four types of contributors for any given branch: content
contributors, review contributors, token contributors and storage contributors. A content contributor can prove
to have submitted to the branch. A review contributor is someone who can prove to have pushed reviews to the
branch. A token contributor is someone who can prove
to have deposited funds into the branch. A storage contributor is someone who can prove to store data of that
branch. Being a contributor means that you have to prove your contribution for the submits from the root submit
of the branch till the current stable head. How does the set of contributors change during a merge? What is the
relation between the contributors of two branches before the merge and after? When the belt branch is merged
into the core following a pull request, then the new set of contributors is simply the union of the two branches. That holds for all contributor types. When there is no pull
request preceding the merge the contributors of this branch are unaltered. The main idea behind the concept of
contributors is derived from the mutability, governance and autonomy of branches. Branches can only be modified
by their contributors. This attempts to preempt attacks on branches.
      </p>
      <ul>
        <li
          className={`${styles.listItem}`} 
          onClick={()=>router.push('/about/user/branch-contributor')}>Branch Contributors</li>
        <li
          className={`${styles.listItem}`}
          onClick={()=>router.push('/about/user/review-contributor')}>Review Contributors</li>
        <li
          className={`${styles.listItem}`}
          onClick={()=>router.push('/about/user/token-contributor')}>Token Contributors</li>
        <li
          className={`${styles.listItem}`}
          onClick={()=>router.push('/about/user/storage-contributor')}>Storage Contributors</li>
            
      </ul>
      <p>
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
      </p>
    </div>
    );
}