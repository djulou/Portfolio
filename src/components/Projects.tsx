import { useState } from "react";
import { Project } from "../data/types";
import "../styles/Projects.css";

// --- IMAGES PROJETS ---
import pact1 from "../../public/img/img_1_pact.webp";
import pact2 from "../../public/img/img_2_pact.webp";
import pact3 from "../../public/img/img_3_pact.webp";
import pact4 from "../../public/img/img_4_pact.webp";

import sudoku1 from "../../public/img/sudoku_1.webp";
import sudoku2 from "../../public/img/sudoku_2.webp";
import sudoku3 from "../../public/img/sudoku_3.webp";

import patio1 from "../../public/img/patio_1.webp";
import patio2 from "../../public/img/patio_2.webp";
import patio3 from "../../public/img/patio_3.webp";

import sudoku2_1 from "../../public/img/sudoku2_1.webp";
import sudoku2_2 from "../../public/img/sudoku2_2.webp";
import sudoku2_3 from "../../public/img/sudoku2_3.webp";

import reine1 from "../../public/img/reine1.webp";
import reine2 from "../../public/img/reine2.webp";
import reine3 from "../../public/img/reine3.webp";

import doc1 from "../../public/img/doc1.webp";
import doc2 from "../../public/img/doc2.webp";
import doc3 from "../../public/img/doc3.webp";

import apache1 from "../../public/img/apache1.webp";
import apache2 from "../../public/img/apache2.webp";
import apache3 from "../../public/img/apache3.webp";

import bdd1_1 from "../../public/img/bdd1_1.webp";
import bdd1_2 from "../../public/img/bdd1_2.webp";

import bdd2_1 from "../../public/img/bdd2_1.webp";
import bdd2_2 from "../../public/img/bdd2_2.webp";

import gantt1 from "../../public/img/gantt1.webp";
import gantt2 from "../../public/img/gantt2.webp";
import gantt3 from "../../public/img/gantt3.webp";
import gantt4 from "../../public/img/gantt4.webp";

import site1 from "../../public/img/site1.webp";
import site2 from "../../public/img/site2.webp";
import site3 from "../../public/img/site3.webp";
import site4 from "../../public/img/site4.webp";

import ikea1 from "../../public/img/ikea1.webp";
import ikea2 from "../../public/img/ikea2.webp";
import ikea3 from "../../public/img/ikea3.webp";

// --- LOGOS TECHNOS ---
import htmlLogo from "../../public/img/html.webp";
import cssLogo from "../../public/img/css.webp";
import reactLogo from "../../public/img/react.webp";
import tsLogo from "../../public/img/typescript.webp";
import gitLogo from "../../public/img/git.webp";
import phpLogo from "../../public/img/php.webp";
import postgresqlLogo from "../../public/img/postgresql.webp";
import figmaLogo from "../../public/img/figma.webp";
import pythonLogo from "../../public/img/python.webp";
import javaLogo from "../../public/img/java.webp";
import cLogo from "../../public/img/c.webp";
import linuxLogo from "../../public/img/linux.webp";
import bashLogo from "../../public/img/bash.webp";
import mysqlLogo from "../../public/img/mysql.webp";
import jiraLogo from "../../public/img/jira.webp";
import mongoLogo from "../../public/img/mongo.webp";
import iosLogo from "../../public/img/ios.webp";
import windowsLogo from "../../public/img/windows.webp";
import jsLogo from "../../public/img/javascript.webp";
import umlLogo from "../../public/img/uml.webp";
import apacheLogo from "../../public/img/apache.webp";
import csvLogo from "../../public/img/csv.webp";
import ganttLogo from "../../public/img/gantt.webp";

interface ProjectsProps {
  data: Project[];
}

