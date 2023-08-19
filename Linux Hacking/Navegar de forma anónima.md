![[header_tux.jpg]]
# Navegar de forma anónima

---
**Tags:** #info #hacking #tool #tor #kali 

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

>[!tip] Relacionado: [[Conectarse usando TOR]]

---
## Pasos generales 

Navegar de forma anónima en Internet implica proteger tu identidad y datos personales mientras exploras la web. 

Recuerda que la privacidad en línea es un equilibrio entre anonimato y conveniencia. Aunque estas medidas pueden ayudarte a navegar de forma más anónima, no hay garantía absoluta de anonimato en Internet. Mantente informado sobre las últimas prácticas y tecnologías para mantener tus datos seguros y protegidos.
### Receta para Navegar anónimamente en Internet

**1. Usar un Navegador Web Seguro:**
   - Utiliza navegadores como Tor Browser, que está diseñado para preservar tu privacidad. Descárgalo desde el sitio oficial de Tor Project.

**2. Configurar una VPN:**
   - Utiliza una red privada virtual (VPN) para enmascarar tu dirección IP real. Escoge un proveedor confiable y configura la conexión a través de su aplicación.

**3. Navegar en Modo Privado:**
   - La mayoría de los navegadores tienen un modo de navegación privada (como "Navegación Privada" en Firefox o "Ventana de Incógnito" en Chrome). Esto evita que se guarden datos de navegación localmente.

**4. Utilizar el Motor de Búsqueda de Tor:**
   - Tor tiene su propio motor de búsqueda llamado "DuckDuckGo", que respeta la privacidad del usuario. Utilízalo en lugar de motores de búsqueda tradicionales.

**5. Bloquear Cookies y Rastreadores:**
   - Configura tu navegador para bloquear cookies de terceros y rastreadores que recopilan datos sobre tu actividad.

**6. Deshabilitar JavaScript:**
   - Algunos sitios web pueden rastrear a los usuarios a través de scripts JavaScript. Puedes desactivar JavaScript en tu navegador para aumentar tu anonimato, pero ten en cuenta que algunos sitios pueden no funcionar correctamente.

**7. Utilizar Extensiones de Privacidad:**
   - Instala extensiones como uBlock Origin y HTTPS Everywhere para bloquear anuncios y forzar conexiones seguras.

**8. Evitar Iniciar Sesión en Sitios Web:**
   - Evita iniciar sesión en sitios web mientras estás navegando de forma anónima. Esto puede exponer tu identidad.

**9. Evitar Compartir Información Personal:**
   - Evita proporcionar información personal en línea, como nombre real, dirección, número de teléfono, etc.

**10. Utilizar Redes de Onion:**
   - Si estás usando Tor Browser, puedes acceder a sitios web .onion, que son sitios dentro de la red Tor. Sin embargo, ten en cuenta que no todos estos sitios son legítimos o seguros.

---
## Conectarse usando TOR (service)

>[!tip] Relacionado: [[Conectarse usando TOR]]

Para conectarte a la red Tor utilizando la terminal de Linux, puedes utilizar el comando `tor`. 

Es importante tener en cuenta que el comando `tor` ejecuta el cliente Tor en el sistema, pero no proporciona una experiencia de navegación web interactiva como lo hace el navegador Tor Browser. Si deseas una experiencia completa de navegación web anónima, se recomienda utilizar el Tor Browser.

Recuerda que, al conectarte a la red Tor, tu tráfico de Internet se enruta a través de una serie de nodos en todo el mundo para preservar la privacidad, pero no garantiza un anonimato absoluto en todas las circunstancias.

1. **Instala Tor:**
   Si aún no tienes Tor instalado, puedes hacerlo utilizando el siguiente comando en la terminal:

   ```bash
   sudo apt-get install tor
   ```

   Este comando instalará el paquete Tor en tu sistema.

2. **Inicia el Servicio Tor:**
   Después de instalar Tor, inicia el servicio ejecutando:

   ```bash
   sudo service tor start
   ```

   Esto iniciará el servicio Tor en segundo plano.

3. **Verifica el Estado de Tor:**
   Puedes verificar si Tor se ha iniciado correctamente y está en funcionamiento usando:

   ```bash
   sudo service tor status
   ```

   Debería mostrar un mensaje que indica que el servicio está activo.

