import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/about.module.scss';

// Token-related enquiries go to info@, not to the general mail@ address.
const TOKEN_EMAIL = 'info@lakat.science';

// MailerLite's hosted signup form, linked from the banner below. Not embedded:
// a frame or an embed snippet pulls a third party into the page, and the hosted
// form already carries its own heading and copy.
// Empty this string and the banner falls back to inviting people to write in.
const MAILING_LIST_URL = 'https://preview.mailerlite.io/forms/2606690/197315571557074560/share';

// Served from public/, so these are stable URLs that do not change when the
// site is rebuilt — token lists, explorers and wallets can link straight to them.
const LOGO_SVG = '/assets/lakat-token.svg';
const LOGO_PNG_256 = '/assets/lakat-token-256.png';
const LOGO_PNG_32 = '/assets/lakat-token-32.png';

const ETHERSCAN = 'https://etherscan.io/address/';
const LKT_ADDRESS = '0x8FaAC80bB99D8853d4245d20ada7101333c2D6fB';
const GITHUB_TOKEN_REPO = 'https://github.com/Lakat-OS';

const addressCell: React.CSSProperties = {
  fontFamily: 'monospace',
  fontSize: '0.85em',
  wordBreak: 'break-all',
};

const LakatToken: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lakat Token (LKT)</title>
      </Head>

      {/* Flex + center, rather than vertical-align: middle, which lines the icon up
          against the text baseline and sits visibly low next to a large heading. */}
      <h1 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Image src={LOGO_SVG} alt="Lakat" width={32} height={32} />
        Lakat Token (LKT)
      </h1>

      <div
        style={{
          backgroundColor: '#ffdd57',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '20px',
          textAlign: 'left',
        }}
      >
        <strong>Coming soon:</strong> Lakat Tokens are not being distributed yet. The contracts are
        deployed on Ethereum mainnet and the addresses are listed below.{' '}
        {MAILING_LIST_URL ? (
          <>
            To hear when LKT becomes available,{' '}
            <a href={MAILING_LIST_URL} target="_blank" rel="noopener noreferrer">
              subscribe to our mailing list
            </a>
            .
          </>
        ) : (
          <>
            To hear when LKT becomes available, write to{' '}
            <a href={`mailto:${TOKEN_EMAIL}`}>{TOKEN_EMAIL}</a>.
          </>
        )}
      </div>

      <div className="mx-3">
        <h4>What LKT is for</h4>
        <p>
          LKT is a <b>utility token</b> in the Lakat ecosystem. Its primary use is the creation of a{' '}
          <a href="/about/branches">branch</a>. It is <b>used, but not required</b>: Lakat does not
          handle token logic itself, and branches can be configured to expect no token at all.
        </p>
        <p>
          Depending on the <a href="/about/config">branch configuration</a>, certain operations may
          require a <b>proof of transaction</b> of Lakat Tokens to that branch&apos;s treasury. The
          branch config declares which proofs a branch accepts &mdash; proofs of token transfer and
          proofs of time among them &mdash; so whether LKT plays any role at all, and for which
          operations, is a decision made per branch rather than by the protocol.
        </p>

        <h4>Token details</h4>
        <table className="table table-sm" style={{ backgroundColor: 'transparent' }}>
          <tbody>
            <tr>
              <td>
                <b>Name</b>
              </td>
              <td>Lakat</td>
            </tr>
            <tr>
              <td>
                <b>Symbol</b>
              </td>
              <td>LKT</td>
            </tr>
            <tr>
              <td>
                <b>Decimals</b>
              </td>
              <td>18</td>
            </tr>
            <tr>
              <td>
                <b>Initial supply</b>
              </td>
              <td>
                1,000,000,000 LKT
                <span style={{ color: '#6c757d' }}>
                  {' '}
                  (1{' '}000{' '}000{' '}000 &times; 10<sup>18</sup> base units)
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <b>Standard</b>
              </td>
              <td>ERC-20, with EIP-2612 permit (gasless approvals)</td>
            </tr>
            <tr>
              <td>
                <b>Network</b>
              </td>
              <td>Ethereum mainnet</td>
            </tr>
            <tr>
              <td>
                <b>Minting</b>
              </td>
              <td>
                The full supply is minted once, at deployment. The contract has no further mint
                function.
              </td>
            </tr>
            <tr>
              <td>
                <b>Upgradeability</b>
              </td>
              <td>UUPS proxy; the owner can replace the implementation</td>
            </tr>
            <tr>
              <td>
                <b>Logo</b>
              </td>
              <td>
                <a href={LOGO_SVG} target="_blank" rel="noopener noreferrer">
                  SVG
                </a>
                {' · '}
                <a href={LOGO_PNG_256} target="_blank" rel="noopener noreferrer">
                  PNG 256&times;256
                </a>
                {' · '}
                <a href={LOGO_PNG_32} target="_blank" rel="noopener noreferrer">
                  PNG 32&times;32
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <h4>Contract address</h4>
        <p>
          The token is deployed on <b>Ethereum mainnet</b>. The address below is the permanent
          proxy address &mdash; this is the one to add to a wallet or integrate against.
        </p>
        <table className="table table-sm" style={{ backgroundColor: 'transparent' }}>
          <tbody>
            <tr>
              <td>
                <b>Lakat Token (LKT)</b>
              </td>
              <td style={addressCell}>{LKT_ADDRESS}</td>
              <td>
                <a href={`${ETHERSCAN}${LKT_ADDRESS}`} target="_blank" rel="noopener noreferrer">
                  Etherscan
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          Always verify an address against this page (or against Etherscan directly) before
          interacting with any contract that claims to be LKT.
        </p>

        <h4>Code and security</h4>
        <p>
          The token contract is built on{' '}
          <a
            href="https://github.com/OpenZeppelin/openzeppelin-contracts"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenZeppelin Contracts
          </a>{' '}
          v5.7 &mdash; the ERC-20, permit, ownership and UUPS proxy logic all come from that
          library, which is the most widely deployed contract library in the ecosystem and is
          independently audited. Beyond selecting the extensions and the initial supply, the token
          adds no custom logic of its own.
        </p>
        <p>
          This specific deployment has not undergone a separate third-party audit. It is covered by
          an automated test suite and its source is published on{' '}
          <a href={GITHUB_TOKEN_REPO} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>

        <h4>What LKT is not</h4>
        <p>
          Lakat is a base layer for publishing, not a financial system. LKT exists so that branches
          have a common, optional way of asking a contributor to demonstrate commitment to a branch
          treasury. It is not designed, offered, or intended as an investment.
        </p>

        <h4>Legal notice</h4>
        <p style={{ fontSize: '0.9em' }}>
          Lakat Tokens (LKT) are <b>not a security</b>, share, bond, note, derivative, fund unit,
          e-money, or any other regulated financial instrument. They do not represent equity,
          ownership, membership, debt, or any claim against Lakat, its contributors, or any other
          person or entity. They confer no right to profits, dividends, revenue, distributions,
          interest, repayment, governance, or control.
        </p>
        <p style={{ fontSize: '0.9em' }}>
          LKT is intended solely as a functional utility for interacting with the Lakat protocol. No
          representation or warranty is made that LKT has, or will come to have, any monetary value,
          price, market, or liquidity, and it should not be acquired for speculative purposes or
          treated as an asset, store of value, or means of payment. Nothing on this page is an offer
          to sell, or a solicitation of an offer to buy, any token or instrument, and nothing here
          constitutes financial, investment, tax, or legal advice.
        </p>
        <p style={{ fontSize: '0.9em' }}>
          The protocol and its tooling are experimental and provided without warranty of any kind.
          Availability, functionality, and continued operation are not guaranteed. Access may be
          restricted in some jurisdictions, and it is your responsibility to ensure that any use is
          lawful where you are.
        </p>

        <h4>Contact</h4>
        <p>
          For token-related questions, please reach out to{' '}
          <a href={`mailto:${TOKEN_EMAIL}`}>{TOKEN_EMAIL}</a> &mdash; looking forward!
        </p>
      </div>

      <br />
      <a className="nav-link" href="/get-started">
        <button className="btn btn-primary btn-constant-width mx-2 my-2">Back to Get Started</button>
      </a>
    </div>
  );
};

export default LakatToken;
