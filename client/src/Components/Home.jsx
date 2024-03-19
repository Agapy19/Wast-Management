import React from 'react';
import Button from './Button';
import ProgressBar from './ProgressBar'
import Hometestimony from './homeTestimony';
import { Link } from "react-router-dom";
import './Home.css'
import Header from './Header';
import TopBar from './TopBar';
import Footer from './Footer';


function Home() {

    return (

        <main>
            <TopBar />
            <Header />
            <div className='home'>
                <div className="home__text">
                    <h2 style={{ color: "#fff", fontWeight: "bold" }}>Faites le tri et la collecte
                        de vos dechets ainsi que
                        le debouchage des fosses
                        avec Wast Management
                    </h2>
                    <div className="hom__text-btn">
                        <a href="/contact" className='btn'>Nos services</a>
                        <a href="/about" className='btn btn-primary'>En savoir plus</a>
                    </div>
                </div>

            </div>
            <div className='home-service'>
                <img src="src/Images/tri.png" alt="" />
                <img src="src/Images/fosse.png" alt="" />
                <img src="src/Images/collecte.png" alt="" />
            </div>
            <div className='home-about'>
                <h1>Nous sommes Leader Dans Les Services De Gestion Des Déchets</h1>
                <p>Wast Management, une solution innovante, pratique et accessible partout à Lubumbashi!</p>
                <div className='home-about__contain'>
                    <div className='home-about__contain-box1'>
                        <img src="src/Images/poubell.jpg" alt="" />

                    </div>
                    <div className='home-about__contain-box2'>
                        <p>Wast Management  est  à la pointe pour trier, ramasser les déchets et déboucher les fosses septiques. Tout cela se fait en utilisant les meilleures méthodes et technologies pour réduire l'impact sur la nature, que ce soit pour les entreprises ou les maisons.</p>

                        <ProgressBar name="Tri des dechets" progress={65} />
                        <ProgressBar name="Débouchage des fosses " progress={70} />
                        <ProgressBar name="Collecte des dechets" progress={90} />
                        <a href="/about" className='btn'>Plus sur nous</a>
                    </div>
                </div>

            </div>
            <div className='home-about__container'>
                <div className='home-about__contain-service'>
                    <h1>Wast Management Services</h1>
                    <p>Waste Management est votre partenaire de confiance pour répondre à tous vos besoins en matière de gestion des déchets. Nous offrons des services de tri, de collecte des déchets et de débouchage des fosses septiques, conçus pour répondre à vos exigences spécifiques. Avec notre engagement envers l'excellence et notre expertise éprouvée, nous vous assurons des solutions fiables et efficaces pour maintenir un environnement propre et sain.</p>
                    <a href="/services" className='btn'>En savoir plus</a>
                </div>
                <div className='home-about__contain-service-box2'>
                    <img src="src/Images/Rectangle 41.png" alt="" />
                    <img src="src/Images/Rectangle 43.png" alt="" />
                    <img src="src/Images/Rectangle 70.png" alt="" />
                </div>
                <div className='home-client'>
                    <h1>Quelques-uns de nos valeureux clients</h1>
                    <div className="home-client-img">
                        <img src="src/Images/sokoyetu.png" alt="" />
                        <img src="src/Images/althynaise.png" alt="" />
                        <img src="src/Images/kadea.png" alt="" />
                        <img src="src/Images/gcm.png" alt="" />
                        <img src="src/Images/psaro.png" alt="" />
                        <img src="src/Images/rawbank.png" alt="" />
                    </div>

                </div>

            </div>
            <div className="home-contact">
                <div className="home-contact-contain">
                    <div className="hom-contact-contain-box1">
                        <h1>Nous Offrons Uniquement Des  Services De qualité</h1>
                        <a href="/contact" className='btn'>Contactez-nous</a>
                    </div>
                    <div className="hom-contact-contain-box2">
                        <img src="src/Images/dechet.png" alt="" />
                    </div>
                </div>
                <div class="value-client">
                    <div class="item">
                        <h2>65K</h2>
                        <span>clients sont contents</span>
                    </div>
                    <div class="item">
                        <h2>160+</h2>
                        <span>clients sont contents</span>
                    </div>
                    <div class="item">
                        <h2>150K</h2>
                        <span>Maison</span>
                    </div>
                    <div class="item">
                        <h2>42+</h2>
                        <span>Industries servies</span>
                    </div>
                </div>
            </div>
            <div className="home-testimony">
                <div className="home-testimony-text">
                    <h1>Temoignages Des Clients</h1>
                    <p>Retrouvez les temoignages de nos clients ainsi que leurs experiences.</p>
                </div>
                <div className="home-testimony-temoignage">
                    <Hometestimony name="Glody Mafo" paragraph="En tant que responsable d'une entreprise de taille moyenne, la gestion efficace de nos déchets a toujours été un défi majeur. Avant d'utiliser cette application, nous étions souvent confrontés à des retards dans la collecte, des erreurs de tri et des coûts élevés liés à la gestion des déchets"
                        color={{ border: "1px solid #7ED957" }} avatar="src/Images/glody.png" />
                    <Hometestimony name="Freezy Smart" paragraph="Cette application a révolutionné notre façon de gérer les déchets et a contribué à renforcer notre engagement envers la durabilité environnementale. Je la recommande vivement à toute entreprise cherchant à optimiser sa gestion des déchets tout en réduisant son impact sur l'environnement."
                        color={{ border: "1px solid #7ED957" }} avatar="src/Images/freezy.png" />
                    <Hometestimony name="Deoda Stone" paragraph="Depuis que nous avons commencé à utiliser cette application, notre processus de gestion des déchets s'est considérablement amélioré. L'interface conviviale nous permet de planifier facilement les collectes, de suivre en temps réel le statut de nos déchets et de générer des rapports détaillés pour analyser nos flux de déchets."
                        color={{ border: "1px solid #7ED957" }} avatar="src/Images/deo.png" />
                </div>
                <div className="home-testimony-btn">
                    <a href="/testimony" className='btn'>Voir Plus</a>

                </div>
            </div>
            <div className="home-commande">
                <div className="home-commande-text" style={{ padding: "20px", borderRadius: "10px" }}>
                    <h1 style={{ marginTop: "4%", width: "30%", color: "#fff", fontSize: "40px", fontWeight: "bold", marginLeft: "10%" }}>Laissez-nous Vous Aider À Planifier Votre Commande</h1>
                </div>
                <div className="home-commande-contain">
                    <p>Optimisez votre gestion des déchets, réduisez vos coûts et renforcez votre engagement envers la durabilité environnementale avec notre application intuitive.Simplifiez vos opérations, gagnez en efficacité et obtenez une tranquillité d'esprit totale en vous abonnant dès aujourd'hui à Wast Management</p>
                    <div className="home-commande-contain-box2">
                        <div class="input-with-button">
                            <input type="text" placeholder="Entrez votre adresse Email" />
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <button type="submit">Abonnez-vous</button>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </main>
        // 


    );
}
export default Home;