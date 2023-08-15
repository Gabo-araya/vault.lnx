

![[header_terminal.jpg]]
# Comando `ifconfig`
---
**Tags:** #info #bash #linux #ciberseguridad #tool 
**Fecha creación:** 12.08.2023
**Fecha ultima modificación:** 12.08.2023

> [!info] Volver a [[Home]] 

Obtenido de: http://somebooks.es/comando-ifconfig-ubuntu/#:~:text=ifconfig%20sin%20argumentos,encuentren%20activos%20en%20nuestro%20sistema.

---

Es frecuente que únicamente utilicemos el comando **ifconfig** cuando necesitemos consultar información relacionada con la configuración de red de nuestro equipo. En general, sólo nos acordamos de él cuando experimentamos dificultades de conexión o cuando estamos tratando de ajustar su funcionamiento.

Aún así, se trata de un comando con características interesantes que conviene conocer bien para obtener de él todo su potencial. Una verdadera navaja suiza de la configuración de red. Por ese motivo, hoy vamos a profundizar en su funcionamiento. Y, para que resulte más instructivo, lo haremos a través de ejemplos.

---
## `ifconfig` sin argumentos

Este es, probablemente, el uso más extendido que se hace de `ifconfig`. Basta con escribir el nombre del comando y pulsar la tecla Intro. Al hacerlo, nos muestra los detalles de todos los interfaces de red que se encuentren activos en nuestro sistema.

```bash
ifconfig
```

Puede que, la primera vez que utilices el comando, recibas un error como el de la siguiente imagen.

Error al ejecutar `ifconfig`.

[![el-comando-ifconfig-en-Ubuntu-001](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-001.png)](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-001.png "el-comando-ifconfig-en-Ubuntu-001")

Tal y como nos dice el propio mensaje de error, el motivo es que no está instalado el paquete `net-tools`. Incluso nos ofrece el comando que necesitaremos para instalarlo:

```bash
sudo apt install net-tools
```

Una vez completada la instalación estaremos listos para comenzar a utilizar el comando.

Información ofrecida por `ifconfig`.

[![el-comando-ifconfig-en-Ubuntu-002](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-002.png)](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-002.png "el-comando-ifconfig-en-Ubuntu-002")

Como puedes ver en la imagen, la cantidad de información que obtenemos de cada adaptador de red es considerable. Por eso, vamos a tratar de analizarla de un modo más detallado, centrándonos en el primer adaptador que aparece:

- _Link encap_: indica el tipo de interfaz del adaptador de red. En nuestro caso, se trata de una interfaz _Ethernet_, que es la más frecuente.
- _direcciónHW_: muestra la _dirección MAC_ (_Media Access Control_), también conocida como dirección física, del adaptador de red. Se trata de un valor único para cada tarjeta de red Ethernet.
- _Direc. inet_: Contiene la _dirección IP_ del dispositivo para _TCP/IPv4_.
- _Difus_: muestra la dirección de broadcast para la red en la que nos encontramos.
- _Másc_: determina los bits que establecen el ámbito de la red
- _Dirección inet6_: Contiene la _dirección IP_ del dispositivo para _TCP/IPv6_.
- ACTIVO: Indica que se han cargado los módulos del núcleo relacionados con la interfaz Ethernet.
- DIFUSIÓN: Informa de que el dispositivo admite difusión, necesaria para obtener una _dirección IP_ a través de _DHCP_.
- FUNCIONANDO: Significa que la interfaz está preparada para recibir datos.
- MULTICAST: Indica que la interfaz Ethernet admite multicasting (un dispositivo puede enviar paquetes que tienen como receptores a varios adaptadores diferentes, que se encuentran a la espera)
- Las siglas MTU provienen de la expresión _Maximum Transmission Unit_.
    
    MTU: Indica el tamaño de los paquetes enviados o recibidos por el adaptador de red. De forma predeterminada, su valor será 1500
    
