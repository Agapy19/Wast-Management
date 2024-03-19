import React from 'react'
import './Services.css'
import Button from './Button'
import Header from './Header'
import TopBar from './TopBar';
import Footer from './Footer';
const Services = () => {
    return (
        <section >
            <TopBar />
            <Header />
            <div className="service">
                <div className="service__text">
                    <h2>Plongez dans un univers de solutions sophistiquées avec Wast Management, où chaque service est minutieusement conçu pour répondre à  tous vos besoins en matière de gestion des déchets.</h2>
                </div>
                <a href="/services" className='btn btn-about'>Explorez</a>

            </div>
            <div className="service-contain">
                <div className="service-contain__text">
                    <h1>Nos Services</h1>
                    <p>Explorez notre vaste sélection de services,
                        méticuleusement élaborés  pour répondre de manière exhaustive à tous vos besoins en matière
                        de  gestion des déchets,
                        vous offrant ainsi une solution complète et  personnalisée.
                    </p>
                </div>
                <div className="service-contain__contenair">
                    <div className="box-one">
                        <h2>TRI DES DECHETS</h2>
                        <p>Le service de tri offre la possibilité de classifier
                            facilement vos dechets en différentes catégories,
                            telles que les déchets recyclables,les organique,
                            les dangereux, etc</p>

                    </div>
                    <div className="box-two">
                        <img src="/src/Images/sertri.png" alt="" />
                    </div>
                    <div className="box-three">
                        <img src="/src/Images/serfosse.png" alt="" />
                    </div>
                    <div className="box-four">
                        <h2>DEBOUCHAGE DES FOSSES</h2>
                        <p>Le débouchage des fosses
                            vous permet de demander facilement l’élimination des dechets organique
                            accumulés dans vos fosses septiques,vos puisards ou vos systèmes
                            de traitement des eaux usées</p>
                    </div>
                    <div className="box-five">
                        <h2>RECOLTE DES DECHETS</h2>
                        <p>Le service de collecte des dechets vous
                            offre la possibilité de programmer des ramassages
                            reguliers de vos dechets menagers,recyclablles,organiques ou autres,
                            directement depuis l’application vous pouvez définir des horaires de collecte récurrents
                            ou des dates spécifique pour la collecte</p>
                    </div>
                    <div className="box-six">
                        <img src="/src/Images/recolte.png" alt="" />
                    </div>
                </div>
                <a href="/contact" className='btn btn-primary'>Contactez-nous</a>

            </div>
            <Footer />
        </section>
    )
}

export default Services