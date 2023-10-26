import Head from 'next/head';
import Image from 'next/image';
import LeonhardHorstmeyer from '../assets/img/LeonhardHorstmeyer.jpg';
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
                        display:'Adrian Z',
                        image_url: LeonhardHorstmeyer,
                        description: 'Adrian is a project manager in the web3 sphere.'
                    },
                    {
                        display:'Mahdi Kourepaz',
                        image_url: LeonhardHorstmeyer,
                        description: 'Mahdi is a software engineer and a tar player.'
                    }].map((name, index) => (
                    <div className="col" key={index}>
                        <div className="card">
                            <div className={`card-header bg-primary text-white`}>
                                {name.display}
                            </div>
                            <Image
                                className="card-img-top"
                                src={name.image_url}
                                alt={name.display}
                                height={200}
                                width={160}
                            />
                            <div className="card-body">
                                {name.description}
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
