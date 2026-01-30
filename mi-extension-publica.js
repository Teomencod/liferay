(function() {
    console.log("📦 Cargando Client Extension...");
    
    class MiExtensionLiferay extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }

        connectedCallback() {
            this.render();
            console.log("✅ Extension conectada");
        }

        render() {
            this.shadowRoot.innerHTML = `
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                            color: white; padding: 30px; border-radius: 15px; text-align: center;
                            font-family: sans-serif; box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                            margin: 20px;">
                    <h1>🚀 ¡Hola desde GitHub!</h1>
                    <p>Liferay 7.4 + Custom Element</p>
                    <button style="padding: 10px 20px; border-radius: 20px; border: none; cursor: pointer; font-weight: bold;" 
                            onclick="alert('¡Funciona perfectamente!')">Probar Botón</button>
                </div>
            `;
        }
    }

    const name = 'mi-extension-liferay';
    if (!customElements.get(name)) {
        customElements.define(name, MiExtensionLiferay);
        console.log("✅ Custom Element registrado con exito");
    }
})();
