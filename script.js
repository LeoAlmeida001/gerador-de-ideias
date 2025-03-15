const ideas = {
    tecnologia: ["Criar um app de produtividade", "Desenvolver um assistente de IA"],
    saude: ["Criar um diário de bem-estar", "Plataforma de treinos personalizados"],
    games: ["Desenvolver um jogo mobile", "Criar um torneio online"],
    arte: ["Criar uma galeria digital", "Plataforma para cursos de arte"],
    negocios: ["Criar um marketplace de nicho", "Plataforma para freelancers"]
};

const translations = {
    pt: { title: "Idea Spark", subtitle: "Selecione seus interesses", button: "Gerar Ideias" },
    en: { title: "Idea Spark", subtitle: "Select your interests", button: "Generate Ideas" },
    es: { title: "Idea Spark", subtitle: "Selecciona tus intereses", button: "Generar Ideas" }
};

const languageSelector = document.getElementById("language-selector");
const generateBtn = document.getElementById("generate-btn");
const ideaResult = document.getElementById("idea-result");

languageSelector.addEventListener("change", (event) => {
    const lang = event.target.value;
    document.getElementById("title").textContent = translations[lang].title;
    document.getElementById("subtitle").textContent = translations[lang].subtitle;
    generateBtn.textContent = translations[lang].button;
});

generateBtn.addEventListener("click", () => {
    const selected = Array.from(document.querySelectorAll("#interests input:checked"))
        .map(input => input.value);
    
    if (selected.length === 0) {
        ideaResult.textContent = "Selecione pelo menos um interesse.";
        return;
    }
    
    const randomCategory = selected[Math.floor(Math.random() * selected.length)];
    const randomIdea = ideas[randomCategory][Math.floor(Math.random() * ideas[randomCategory].length)];
    ideaResult.textContent = randomIdea;
});