- Métrica: Muestra un número entero a partir de 0. En caso de que existan varios adaptadores de red en el mismo equipo, se debería dar preferencia al adaptador que tenga un valor menor en este parámetro. No obstante, en _GNU/Linux_ se utiliza el valor de métrica obtenido de la tabla de enrutamiento.
- _Paquetes RX_: Indica el número de paquetes recibidos hasta el momento por el adaptador. También incluye los siguientes datos:

- _errores_: Indica el número de paquetes recibidos con errores (CRC inválido).
- _perdidos_: Muestra el número de paquetes que se han perdido.
- _overruns_: Contiene el número de paquetes que han excedido la capacidad de la cola de entrada.
- _frame_: Identifica los paquetes descartados por tener una longitud errónea (que no es múltiplo de 8).

- _Paquetes TX_: Indica el número de paquetes enviados hasta el momento por el adaptador. Además de los datos _errores_, _perdidos_ y _overruns_ explicados arriba, se incluye un valor para _carrier_, que identifica problemas con la señal, indicando un posible error en el cable o en el conector usado.
- colisiones: Este campo representa las colisiones que sufren los paquetes cuando son transmitidos por la red. Si el valor es mayor que cero, indica que la red está congestionada.
- long.colaTX: Es la longitud de la cola de transmisión del adaptador.
- Bytes RX: Indica la cantidad total de datos recibidos, medidos en Bytes y en MegaBytes.
- Bytes Tx: Igual que el anterior, pero con los datos enviados.

La _dirección MAC_ está formada por 48 bits. Los primeros 24 identifican al fabricante (a nivel mundial) y los 24 restantes al dispositivo de forma única para dicho fabricante.

---
## Obtener la información de un solo adaptador de red

En la mayoría de los casos, cuando estamos configurando características de la red local, estaremos centrados en alguno de los adaptadores de red disponibles. En estos casos puede ser interesante limitar la salida del comando **ifconfig** para que nos muestra únicamente la información de dicho adaptador. Esta operación es tan sencilla como poner el nombre del adaptador a continuación del comando. Por ejemplo:

```bash
ifconfig enp0s3
```

Como ves, la salida es idéntica a la de la imagen anterior, pero informando únicamente del adaptador especificado.

[![el-comando-ifconfig-en-Ubuntu-003](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-003.png)](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-003.png "el-comando-ifconfig-en-Ubuntu-003")

---
## Otras operaciones frecuentes con ifconfig

El comando `ifconfig` no se limita únicamente a ofrecernos información. Con él, también podemos establecer, de forma temporal, valores para la configuración de la red. veamos algunos ejemplos:

1. Para deshabilitar un adaptador de red, escribiremos algo así:
```bash
sudo ifconfig enp0s3 down
```

Como ves, en este caso necesitaremos privilegios administrativos, ya que nuestra actividad puede afectar a todo el sistema.

Después del comando, escribiremos la contraseña de administración.

[![el-comando-ifconfig-en-Ubuntu-004](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-004.png)](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-004.png "el-comando-ifconfig-en-Ubuntu-004")

Si quieres comprobar que, efectivamente, el adaptador de red se ha deshabilitado, basta con volver a ejecutar **ifconfig**:

```bash
ifconfig
```

En la salida no se muestra información sobre el adaptador deshabilitado.

[![el-comando-ifconfig-en-Ubuntu-005](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-005.png)](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-005.png "el-comando-ifconfig-en-Ubuntu-005")

Aunque, si quisiéramos mostrar todos los adaptadores, incluidos los deshabilitados, bastaría con usar la opción **-a**:

```bash
ifconfig -a
```

Ahora vemos los detalles de ambos adaptadores

[![el-comando-ifconfig-en-Ubuntu-011](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-011.png)](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-011.png "el-comando-ifconfig-en-Ubuntu-011")

2. Para volver a habilitar un adaptador de red deshabilitado, basta con escribir algo como esto:

```bash
sudo ifconfig enp0s3 up
```

Como al desactivarlo, volvemos a necesitar privilegios administrativos.