4. **Conéctate a la Red Tor:**
   Una vez que Tor esté en funcionamiento, puedes usar el comando `torsocks` para ejecutar aplicaciones a través de la red Tor. Por ejemplo, para abrir el navegador `curl` a través de Tor, usa:

   ```bash
   torsocks curl https://check.torproject.org/
   ```

   Este comando abrirá la página de verificación de Tor en tu navegador.

5. **Desconexión:**
   Para detener el servicio Tor, puedes usar:

   ```bash
   sudo service tor stop
   ```

---

## Conectarse usando TOR (systemctl)

Para conectarte a la red Tor utilizando `systemctl`, necesitas utilizar el comando `tor.service`. Aquí tienes los pasos para hacerlo:

1. **Instala Tor:**
   Si aún no tienes Tor instalado, puedes hacerlo utilizando el siguiente comando en la terminal:

   ```bash
   sudo apt-get install tor
   ```

   Esto instalará el paquete Tor en tu sistema.

2. **Inicia el Servicio Tor:**
   Una vez que Tor esté instalado, puedes usar `systemctl` para iniciar el servicio Tor:

   ```bash
   sudo systemctl start tor.service
   ```

   Esto iniciará el servicio Tor en segundo plano.

3. **Verifica el Estado de Tor:**
   Para verificar si Tor se ha iniciado correctamente y está en funcionamiento, puedes usar:

   ```bash
   sudo systemctl status tor.service
   ```

   Debería mostrarte información sobre el estado del servicio.

4. **Conéctate a la Red Tor:**
   Una vez que Tor esté en funcionamiento, puedes usar aplicaciones a través de la red Tor utilizando el comando `torsocks`. Por ejemplo, para abrir la página de verificación de Tor en tu navegador, usa:

   ```bash
   torsocks curl https://check.torproject.org/
   ```

   Esto enrutará la conexión a través de la red Tor.

5. **Detén el Servicio Tor:**
   Si deseas detener el servicio Tor, puedes usar:

   ```bash
   sudo systemctl stop tor.service
   ```

Recuerda que, al conectarte a la red Tor, tu tráfico de Internet se enruta a través de una serie de nodos en todo el mundo para preservar la privacidad. Sin embargo, utilizar el navegador Tor Browser proporciona una experiencia de navegación web más completa y segura en comparación con el uso de `torsocks`.

---
## Diferencia entre torsocks y proxychains

Ambos `torsocks` y `proxychains` son herramientas que permiten enrutar el tráfico de red a través de la red Tor para mejorar la privacidad y el anonimato, pero tienen algunas diferencias en cómo funcionan y se utilizan:

**1. torsocks:**
- `torsocks` es una herramienta que permite que las aplicaciones utilicen la red Tor de forma transparente, sin necesidad de configurar cada aplicación por separado.
- Funciona reemplazando las llamadas de red de las aplicaciones con llamadas que se enrutan a través de la red Tor.
- No todas las aplicaciones son compatibles con `torsocks`, ya que depende de cómo se realizan las llamadas de red en la aplicación.
- Se puede usar de manera más sencilla, simplemente añadiendo `torsocks` antes del comando que se ejecutará a través de Tor.

**2. proxychains:**
- `proxychains` es una herramienta que permite enrutar todo el tráfico de red de una aplicación a través de proxies, incluyendo la red Tor.
- Requiere configuración previa mediante un archivo de configuración (`/etc/proxychains.conf`), donde se especifican los proxies a utilizar.
- Es más versátil en términos de la elección de proxies (no solo Tor) y puede enrutar el tráfico a través de múltiples proxies en cadena.
- Requiere ajustar la configuración para cada aplicación que se desee ejecutar a través de Tor.

**Diferencias clave:**
- `torsocks` es más simple y directo, pero no funciona con todas las aplicaciones debido a su enfoque transparente.
- `proxychains` es más configurable y versátil, pero requiere una configuración previa y es más adecuado para usuarios que quieren más control sobre el enrutamiento del tráfico.

