import styles from '../../../styles/about.module.scss';

export default function AboutIntegration() {
  return (
    <div className={styles.container}>
      <h1>Imre Lakatos</h1>
      <div className="mx-3">
      <p>
      The entire architecture of Lakat is heavily inspired by concepts developed by the Hungarian philosopher, Imre
Lakatos. In an attempt to contribute to the demarcation problem that was prominent in the field
of philosophy of science during Lakatos’ times, he developed the concept of a research programme,
also called Lakatosian research programme, to avoid confusion with the colloquial use of the former term. The
demarcation problem asks about the criteria that distinguish science from ’pseudo-science’. Lakatos develops his
theory on the grounds of a process-oriented account of science. So rather than saying that this or that monolithic
bulk of work or set of statements is or is not scientific, he posits that this distinction can only be made on the
grounds of processes of theoretical amendments to an existing corpus of statements. He distinguishes between
progressive and degenerative amendments depending on whether they strengthen the programme’s predictive
power. For Lakatos a research programme consists of a hard core, which is a set of constituting assumptions,
axioms as it were, that capture the essence of a research endeavor and a protective belt of auxiliary hypotheses.
The key ideas that the Lakat-architecture takes from the concept of the Lakatosian research programmes are
threefold: 
</p>
<p>
<ol>
  <li>The pluralism of various research undertakings.</li>
  <li>The process-orientation</li>
  <li>The distinction between a core and a protective belt.</li>
</ol>
</p>
<p>
At the heart of these foundational concepts lies the idea that science lives
through arguments, differences and discourse. The input of Lakatosian concepts into Lakat can then be described
as follows: A research programme corresponds to a branch or a set of branches to which researchers contribute
changes or amendments. There is no single master branch, but rather every research programme has its own
branch or set of branches. Conflicts with other branches or even within the same branch are an important aspect
of Lakat and can be the source of progress (c.f. progressive amendments in Lakatosian research programmes). A
programme can maintain a set of feature branches that support the core branch. These side branches behave like
a protective belt.
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