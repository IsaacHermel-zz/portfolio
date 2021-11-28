// Modules
import smoothScroll from "./modules/scroll.js";
import progress from "./modules/progress.js";
import newElement from "./modules/newElement.js";

// Pages

import header from "./pages/header.js";
import introducao from "./pages/introducao.js";
import experiencia from "./pages/experiencia.js";
import formacao from "./pages/formacao.js";
import tecnologias from "./pages/tecnologias.js";
import projetos from "./pages/projetos.js";
import footer from "./pages/footer.js";

// Footer
newElement('header', header);
newElement('introducao', introducao);
newElement('experiencia', experiencia);
newElement('formacao', formacao);
newElement('tecnologias', tecnologias);
newElement('projetos', projetos);
newElement('footer', footer);

smoothScroll();
const progressInterval = setInterval(() => progress(), 500); 

setTimeout(() => {
    clearInterval(progressInterval)
}, 15000);