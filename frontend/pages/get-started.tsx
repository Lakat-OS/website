import { NextPage } from 'next';
import Head from 'next/head';

const EMAIL = 'info@lakat.science';
const TELEGRAM = 'https://t.me/+BGvsUzF1ds80YmFk';
const X_PROFILE = 'https://twitter.com/__Lakat__';
const GITHUB = 'https://github.com/Lakat-OS';

// Steps that are not available yet are rendered greyed out and unlinked.
const upcomingStep: React.CSSProperties = { color: '#9a9a9a', cursor: 'default' };

const GetStarted: NextPage = () => {
    return (
        <div className="container text-center main-content">
            <div className="row justify-content-center" style={{ height: '10vh' }}>
                <div className="col">
                {/* Content for the first row (header) */}
                {/* Header Content */}
                </div>
            </div>
            <div className="row" style={{ height: '70vh', textAlign: 'left' }}>
                <div className="col">
                    <Head>
                        <title>Get Started</title>
                    </Head>

                    <div style={{ backgroundColor: '#ffdd57', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
                        <strong>Alert:</strong> We are currently working on a Rust implementation of Lakat and a
                        <a href="https://github.com/Lakat-OS/mediawiki-extension" target="_blank" rel="noopener noreferrer"> mediawiki extension</a>.
                        If you're interested in joining our efforts, feel free to contact us at
                        <a href={`mailto:${EMAIL}`}> {EMAIL}</a> or create a pull-request on our
                        <a href={GITHUB} target="_blank" rel="noopener noreferrer"> GitHub repositories</a>.
                    </div>

                    <h1>Welcome to the Get Started Page!</h1>
                    <p>This is a simple guide to help you get started with our platform.</p>

                    <ul>
                        <li>
                            <a href="/about">Step 1: Explore Lakat</a>
                        </li>
                        <li>
                            <span style={upcomingStep}>Step 2: Download the client or the extension</span>
                        </li>
                        <li>
                            <span style={upcomingStep}>Step 3: Open a test-branch</span>
                        </li>
                        <li>
                            <a href="/lakat-token">Step 4: Get some Lakat Tokens (LKT)</a>
                        </li>
                        <li>
                            <span style={upcomingStep}>Step 5: Start Contributing</span>
                        </li>
                    </ul>

                    <p>
                        Lakat Tokens (LKT) will be available soon. In the meantime you can read about what
                        they are for on the <a href="/lakat-token">Lakat Token (LKT)</a> page.
                    </p>

                    <p>
                        If you have any questions, please contact us via
                        <a href={TELEGRAM} target="_blank" rel="noopener noreferrer"> telegram</a>,
                        <a href={X_PROFILE} target="_blank" rel="noopener noreferrer"> X</a> or via email on
                        <a href={`mailto:${EMAIL}`}> {EMAIL}</a> &mdash; looking forward!
                    </p>
                </div>
            </div>

            <div className="row justify-content-center" style={{ height: '20vh' }}>
                <div className="col"></div>
            </div>
        </div>
    );
}

export default GetStarted;
