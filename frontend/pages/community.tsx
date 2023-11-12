import Head from 'next/head';
import Image from 'next/image';
import LeonhardHorstmeyer from '../assets/img/Leo_closeup.png';
import MahdiKourehpaz from '../assets/img/MahdiKourehpaz.jpeg';
import AdrianZhunussov from '../assets/img/AdrianZhunussov.jpg';
import styles from '../styles/community.module.scss'; // Assuming you have a community.module.scss for styles

export default function Community() {
    return (
        <div>
            <div className={`row mt-4 ${styles.topdiv}`}>
                <Head>
                    <title>Lakat Community</title>
                </Head>
            </div>
            <div className={`${styles.container}`}>
                
                <div className="row mt-4" style={{width:"60vw", display: "flex", justifyContent: "center"}}>
                    <h4 style={{textAlign: "center", marginBottom: "20px"}}> Join the Community </h4>
                    <p>
                    Let's build the future of science publishing together! We are a group of scientists, developers and project managers. We share the ideas of an open and permissionless science that embraces transparency, conflict-resolution and process-orientation.
                    </p>
                    <a href="https://t.me/+BGvsUzF1ds80YmFk" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-primary" style={{width:"100%"}}>Join us on Telegram</button>
                    </a>
                    
                </div>

                <hr />

                <div className={`row mt-4 mb-4 ${styles.profileContainer}`} >
                    <h4 style={{textAlign: "center", marginBottom: "20px"}}>Core Team </h4>
                    {[
                        {
                            display:'Leonhard Horstmeyer',
                            image_url: LeonhardHorstmeyer,
                            description: 'Leonhard is a theoretical physicist, researcher and a blockchain developer.'
                        },
                        {
                            display:'Adrian Zhunussov',
                            image_url: AdrianZhunussov,
                            description: 'Adrian is a product manager in the fintech and web3 sphere. He has experience with data-driven decentralized systems and DeSci.'
                        },
                        {
                            display:'Mahdi Kourehpaz',
                            image_url: MahdiKourehpaz,
                            description: 'Mahdi is a data scientist, scholar in quantum chaos, software engineer and a tar player.'
                        }].map((name, index) => (
                            <div className="col-12 col-md-6 col-lg-4 mb-2" key={index}> {/* Adjust for responsive layout */}
                            <div className="card">
                            <Image
                                className="card-img-top"
                                src={name.image_url}
                                alt={name.display}
                                height={300}
                                style={{objectFit:"cover"}}
                                // objectPosition="center"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{name.display}</h5>
                                <p className="card-text">
                                {name.description}
                                </p>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-5">

                </div>


                {/* ... Add more rows as needed ... */}
            </div>
        </div>
    );
}
