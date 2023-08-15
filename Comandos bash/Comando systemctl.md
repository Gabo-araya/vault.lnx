![[header_terminal.jpg]]
#  `systemctl`

---
**Tags:** #info #bash #linux 
**Fecha creación:** 12.08.2023
**Fecha ultima modificación:** 12.08.2023

> [!info] Volver a [[Home]] 

---

`systemctl` es un comando en sistemas operativos basados en Linux que se utiliza para administrar y controlar el sistema init y los servicios del sistema. Proporciona una interfaz para gestionar unidades de sistema, como servicios, sockets, dispositivos, montajes y más. `systemctl` es parte del sistema de inicialización systemd que se ha vuelto común en muchas distribuciones modernas de Linux.

## Casos de uso y ejemplos de `systemctl`

1. **Iniciar, detener y reiniciar servicios:**

   ```bash
   sudo systemctl start nombre_del_servicio
   sudo systemctl stop nombre_del_servicio
   sudo systemctl restart nombre_del_servicio
   ```

   Estos comandos permiten iniciar, detener y reiniciar un servicio específico.

2. **Verificar el estado de un servicio:**

   ```bash
   systemctl status nombre_del_servicio
   ```

   Muestra información sobre el estado actual del servicio, incluido si está activo o inactivo, los registros recientes y más.

3. **Habilitar y deshabilitar servicios en el arranque:**

   ```bash
   sudo systemctl enable nombre_del_servicio
   sudo systemctl disable nombre_del_servicio
   ```

   Habilitar un servicio hace que se inicie automáticamente en el arranque del sistema, mientras que deshabilitar un servicio lo excluye del arranque automático.

4. **Ver lista de unidades y servicios:**

   ```bash
   systemctl list-units --type=service
   ```

   Muestra una lista de todas las unidades de servicio (es decir, servicios) disponibles en el sistema.

5. **Ver unidades que han fallado:**

   ```bash
   systemctl --failed
   ```

   Muestra una lista de unidades que han fallado en el sistema.

6. **Recargar la configuración de systemd:**

   ```bash
   sudo systemctl daemon-reload
   ```

   Este comando se utiliza después de hacer cambios en las unidades de systemd para recargar la configuración.

7. **Verificar si un servicio está habilitado:**

   ```bash
   systemctl is-enabled nombre_del_servicio
   ```

   Muestra si un servicio está habilitado para el arranque automático.

`systemctl` es una herramienta esencial para administrar servicios en sistemas basados en Linux y es ampliamente utilizado para controlar el inicio, detención y gestión de servicios y unidades del sistema. Cada vez más distribuciones de Linux están adoptando systemd y, por lo tanto, `systemctl` se ha convertido en una parte fundamental de la administración del sistema.