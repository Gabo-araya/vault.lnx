# Codeigniter con Nginx en Ubuntu 18.04 LTS

***
Tags:  #codigo #linux #server #rpi #LEMP #arreglar 
***


---

𝐇𝐨𝐰 𝐓𝐨 𝐢𝐧𝐬𝐭𝐚𝐥𝐥 𝐂𝐨𝐝𝐞𝐈𝐠𝐧𝐢𝐭𝐞𝐫 𝐰𝐢𝐭𝐡 Nginx 𝐎𝐧 𝐔𝐛𝐮𝐧𝐭𝐮 𝟏𝟖.𝟎𝟒 𝐋𝐓𝐒
Video Tutorial -https://youtu.be/QBkLJB3Mvy0


---
𝐂𝐨𝐝𝐞𝐈𝐠𝐧𝐢𝐭𝐞𝐫 𝐢𝐬 𝐚 𝐟𝐫𝐞𝐞, 𝐨𝐩𝐞𝐧 𝐬𝐨𝐮𝐫𝐜𝐞 𝐚𝐧𝐝 𝐩𝐨𝐰𝐞𝐫𝐟𝐮𝐥 𝐏𝐇𝐏 𝐟𝐫𝐚𝐦𝐞𝐰𝐨𝐫𝐤 𝐰𝐢𝐭𝐡 𝐚 𝐯𝐞𝐫𝐲 𝐬𝐦𝐚𝐥𝐥 𝐟𝐨𝐨𝐭𝐩𝐫𝐢𝐧𝐭, 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐑𝐢𝐜𝐤 𝐄𝐥𝐥𝐢𝐬 𝐢𝐧 𝟐𝟎𝟎𝟔. 𝐈𝐭 𝐢𝐬 𝐬𝐩𝐞𝐜𝐢𝐚𝐥𝐥𝐲 𝐛𝐮𝐢𝐥𝐭 𝐟𝐨𝐫 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 𝐰𝐡𝐨 𝐧𝐞𝐞𝐝 𝐚 𝐬𝐢𝐦𝐩𝐥𝐞 𝐚𝐧𝐝 𝐞𝐥𝐞𝐠𝐚𝐧𝐭 𝐭𝐨𝐨𝐥𝐤𝐢𝐭 𝐭𝐨 𝐜𝐫𝐞𝐚𝐭𝐞 𝐟𝐮𝐥𝐥-𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐝 𝐰𝐞𝐛 𝐚𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬. 𝐈𝐭 𝐜𝐨𝐦𝐞𝐬 𝐰𝐢𝐭𝐡 𝐥𝐨𝐭'𝐬 𝐨𝐟 𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬 𝐢𝐧𝐜𝐥𝐮𝐝𝐢𝐧𝐠, 𝐋𝐢𝐠𝐡𝐭 𝐖𝐞𝐢𝐠𝐡𝐭, 𝐀𝐜𝐭𝐢𝐯𝐞 𝐑𝐞𝐜𝐨𝐫𝐝 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞 𝐒𝐮𝐩𝐩𝐨𝐫𝐭, 𝐈𝐦𝐚𝐠𝐞 𝐌𝐚𝐧𝐢𝐩𝐮𝐥𝐚𝐭𝐢𝐨𝐧 𝐋𝐢𝐛𝐫𝐚𝐫𝐲, 𝐇𝐞𝐥𝐩 𝐬𝐮𝐩𝐩𝐨𝐫𝐭𝐬, 𝐔𝐑𝐈 𝐑𝐨𝐮𝐭𝐢𝐧𝐠, 𝐌𝐨𝐝𝐞𝐥-𝐕𝐢𝐞𝐰-𝐂𝐨𝐧𝐭𝐫𝐨𝐥𝐥𝐞𝐫 𝐁𝐚𝐬𝐞𝐝 𝐒𝐲𝐬𝐭𝐞𝐦 𝐚𝐧𝐝 𝐦𝐮𝐜𝐡 𝐦𝐨𝐫𝐞.
𝐎𝐟𝐟𝐜𝐢𝐚𝐥 𝐖𝐞𝐛𝐬𝐢𝐭𝐞:𝐡𝐭𝐭𝐩𝐬://𝐜𝐨𝐝𝐞𝐢𝐠𝐧𝐢𝐭𝐞𝐫.𝐜𝐨𝐦/
---

