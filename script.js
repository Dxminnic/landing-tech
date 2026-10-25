// REGISTRAR PLUGIN SCROLLTRIGGER DE GSAP
gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 1. CALCULADORA DE PRESUPUESTO INTERACTIVA
// ==========================================
const inputPaginas = document.getElementById('paginas');
const inputPrecio = document.getElementById('precio');
const textoCosto = document.getElementById('costo-estimado');

function calcularPresupuesto() {
    const paginas = parseFloat(inputPaginas.value) || 0;
    const precio = parseFloat(inputPrecio.value) || 0;
    const total = paginas * precio;
    
    // Modificación dinámica del elemento por su ID
    textoCosto.textContent = `$${total.toLocaleString('en-US')}`;
}

// Eventos para actualizar en tiempo real
inputPaginas.addEventListener('input', calcularPresupuesto);
inputPrecio.addEventListener('input', calcularPresupuesto);


// ==========================================
// 2. ANIMACIONES CON GSAP (MÍNIMO 3)
// ==========================================

// ANIMACIÓN 1: Entrada del Hero al cargar la página
gsap.from(".hero-title", {
    duration: 1.2,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 0.2
});

gsap.from(".hero-subtitle", {
    duration: 1.2,
    y: 30,
    opacity: 0,
    ease: "power3.out",
    delay: 0.5
});

gsap.from(".hero-buttons", {
    duration: 1,
    y: 20,
    opacity: 0,
    ease: "power3.out",
    delay: 0.8
});

// ANIMACIÓN 2: Aparición escalonada de las tarjetas de Servicios al hacer Scroll
gsap.from(".service-card", {
    scrollTrigger: {
        trigger: "#servicios",
        start: "top 80%",
    },
    duration: 0.8,
    y: 60,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)"
});

// ANIMACIÓN 3: Aparición de las Tecnologías al hacer Scroll
gsap.from(".tech-item", {
    scrollTrigger: {
        trigger: "#tecnologias",
        start: "top 85%",
    },
    duration: 0.6,
    scale: 0.5,
    opacity: 0,
    stagger: 0.1,
    ease: "power2.out"
});