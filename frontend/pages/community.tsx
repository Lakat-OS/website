import Head from 'next/head';
import Image from 'next/image';
import LeonhardHorstmeyer from '../assets/img/Leo_closeup.png';
import MahdiKourehpaz from '../assets/img/MahdiKourehpaz.jpeg';
import AdrianZhunussov from '../assets/img/AdrianZhunussov.jpg';
import styles from '../styles/community.module.scss'; // Assuming you have a community.module.scss for styles

export default function Community() {
    return (
        <div className="container text-center main-content">
            <Head>
                <title>Lakat Community</title>
            </Head>

            <div className="row mt-4">
                <div className="col">
                    <h1>Community</h1>
                    <h4>Join and Contribute</h4>
                </div>
            </div>



            <div className="row mt-4 mb-4">
                {[
                    {
                        display:'Leonhard Horstmeyer',
                        image_url: LeonhardHorstmeyer,
                        description: 'Leonhard is a theoretical physicist, an artistic researcher and a developer.'
                    },
                    {
                        display:'Adrian Zhunussov',
                        image_url: AdrianZhunussov,
                        description: 'Adrian is a project manager in the web3 sphere.'
                    },
                    {
                        display:'Mahdi Kourehpaz',
                        image_url: MahdiKourehpaz,
                        description: 'Mahdi is a data scientist, scholar in quantum chaos, software engineer and a tar player.'
                    }].map((name, index) => (
                    <div className="col" key={index}>
                        <div className="card">
                            <Image
                                className="card-img-top"
                                src={name.image_url}
                                alt={name.display}
                                height={300}
                                width={160}
                                // fill
                                style={{objectFit:"cover"}}
                                objectPosition="center"  // or any other value you prefer
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


            <div className="row mt-4 mb-4">
                <div className="col">
                    <button className="btn btn-primary" disabled>Join us</button>
                </div>
            </div>

            {/* ... Add more rows as needed ... */}
        </div>
    );
}
