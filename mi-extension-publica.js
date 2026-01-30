(function() {
    console.log("🚀 Cargando Extension...");

    class MiExtension extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }
        connectedCallback() {
            this.shadowRoot.innerHTML = `
                <div style="background: #764ba2; color: white; padding: 20px; border-radius: 10px; text-align: center; font-family: sans-serif;">
                    <h2>✅ ¡Hola desde GitHub, Teo!</h2>
                    <p>La extension ya esta activa en Liferay 7.4</p>
                </div>
            `;
            console.log("✅ Renderizado con exito");
        }
    }

    if (!customElements.get('mi-extension-liferay')) {
        customElements.define('mi-extension-liferay', MiExtension);
        console.log("✅ Elemento registrado");
    }
})();
