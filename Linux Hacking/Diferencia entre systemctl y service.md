![[header_terminal.jpg]]
# Diferencia entres systemctl y service

---
**Tags:** #info #hacking #tool #tor #kali 

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

---

Tanto `systemctl` como `service` son comandos utilizados en sistemas Linux para gestionar servicios, pero operan de manera diferente y se asocian con diferentes sistemas de inicio.

**1. `service`:**
- `service` es un comando más antiguo y tradicional que se ha utilizado durante mucho tiempo para administrar servicios en sistemas basados en Unix y Linux. Funciona en una variedad de sistemas de inicio, incluyendo SysV y Upstart.
- Permite iniciar, detener, reiniciar, recargar y verificar el estado de los servicios del sistema.
- Su sintaxis generalmente se ve como: `service nombre_del_servicio acción`.

**2. `systemctl`:**
- `systemctl` es un comando más moderno que se introdujo con systemd, un sistema de inicio ampliamente adoptado en distribuciones más recientes de Linux.
- Ofrece un control más granular y mejorado sobre los servicios, permitiendo la gestión de unidades systemd, que no solo incluyen servicios, sino también otros componentes del sistema.
- Las acciones típicas son `start`, `stop`, `restart`, `enable`, `disable`, `status`, etc.
- Su sintaxis generalmente se ve como: `systemctl acción nombre_del_servicio`.

**Diferencias clave:**
- `service` es más común en sistemas más antiguos o en distribuciones que aún utilizan sistemas de inicio heredados, como SysV o Upstart.
- `systemctl` es el enfoque moderno y más amplio de administración de servicios, y es utilizado por sistemas que han adoptado systemd como sistema de inicio (como Ubuntu a partir de la versión 15.04 y muchas otras distribuciones recientes).

En resumen, si estás utilizando una distribución que usa systemd como sistema de inicio, como muchas distribuciones modernas, `systemctl` es la opción preferida. Si estás en un sistema con un sistema de inicio heredado, como SysV o Upstart, `service` es la opción más adecuada.

---

