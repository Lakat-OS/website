import styles from '../../../styles/about.module.scss';

export default function AboutProofOfReview() {
  return (
    <div className={styles.container}>
      <h1>Proof of Review</h1>
      <div className="mx-3">
      <p>
      Before a branch can be merged into a proper branch it needs to undergo a review.
To start the review process an issuing branch creates a pull request from a requesting branch to a target branch.
The pull request is a submit with two properties: First it contains a newly created context data bucket, called the
review container, that will hold all the forthcoming information of the review. The submit may of course contain
other buckets besides that. Second, it leaves a trace of the information about the pull request in the pullRequests
entry of the submitTrace, namely pointers to the review container, to the target branch and the requesting branch.
In most cases the review happens on a twig, which acts as a feature branch. There the issuing branch and the
requesting branch are identical, because the twig requests for itself to be pulled into the target branch. However,
the requesting branch may also act as a proxy requester. This is the case when a proper branch rather than a
twig seeks to be merged into a target branch. Since this intention itself must pass through the consensus rule
of that proper branch, one would have to create a twig and include therein the proxy pull request. Once that
twig is successfully merged into the actual requesting branch by passing the consensus, the review process can
begin on that proper branch for it to be mergeable into the target branch. We call a pull request mature once
it is included in the requesting branch. In the most common scenario where the issuing and requesting branch
coincide, maturity is immediate. Once a pull request becomes mature a message will be sent to the target branch
where its contributors are invited to review the requesting branch. The message is simply a reference to the pull
request sent to the pullRequests channel of the target’s branchRequests.
Any content contributor of the target branch who is not also contributing to the requesting branch can then
become a review contributor of the requesting branch. They must first publish a review commitment on the
requesting branch. This makes them official contributors to that branch. It also helps to gauge general reviewers
engagement prior to the actual review. This is helpful both for those who seek to merge and those who seek to
review. It also increases accountability of the committing reviewer. Failing to supply a review after a commitment
could be penalized via the social engagement. Committers publish their commitment in the reviewsTrace of the
submitTrace. They cannot submit reviews without a prior commitment. Also, the identity of the reviewer is not
public in the sense that the commitment solely contains a zero-knowledge proof that the reviewer is a contributor
to the target branch. Of course the reviewer may decide to reveal their identity and this may
or may not be in line with the configuration of the target branch
      </p>
      <p>
      Reviewers then push review submits to the requesting branch. The submits just contain a proof of contributorship in the target branch. A review submit consists of the following: A bucket with a review, called a review
item. This bucket should reference all the data buckets that it has reviewed. In the respective interaction data of all those reviewed buckets a reference to the review item is stored within the reviews
entry. Finally the review item gets referenced in the review container of the pull request. Updating the review
bucket, as with any bucket update, consists of creating a new review bucket that points to the old one through
the parent entry. The branchConfig of the target branch specifies the prerequisites for a merge. This consists of
the minimum number of reviewers, a rule for acceptance and a minimum number of review rounds, which could be one by default. The rule of acceptance could be preset as well. For instance one could reject requests when a
certain fraction of reviewers reject and accept when there are no rejections and specify some rule for the middle
ground. Once all the requirements of the target branch are satisfied the branch is ready to be merged.
      </p>
      <p>
      How about merging branches that do not seek to be merged? This can be the case when trying to merge
the newest developments from a remote branch. This case is in fact already covered by the respective consensus
mechanisms of twigs and proper branches. Merging into twigs requires a fraction of content contributors to agree. Merging into proper branches requires a pull request and subsequent reviews, so it is not
possible to just merge other un-reviewed branches in the same way that one merges reviewed twigs or reviewed
proper branches. Therefore, one would have to create a twig that merges the remote branch as a feature. It then
requests to be merged and the merge undergoes a review
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