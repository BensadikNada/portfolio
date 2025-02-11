import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faBootstrap, faJs, faReact, faPython, faPhp, faLaravel, faWordpress } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    tele: '',
    email: '',
    sujet: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to Formspree endpoint
      const response = await fetch('https://formspree.io/f/xanqbeew', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message envoyé avec succès !');
        setFormData({ fullName: '', tele: '', email: '', sujet: '', message: '' }); // Reset form
      } else {
        alert('Erreur lors de l\'envoi du message.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur s\'est produite.');
    }
  };

  return (
    <>
      <div className="about-me-right">
        <div className="personal">
          <img src="istockphoto-1332378618-612x612.jpg" alt="profile" />
          <div>
            <h1>Bensadik Nada</h1>
            <h2>Développement Web / Full Stack</h2>
          </div>
        </div>
        <p>Diplômé en tant que technicienne spécialisée en développement digital, option full stack, je suis passionnée
          par le monde du numérique. Déterminée à continuer d'apprendre et à progresser dans ce domaine, je m'investis
          pleinement pour atteindre des résultats de qualité et élargir constamment mes compétences.</p>
        <a href="Bensadik Nada.pdf" target="_blank" download>
          Télécharger mon CV <i className="fa-solid fa-download"></i>
        </a>
      </div>
      <div className="about-me-left">
        <div className="competence">
          <h1>Mes compétences</h1>
          <hr />
          <FontAwesomeIcon className='brand-icon' icon={faHtml5} style={{ color: "#e34c26" }} />
          <FontAwesomeIcon className='brand-icon' icon={faCss3Alt} style={{ color: "#2965f1" }} />
          <FontAwesomeIcon className='brand-icon' icon={faBootstrap} style={{ color: "#6f1bee" }} />
          <FontAwesomeIcon className='brand-icon' icon={faJs} style={{ color: "#f7df1e" }} />
          <FontAwesomeIcon className='brand-icon' icon={faReact} style={{ color: "#61dafb" }} />
          <FontAwesomeIcon className='brand-icon' icon={faDatabase} style={{ color: "#1a1a1a" }} />
          <FontAwesomeIcon className='brand-icon' icon={faPython} style={{ color: "#306998" }} />
          <FontAwesomeIcon className='brand-icon' icon={faPhp} style={{ color: "#8993be" }} />
          <FontAwesomeIcon className='brand-icon' icon={faLaravel} style={{ color: "#ff2d20" }} />
          <FontAwesomeIcon className='brand-icon' icon={faWordpress} style={{ color: "#21759b" }} />
        </div>
        <div className="service">
          <h1>Mes services</h1>
          <hr />
          <ul>
            <li>Développement Front-End</li>
            <li>Développement Back-End</li>
            <li>Développement Cloud</li>
            <li>Structure et vérification du code</li>
          </ul>
        </div>
        <div className="experience">
          <h1>Expériences</h1>
          <hr />
          <h3>Conception et réalisation de plusieurs projets variés</h3>
          <ul>
            <li>Participation aux projets Suptech-Santé et Suptech-Environnement en Laravel (backend). Contribution à la structuration du projet, à la gestion de la base de données et à la correction des erreurs. Développement des fonctionnalités administratives : gestion des inscriptions, suivi des étudiants, exportation des données Excel, gestion des bourses, contacts et sessions via cookies.</li> <br />
            <li>Développement du backend du projet de gestion de stock de la province de Mohammedia avec Laravel et MySQL. Conception de la base de données et mise en place d’un système de gestion des rôles (administrateur, utilisateur, visualiseur). Implémentation des fonctionnalités d’import/export Excel, de statistiques globales et de génération de rapports PDF. Suivi des actions via la classe Observers et intégration de visualisations graphiques (LineChart, DonutChart). Gestion des opérations CRUD pour les utilisateurs, produits, catégories et stocks.</li><br />
            <li>Refonte du projet 10km Casablanca, en migrant une application existante développée en PHP natif vers le framework Laravel. Développement des parties client et administrateur, en optimisant la structure du code, la gestion des données et les performances de l’application.</li> <br />
            <li>Développement de la partie backend du projet DTAIH (Digital Transformation and AI in Healthcare) en Laravel, avec gestion des rôles (Author, Reviewer, Chair) et du processus de soumission et d’évaluation. Conception et création de la base de données, authentification avec sessions et cookies, et inscription en deux étapes. Implémentation des fonctionnalités de dépôt et validation des soumissions (articles, présentations, copyrights), avec envoi automatique d’e-mails pour confirmer chaque soumission, informer les auteurs des retours des reviewers et notifier la décision finale du chair. Mise en place d’un système d’évaluation permettant aux reviewers d’attribuer des avis sur les soumissions et aux chairs de gérer les participants, d’assigner les tracks et de prendre les décisions finales. Gestion des fichiers avec possibilité de téléchargement individuel ou en archive ZIP, et intégration des CRUD pour la gestion des utilisateurs et des soumissions.</li>
          </ul>
          <h3>Formation en Développement Web et Gestion de Projets Numériques</h3>
          <p>J'ai suivi une formation en développement web axée sur Next.js, Tailwind CSS, et WordPress. J'ai appris à
            utiliser des outils comme ACF et Gutenberg pour améliorer la fonctionnalité des sites et j'ai renforcé
            mes compétences en télétravail et en gestion de projets numériques.</p>
          <h3>Première Expérience en Conception Web sur WordPress</h3>
          <p>Ma première expérience professionnelle dans le domaine de la création web a été la conception et le
            développement d'une section dédiée au recrutement d'entreprises, entièrement réalisée sur la plateforme
            WordPress. J'ai entrepris ce projet avec enthousiasme et détermination, cherchant à exploiter les
            fonctionnalités puissantes de WordPress pour créer une interface dynamique et conviviale.</p>
        </div>
        <div className="contact">
          <h1>Contacter avec moi</h1>
          <hr />
          <form id="contactForm" onSubmit={handleSubmit}>
            <label htmlFor="fullName">Votre Nom Complet</label>
            <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required />

            <label htmlFor="tele">Téléphone</label>
            <input type="tel" name="tele" id="tele" value={formData.tele} onChange={handleChange} required />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="sujet">Sujet</label>
            <input type="text" name="sujet" id="sujet" value={formData.sujet} onChange={handleChange} required />

            <label htmlFor="message">Votre message</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange} required></textarea>

            <button type="submit">Envoyer Message</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;