Basta con escribir el comando y pulsar la tecla Intro.

[![el-comando-ifconfig-en-Ubuntu-006](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-006.png)](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-006.png "el-comando-ifconfig-en-Ubuntu-006")

3. Asignar una nueva dirección IP al adaptador de red:

```bash
sudo ifconfig enp0s3 192.168.1.10
```

Como ves, sólo necesitamos incluir la nueva _dirección IP_ a continuación del nombre del adaptador.

De nuevo, escribimos el comando y pulsar la tecla Intro.

[![el-comando-ifconfig-en-Ubuntu-007](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-007.png)](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-007.png "el-comando-ifconfig-en-Ubuntu-007")

4. Si lo que necesitamos es asignar una nueva máscara de red al adaptador, habrá que incluir la palabra **netmask**:

```bash
sudo ifconfig enp0s3 netmask 255.255.255.0
```

Como antes, escribimos el comando y pulsar la tecla Intro.

[![el-comando-ifconfig-en-Ubuntu-008](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-008.png)](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-008.png "el-comando-ifconfig-en-Ubuntu-008")

5. Y si lo que queremos es asignar una nueva dirección de difusión (broadcast) al adaptador de red, usaremos la palabra **broadcast**:

```bash
sudo ifconfig enp0s3 broadcast 192.168.1.255
```

Una vez más, escribimos el comando y pulsar la tecla Intro.

[![el-comando-ifconfig-en-Ubuntu-009](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-009.png)](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-009.png "el-comando-ifconfig-en-Ubuntu-009")

6. Incluso podemos realizar las tres operaciones anteriores en un solo paso:

```bash
sudo ifconfig enp0s3 192.168.1.10 netmask 255.255.255.0 broadcast 192.168.1.255
```

[![el-comando-ifconfig-en-Ubuntu-010](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-010.png)](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-010.png "el-comando-ifconfig-en-Ubuntu-010")

---
## Otros valores

También podemos ajustar algunos parámetros más avanzados, como el valor MTU que, como dijimos al principio, indica el tamaño en octetos de los paquetes más grandes que se transmiten. El valor predeterminado es 1500, pero si quisiéramos cambiarlo por 9000, bastaría con escribir:

```bash
sudo ifconfig enp0s3 mtu 9000
```


[![el-comando-ifconfig-en-Ubuntu-012](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-012.png)](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-012.png "el-comando-ifconfig-en-Ubuntu-012")

Otro ajuste que suele ser útil en algunas circunstancias es poner el adaptador de red en modo promiscuo. De forma predeterminada, si el adaptador de red recibe un paquete, comprueba que es el destinatario correcto. Si no es así, lo deshecha.

Cuando el adaptador de red actúa en modo promiscuo, el adaptador de red acepta cualquier paquete que circule por la red, aunque no sea su destinatario. Esto puede ser muy útil para capturar paquetes de la red y analizar el tráfico.

Pues bien, para poner el adaptador de red en modo promiscuo, sólo tenemos que ejecutar el siguiente comando:

```bash
sudo ifconfig enp0s3 promisc
```

Por defecto, cuando una tarjeta de red recibe un paquete, comprueba si el paquete pertenece a sí mismo. Si no, la tarjeta de interfaz normalmente deja caer el paquete. Pero en modo promiscuo, la tarjeta no suelta el paquete. En cambio, aceptará todos los paquetes que fluyan a través de la tarjeta de red.o

Como en los casos anteriores, para ejecutarlo necesitaremos privilegios administrativos.

[![el-comando-ifconfig-en-Ubuntu-013](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-013.png)](http://somebooks.es/wp-content/uploads/2018/03/el-comando-ifconfig-en-Ubuntu-013.png "el-comando-ifconfig-en-Ubuntu-013")

Cuando necesitemos devolver el adaptador a su configuración normal, bastará con ejecutar lo siguiente:

```bash
sudo ifconfig enp0s3 -promisc
```

---



