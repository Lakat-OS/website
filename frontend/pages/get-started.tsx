import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

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
                        If you're interested in joining our efforts, feel free to 
                        <a href="https://github.com/Lakat-OS" target="_blank" rel="noopener noreferrer"> contact us</a> or create a pull-request on our GitHub repositories.
                    </div>

                    <h1>Welcome to the Get Started Page!</h1>
                    <p>This is a simple guide to help you get started with our platform.</p>

                    <ul>
                        <li>
                            <a href="/about">Step 1: Explore Lakat</a>
                        </li>
                        <li>
                                <a>Step 2: Download the client or the extension</a>
                            
                        </li>
                        <li>
                                <a>Step 3: Open a test-branch</a>
                        </li>
                        <li>
                                <a>Step 4: Start Contributing</a>
                        </li>
                    </ul>

                    <p>If you have any questions, please <a>Contact Us</a>.</p>
                </div>
            </div>

            <div className="row justify-content-center" style={{ height: '20vh' }}>
                <div className="col"></div>
            </div>
        </div>
    );
}

export default GetStarted;