export default function Projects({ data }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("Tous");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const MAX_TAGS_ON_CARD = 8;

  const projectImages: { [key: string]: string } = {
    "/images/img_1_pact.webp": pact1,
    "/images/img_2_pact.webp": pact2,
    "/images/img_3_pact.webp": pact3,
    "/images/img_4_pact.webp": pact4,
    "/images/sudoku_1.webp": sudoku1,
    "/images/sudoku_2.webp": sudoku2,
    "/images/sudoku_3.webp": sudoku3,
    "/images/patio_1.webp": patio1,
    "/images/patio_2.webp": patio2,
    "/images/patio_3.webp": patio3,
    "/images/sudoku2_1.webp": sudoku2_1,
    "/images/sudoku2_2.webp": sudoku2_2,
    "/images/sudoku2_3.webp": sudoku2_3,
    "/images/reine1.webp": reine1,
    "/images/reine2.webp": reine2,
    "/images/reine3.webp": reine3,
    "/images/doc1.webp": doc1,
    "/images/doc2.webp": doc2,
    "/images/doc3.webp": doc3,
    "/images/apache1.webp": apache1,
    "/images/apache2.webp": apache2,
    "/images/apache3.webp": apache3,
    "/images/bdd1_1.webp": bdd1_1,
    "/images/bdd1_2.webp": bdd1_2,
    "/images/bdd2_1.webp": bdd2_1,
    "/images/bdd2_2.webp": bdd2_2,
    "/images/gantt1.webp": gantt1,
    "/images/gantt2.webp": gantt2,
    "/images/gantt3.webp": gantt3,
    "/images/gantt4.webp": gantt4,
    "/images/site1.webp": site1,
    "/images/site2.webp": site2,
    "/images/site3.webp": site3,
    "/images/site4.webp": site4,
    "/images/ikea1.webp": ikea1,
    "/images/ikea2.webp": ikea2,
    "/images/ikea3.webp": ikea3,
  };

  const languageLogos: { [key: string]: string } = {
    HTML: htmlLogo,
    HTML5: htmlLogo,
    CSS: cssLogo,
    CSS3: cssLogo,
    React: reactLogo,
    TypeScript: tsLogo,
    JavaScript: jsLogo,
    Git: gitLogo,
    PHP: phpLogo,
    PostgreSQL: postgresqlLogo,
    SQL: mysqlLogo,
    Figma: figmaLogo,
    Python: pythonLogo,
    Java: javaLogo,
    C: cLogo,
    Linux: linuxLogo,
    Bash: bashLogo,
    MySQL: mysqlLogo,
    Jira: jiraLogo,
    MongoDB: mongoLogo,
    IOS: iosLogo,
    Windows: windowsLogo,
    UML: umlLogo,
    Apache: apacheLogo,
    CSV: csvLogo,
    Gantt: ganttLogo,
  };

  const getStickerClass = (category: string) => {
    switch (category) {
      case "Scolaire":
        return "sticker-school";
      case "Professionnel":
        return "sticker-pro";
      case "Personnel":
        return "sticker-personal";
      default:
        return "";
    }
  };

  const filteredProjects = data.filter((project) => {
    if (activeFilter === "Tous") return true;
    return project.category === activeFilter;
  });

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject || selectedProject.image.length <= 1) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.image.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject || selectedProject.image.length <= 1) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.image.length - 1 : prev - 1
    );
  };

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="projets" className="projet">
      <h1 className="title">Projets</h1>

      <div className="filter-buttons">
        {["Tous", "Scolaire", "Personnel", "Professionnel"].map((category) => (
          <button
            key={category}
            className={activeFilter === category ? "active" : ""}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="container">
        {filteredProjects.map((project) => {
          const allTags = [...project.tags, ...project.technologies];
          const firstImage =
            project.image && project.image.length > 0 ? project.image[0] : "";
          const visibleTags = allTags.slice(0, MAX_TAGS_ON_CARD);
          const remainingTags = allTags.length - MAX_TAGS_ON_CARD;

          return (
            <div
              key={project.id}
              className="card"
              onClick={() => openProject(project)}
            >
              <span className={`sticker ${getStickerClass(project.category)}`}>
                {project.category}
              </span>
              <h3 className="card_title">{project.title}</h3>
              <ul>
                {visibleTags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
                {remainingTags > 0 && (
                  <li className="tag-more">+{remainingTags}</li>
                )}
              </ul>
              <img
                src={projectImages[firstImage] || firstImage}
                alt={project.title}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      {selectedProject && (
        <div className="full-page-overlay">
          <div className="full-page-content">
            <div className="page-header-actions">
              <button className="back-button" onClick={closeProject}>
                &larr; Retour aux projets
              </button>
            </div>

            <div className="detail-split">
              {/* --- 1. PARTIE TEXTE (Maintenant à GAUCHE) --- */}
              <div className="detail-right">
                <div className="detail-header">
                  <span
                    className={`sticker-detail ${getStickerClass(
                      selectedProject.category
                    )}`}
                  >
                    {selectedProject.category}
                  </span>
                  <h1>{selectedProject.title}</h1>
                </div>

                <div className="detail-tags">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="detail-tag-item">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="detail-description">
                  <p>{selectedProject.description}</p>
                </div>

                {selectedProject.technologies &&
                  selectedProject.technologies.length > 0 && (
                    <div className="tech-stack-container">
                      <h3>Technologies utilisées</h3>
                      <div className="tech-logos-grid">
                        {selectedProject.technologies.map((techName, i) => {
                          const logoSrc = languageLogos[techName];
                          return (
                            <div
                              key={i}
                              className="tech-logo-item"
                              title={techName}
                            >
                              {logoSrc ? (
                                <img src={logoSrc} alt={techName} />
                              ) : null}
                              <span>{techName}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
              </div>

              <div className="detail-left">
                <div className="carousel-wrapper-page">
                  {selectedProject.image.length > 0 && (
                    <img
                      src={
                        projectImages[
                          selectedProject.image[currentImageIndex]
                        ] || selectedProject.image[currentImageIndex]
                      }
                      alt={`Vue ${currentImageIndex + 1}`}
                      className="carousel-img-page"
                    />
                  )}

                  {selectedProject.image.length > 1 && (
                    <>
                      <button
                        className="carousel-btn prev"
                        onClick={handlePrevImage}
                      >
                        &#10094;
                      </button>
                      <button
                        className="carousel-btn next"
                        onClick={handleNextImage}
                      >
                        &#10095;
                      </button>
                      <div className="carousel-dots">
                        {selectedProject.image.map((_, idx) => (
                          <span
                            key={idx}
                            className={`dot ${
                              idx === currentImageIndex ? "active" : ""
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(idx);
                            }}
                          ></span>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* BOUTON SOUS L'IMAGE */}
                {(selectedProject.link || selectedProject.download) && (
                  <div className="left-action-container">
                    {/* 1. Bouton Lien (GitHub / Web) */}
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="detail-link-btn github"
                      >
                        Voir le code / Site
                      </a>
                    )}

                    {/* 2. Bouton Téléchargement (Zip) */}
                    {selectedProject.download && (
                      <a
                        href={selectedProject.download}
                        download
                        className="detail-link-btn download"
                      >
                        Télécharger le projet
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
