import React from 'react';
import Button from './Button';
import './About.css'
import Equipe from './Equipe';
import Header from './Header';
import TopBar from './TopBar';
import Footer from './Footer';

const About = () => {
    return (
        <section>
            <TopBar />
            <Header />
            <div className='about'>

                <div className="about__text">
                    <h1>À Propos De Nous</h1>
                    <p>Plongez dans notre univers dédié à la préservation de l'environnement avec notre entreprise et notre application Wast Management. À travers la collecte, le tri et le débouchage des fosses septiques, nous incarnons une vision où chaque geste compte pour bâtir un avenir plus propre et plus durable.
                        Bienvenue chez nous, où l'engagement pour la planète guide chacune de nos actions</p>

                    <div className="about__text-btn">
                        <a href="/services" className='btn btn-about'>Nos services</a>
                        <a href="/contact" className='btn btn-about-two'>Contactez-nous</a>
                    </div>
                </div>

            </div>
            <div className="about-vision">
                <div className="about-vision-contain">
                    <div className="about-vision-contain-box1">
                        <h1>Notre Vision</h1>
                        <p>Notre vision est de devenir le partenaire incontournable pour une gestion des déchets intelligente et durable. Wast Management  a été  créer  pour révolutionner la manière dont les communautés et les entreprises interagissent avec leurs déchets, en offrant des solutions personnalisées, pratiques et innovantes. Nous nous engageons à promouvoir une culture du zéro déchet en facilitant le tri, la collecte  des déchets et le débouchage des fosses septiques de manière efficace et transparente. Notre objectif ultime est de contribuer à un environnement plus propre et plus sain pour les générations futures, tout en offrant une expérience utilisateur exceptionnelle et enrichissante</p>
                        <a href="/login" style={{color:"#303D4D"}} className='btn btn-about-two'>Abonnez-vous</a>
                    </div>
                    <div className="about-vision-contain-box2">
                        <img src="src/Images/vision.png" alt="" />
                    </div>
                </div>


            </div>
            <div className="about-mision">
                <div className="about-mission-contain">
                    <div className="about-mission-contain-box1">
                        <h1>Notre Mission</h1>
                        <p>Notre mission est de révolutionner la gestion des déchets en offrant une solution innovante et complète via notre application. Nous nous engageons à aider nos clients à optimiser leurs processus de gestion des déchets, à réduire leurs coûts, à minimiser leur impact environnemental et à assurer une conformité réglementaire rigoureuse. Grâce à notre plateforme, nous visons à simplifier la collecte, le suivi , l'élimination des déchets ainsi que le debouchage des fosses septique, tout en fournissant des outils d'analyse avancés pour une prise de décision éclairée. Notre entreprise s'efforce également de promouvoir la durabilité environnementale et de sensibiliser à l'importance de la gestion responsable des déchets au sein des communautés et des industries que nous servons.</p>
                        <a href="/contact" style={{color:"#303D4D"}} className='btn btn-about-two'>Contactez-nous</a>
                    </div>
                    <div className="about-mission-contain-box2">
                        <img src="src/Images/mission.png" alt="" />
                    </div>
                </div>
            </div>
            {/* About Value Client */}
            <div className='about-value-client'>
                <div className="itm">
                    <h2>70K+</h2>
                    <span>Clients</span>
                </div>
                <div className="itm">
                    <h2>30K</h2>
                    <span>Mentors</span>
                </div>
                <div className="itm">
                    <h2>50</h2>
                    <span>Enployés</span>
                </div>
                <div className="itm">
                    <h2>50K+</h2>
                    <span>Commandes</span>
                </div>
            </div>
            {/* About Equipe */}
            <div className="about-equipe">
                <h1>Nos Equipes</h1>
                <div className="about-equipe-contain">
                    <Equipe nom="Agapy Mafo" description="directice general" profile="/src/Images/agapy.png" />
                    <Equipe nom="Shannon Inda" description="Chef superviseur" profile="/src/Images/shannon.png" />
                    <Equipe nom="Althy Kasongo" description="Superviseur adjointe" profile="/src/Images/althy.png" />
                    <Equipe nom="Coralie Wembo" description="Gerante chef" profile="/src/Images/coralie.png" />
                    <Equipe nom="V Tshatsho" description="Gerant adjoint" profile="/src/Images/vincent.png" />
                    <Equipe nom="E Musampa" description="Assistant chef" profile="/src/Images/eliade.png" />
                    <Equipe nom="Kestia Kasongo" description="Assistante adjointe" profile="/src/Images/kestia.png" />
                    <Equipe nom="Lise Mbelu" description="Secretaire" profile="/src/Images/lise.png" />
                    <Equipe nom="Ayadra Kyungu" description="conseillère" profile="/src/Images/aya.png" />
                </div>

                        <a href="/contact" className='btn'>Contacter</a>


            </div>
            {/* About Partenaire */}
            <div className='about-partenaire-contain'>
                <h1>Nos partenaires</h1>
                <div className="about-partenaire-grid">
                    <img src="src/Images/sokoyetu.png" alt="" />
                    <img src="src/Images/althynaise.png" alt="" />
                    <img src="src/Images/kadea.png" alt="" />
                    <img src="src/Images/gcm.png" alt="" />
                    <img src="src/Images/psaro.png" alt="" />
                    <img src="src/Images/rawbank.png" alt="" />
                </div>

            </div>
            {/* About Resum */}
            <div className='about-resum'>
                <div className="about-resum-box1">
                    <h1> " </h1>
                    <p>À travers notre engagement envers l'excellence opérationnelle, l'innovation constante et le respect de l'environnement, nous visons à être le partenaire de confiance de choix pour toutes vos besoins en gestion des déchets</p>
                    <a href="/contact" className='btn btn-about'>Contacter</a>
                </div>
                <div className="about-resum-box2">
                    <img src="src/Images/resum.png" alt="" />
                </div>

            </div>
            <Footer />
        </section>

    );
};
export default About;