En resumen, si estás buscando una forma sencilla de enrutar el tráfico de una aplicación específica a través de Tor y esa aplicación es compatible con `torsocks`, esta es la opción más conveniente. Por otro lado, si deseas más flexibilidad y control sobre el enrutamiento de tráfico a través de proxies, incluyendo Tor, `proxychains` es la elección adecuada.

----
## Compatibilidad de aplicaciones con torsocks

Determinar si una aplicación es compatible con `torsocks` puede ser un proceso un tanto experimental, ya que no hay una lista exhaustiva de aplicaciones compatibles o incompatibles. Sin embargo, puedes seguir estos pasos para probar si una aplicación funciona correctamente con `torsocks`:

1. **Instala `torsocks`:**
   Asegúrate de tener `torsocks` instalado en tu sistema. Si aún no lo tienes, instálalo con el siguiente comando:

   ```bash
   sudo apt-get install torsocks
   ```

2. **Ejecuta la Aplicación con `torsocks`:**
   Agrega `torsocks` antes del comando que usarías normalmente para ejecutar la aplicación. Por ejemplo:

   ```bash
   torsocks tu_aplicacion
   ```

3. **Observa el Comportamiento:**
   Observa si la aplicación se ejecuta correctamente y si el tráfico de red se enruta a través de la red Tor. Algunos indicios de que `torsocks` podría estar funcionando correctamente incluyen:

   - Si la aplicación se ejecuta sin errores evidentes y muestra su salida habitual.
   - Si la dirección IP detectada por la aplicación difiere de tu dirección IP real.

4. **Prueba de Funcionalidad:**
   Algunas aplicaciones podrían no funcionar correctamente con `torsocks` debido a la forma en que realizan llamadas de red o manejan conexiones. Prueba las funcionalidades clave de la aplicación para asegurarte de que todo esté en orden.

5. **Investigación y Documentación:**
   Algunas aplicaciones podrían requerir configuraciones adicionales para funcionar con `torsocks`. Investiga la documentación de la aplicación o busca en línea si otros usuarios han tenido éxito en la ejecución de la aplicación a través de `torsocks`.

Recuerda que la compatibilidad con `torsocks` puede variar según la aplicación y la versión. Si una aplicación no funciona correctamente con `torsocks`, considera explorar alternativas o utilizar herramientas más versátiles como `proxychains`.

---
## Conectarse a TOR usando proxychains

Para conectarte a la red Tor utilizando `proxychains`, sigue estos pasos:

1. **Instala `proxychains`:**
   Si aún no tienes `proxychains` instalado en tu sistema, puedes instalarlo utilizando el siguiente comando:

   ```bash
   sudo apt-get install proxychains
   ```

2. **Configura `proxychains` para usar Tor:**
   `proxychains` requiere una configuración previa en el archivo de configuración `/etc/proxychains.conf`. Abre el archivo con un editor de texto:

   ```bash
   sudo nano /etc/proxychains.conf
   ```

   Busca la sección `[ProxyList]` y asegúrate de que la línea `socks4 127.0.0.1 9050` esté descomentada. Esto indica que se usará el proxy Tor en `localhost` en el puerto `9050`. Si estás usando Tor Browser, el puerto puede ser `9150`.

3. **Ejecuta Aplicaciones con `proxychains`:**
   Para ejecutar una aplicación a través de `proxychains`, simplemente agrega `proxychains` antes del comando que usarías normalmente. Por ejemplo:

   ```bash
   proxychains tu_aplicacion
   ```

   Esto enrutará el tráfico de red de la aplicación a través del proxy Tor configurado en `proxychains`.

4. **Verifica la Conexión:**
   Una vez que hayas ejecutado la aplicación con `proxychains`, verifica que el tráfico de red esté siendo enrutado a través de la red Tor. Puedes usar sitios web como `https://check.torproject.org/` para verificar si estás navegando a través de Tor.

5. **Prueba de Funcionalidad:**
   Al igual que con `torsocks`, algunas aplicaciones podrían no funcionar correctamente con `proxychains`. Prueba las funcionalidades clave de la aplicación para asegurarte de que todo esté en orden.

Recuerda que `proxychains` te permite enrutar el tráfico de red de múltiples aplicaciones a través de proxies, no solo Tor. Asegúrate de usar el proxy adecuado para tus necesidades de privacidad.

---