O𝐮𝐫 𝐒𝐞𝐫𝐯𝐞𝐫 𝐒𝐩𝐞𝐜𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧- 𝐎𝐬:𝐔𝐛𝐮𝐧𝐭𝐮 𝟏𝟖.𝟎𝟒 𝐋𝐓𝐒 𝐁𝐢𝐨𝐧𝐢𝐜 𝐁𝐞𝐚𝐯𝐞𝐫 𝟔𝟒𝐁𝐢𝐭 | 𝐇𝐨𝐬𝐭𝐧𝐚𝐦𝐞 :𝐰𝐰𝐰.𝐲𝐨𝐮𝐫𝐝𝐨𝐦𝐚𝐢𝐧.𝐜𝐨𝐦   |𝐈𝐏 𝐚𝐝𝐝𝐫𝐞𝐬𝐬- 𝟏𝟗𝟐.𝟏𝟔𝟖.𝟏.𝟓𝟎   
---

```
lsb_release -cd ; hostname ; hostname -I ; whoami ; getconf LONG_BIT ; apt install -y build-essential software-properties-common net-tools git make wget curl lsb-release
```

MariaDB Repositories:
```
apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xF1656F24C74CD1D8 ; add-apt-repository 'deb [arch=amd64,arm64,ppc64el] http://mirror.biznetgio.com/mariadb/repo/10.4/ubuntu bionic main' ; add-apt-repository ppa:ondrej/php -y
```

```
apt-get update ; apt install -y nginx mariadb-server mariadb-client php7.2 php7.2-cli php7.2-fpm php7.2-cgi php7.2-bcmath php7.2-curl php7.2-gd php7.2-intl php7.2-json php7.2-mbstring php7.2-mysql php7.2-opcache php7.2-sqlite3 php7.2-xml php7.2-zip php7.2-snmp php7.2-imap php7.2-common php7.2-tidy php7.2-pgsql php7.2-ldap php7.2-soap php7.2-xsl php7.2-recode php7.2-redis php7.2-xmlrpc php7.2-zip php-imagick php-pear php-memcache php-apcu
```

```
systemctl start nginx mariadb ; systemctl enable nginx mariadb ; mysql_secure_installation
```

```
Create Mariadb Database :
mysql -u root -p
create database db;
grant all on db.* to 'dbuser'@'localhost' identified by 'dbpass';
flush privileges;
quit
```

```
sed -i "s/;date.timezone.*/date.timezone = Asia\/\Kolkata/" /etc/php/7.2/fpm/php.ini ; sed -i 's/;cgi.fix_pathinfo=1/cgi.fix_pathinfo=0/g' /etc/php/7.2/fpm/php.ini ; leafpad  /etc/php/7.2/fpm/pool.d/www.conf &>/dev/null 
[ env[HOSTNAME] = $HOSTNAME ]
```

```
wget https://github.com/bcit-ci/CodeIgniter/archive/3.1.5.zip
unzip 3.1.5.zip
cp -r CodeIgniter-3.1.5/  /var/www/html/codeigniter
leafpad /var/www/html/codeigniter/application/config/database.php &>/dev/null
$db['default'] = array(
leafpad /var/www/html/codeigniter/application/config/config.php &>/dev/null
$config['base_url'] = 'http://www.yourdomain.com/';
chown -R www-data:www-data /var/www/html/ ; chmod -R 755 /var/www/html/
```

Setting up Nginx Server Blocks (Virtual Hosts):-
```
leafpad /etc/nginx/sites-available/default &>/dev/null
```

```
server {
         listen 80;
         listen [::]:80 ipv6only=on;

         # Log files for Debugging
         access_log /var/log/nginx/yourdomain-access.log;
         error_log /var/log/nginx/yourdomain-error.log;

         # Webroot Directory
         root /var/www/html/codeigniter/;
         index index.php index.html index.htm;

         # Your Domain Name
         server_name www.yourdomain.com;

         location / {
                 try_files $uri $uri/ /index.php?$query_string;
         }

         # PHP-FPM Configuration Nginx
         location ~ \.php$ {
                 try_files $uri =404;
                 fastcgi_split_path_info ^(.+\.php)(/.+)$;
                 fastcgi_pass unix:/run/php/php7.2-fpm.sock;
                 fastcgi_index index.php;
                 fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                 include fastcgi_params;
         }
 }
```

```
nginx -t  ; echo "192.168.1.50 www.yourdomain.com" >> /etc/hosts ; systemctl restart nginx
http://www.yourdomain.com
```

---
