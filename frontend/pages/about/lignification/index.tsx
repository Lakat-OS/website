import styles from '../../../styles/about.module.scss';

export default function AboutLignification() {
  return (
    <div className={styles.container}>
      <h1>Lignification</h1>
      <div className="mx-3">
      <p>Once a given submit is the new stable head of core or of belt, it cannot be revoked. We say it is lignified. The
conversion of a previously flexible object into a rigid amendment of a branch has similarities to the process of
lignification in botany. The decision about the stable head is not made immediately, but there is a period of
time where it can still be revoked and deferred. This time is called lignification time. As mentioned above,
the objects that we make decisions about are not the merge submits themselves, but the sprouts that contain
them. If there is only one sprout available after the lignification time, then the decision is clear, namely that
the submit contained in that sprout becomes the new stable head of core and no action is required. However,
there may be multiple sprout options. In this case, we propose to have a deterministic rule that singles out one
sprout and we suggest the possibility of vetoing the default deterministic choice. This minimizes the need to vote
each time multiple options arise, but more importantly it reduces the attack vector for people to bring branch
growth to a halt by proposing alternate – yet still reviewed – merge submits. Vetoing is possible throughout the
lignification time. Any branch contributor may register a veto to any of the vying sprouts and therefore against
the default sprout. In case that a veto is registered the sprout in question has a chance to provide the next stable
head. Once a veto is registered, the content contributors can bring in their votes on the rivaling sprouts. After
a period of time, called the engagement time, the winning sprout will provide the new stable head and the other
sprouts can turn into peripheral proper branches rooted in core. Like with blockchains, the state of Lakat does
not change by itself, but only through transactions. This means that
only when a new submit is broadcasted can the state of a branch be updated. Furthermore, a branch may only be
updated if it is the target of a transaction. If the transaction is targeting core, then peripheral branches cannot
be updated and vice versa. As a consequence those ousted rival sprouts do not turn into their own branches
immediately, but only once a transaction targets them. Some of them may never turn into proper branches at all.
Apart from the lignification time and the optional engagement time there is a time allowing for latency issues in
broadcasting, called the broadcastingBuffer. This ensures that the timestamped vetoes or votes are broadcasted
and thus recorded before the stable head is irrevocably fixed.
      </p>
      <p>
      Due to the time between successive transactions it is quite possible that the state of the core, in particular its
stable head, needs to be updated. Maybe the veto time or the voting time between vying sprouts has passed or
maybe there are no rivaling sprouts and the stable head simply needs to be advanced. 
It is worth noting that also the sprouts entry and the sproutSelection entry of core get updated by pruning and
replacement respectively. 
      </p>
      <p>
      In practice the broadcasting and lignification can be automated by a script so that it requires less cognitive
bandwidth. The script would choose a content contributor of core at random and broadcast collect all the pull
requests that meet the merge-requirements from core, then create one or more merge submits from them, go
through the lignification process and broadcast the result. Only in the case when there are disagreements would
a manual interference be required.
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