// mi-extension-publica.js - Para Liferay Custom Element
(function() {
    console.log("📦 Cargando Client Extension pública...");
    
    if (typeof customElements === 'undefined') {
        console.error("❌ Web Components no soportados");
        return;
    }
    
    class MiExtensionLiferay extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            console.log("✅ Custom Element instanciado");
        }

        connectedCallback() {
            console.log("🔗 Custom Element conectado al DOM");
            this.render();
        }

        render() {
            const timestamp = new Date().toLocaleString();
            const browserInfo = navigator.userAgent.split(')')[0] + ')';
            
            this.shadowRoot.innerHTML = `
                <style>
                    :host {
                        display: block;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    }
                    .extension-container {
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        border-radius: 15px;
                        padding: 30px;
                        color: white;
                        max-width: 500px;
                        margin: 20px auto;
                        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                        text-align: center;
                    }
                    .extension-title { font-size: 2em; margin-bottom: 15px; font-weight: bold; }
                    .extension-status {
                        background: rgba(255,255,255,0.2);
                        padding: 10px 20px;
                        border-radius: 25px;
                        display: inline-block;
                        margin-bottom: 20px;
                        font-weight: bold;
                    }
                    .extension-info {
                        background: rgba(255,255,255,0.1);
                        padding: 20px;
                        border-radius: 10px;
                        text-align: left;
                        margin: 20px 0;
                        font-size: 0.9em;
                    }
                    .extension-button {
                        background: white;
                        color: #667eea;
                        border: none;
                        padding: 12px 30px;
                        border-radius: 25px;
                        font-size: 1em;
                        cursor: pointer;
                        margin: 10px;
                        font-weight: bold;
                        transition: all 0.3s;
                    }
                    .extension-button:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                    }
                </style>
                <div class="extension-container">
                    <div class="extension-title">🎉 Mi Client Extension</div>
                    <div class="extension-status">✅ FUNCIONANDO EN LIFERAY</div>
                    <p>¡Esta es una Client Extension activa en Liferay 7.4!</p>
                    
                    <div class="extension-info">
                        <strong>Información:</strong><br>
                        • Hora: ${timestamp}<br>
                        • Navegador: ${browserInfo}<br>
                        • URL: ${window.location.hostname}<br>
                        • Plataforma: Liferay DXP 7.4
                    </div>
                    
                    <button class="btn-action extension-button">Probar Función</button>
                    <button class="btn-alert extension-button">Ver Mensaje</button>
                </div>
            `;

            // Manejo de eventos interno
            this.shadowRoot.querySelector('.btn-action').addEventListener('click', () => {
                console.log('Acción ejecutada');
                this.dispatchEvent(new CustomEvent('liferay-extension-event', {
                    detail: { type: 'user-action', data: 'test' },
                    bubbles: true,
                    composed: true
                }));
            });

            this.shadowRoot.querySelector('.btn-alert').addEventListener('click', () => {
                alert('🎊 ¡Client Extension funcionando!\n\nCreada en Windows y activa en Liferay 7.4.');
            });
        }
    }

    const elementName = 'mi-extension-liferay';
    if (!customElements.get(elementName)) {
        customElements.define(elementName, MiExtensionLiferay);
        console.log('✅ Custom Element registrado: ' + elementName);
    } else {
        console.warn('⚠️ El elemento ya estaba registrado');
    }
})();