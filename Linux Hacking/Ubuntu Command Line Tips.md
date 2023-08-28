![[header_terminal.jpg]]
# Ubuntu Command Line Tips 
---
Tags: #info #docs #server #linux #ubuntu #arreglar 
**Fecha creación:** 03.08.2023
**Fecha ultima modificación:** 04.08.2023

> [!info] Volver a [[Home]] | [[Ciberseguridad]]

>[!tip] **Revisar la guía [[Kali Linux post-instalacion]]**

---

Source: https://assets.ubuntu.com/v1/60e44ad3-Ubuntu.Server.CLI.pro.tips.19.04.22.pdf

---
## 1. Networking

>[!tip] **Revisar la guía de [[Conocer la IP del dispositivo]]**

Get the IP address of all interfaces
``` bash
networkctl status
```

Display all IP addresses of the host
``` bash
hostname -I
```

Enable/disable interface
``` bash
ip link set <interface> up
```

``` bash
ip link set <interface> down
```

Show routes
``` bash
ip route
```

Which route  will be used to reach a host
``` bash
ip route get <IP>
```

---
## 2. Security

Show which users are logged in
``` bash
w
```

Get user password expiration date
``` bash
chage -l <user>
```

Set user password expiration date
``` bash
sudo chage <user>
```

Lock a user account
``` bash
sudo passwd -l <user>
```

Unlock a user password
``` bash
sudo passwd -u <user>
```

Automatically detect and ban abusive IP addresses
``` bash
sudo apt install fail2ban
```

Show banned IP addresses
``` bash
sudo fail2ban-client status
```

``` bash
sudo fail2ban-client status <jail>
```

Which route will be used to reach a host
``` bash
ip route get <IP>
```

List open ports and associated processes
``` bash
sudo ss -tulpn
```

Manage firewall rules
``` bash
Enable firewall: sudo ufw enable
List rules: sudo ufw status
Allow port: sudo ufw allow <port>
Deny port: sudo ufw deny <port>
```

Connect remotely through SSH
``` bash
ssh <user>@<host IP>
```

>[!tip] **Revisar la guía de [[Conectarse con ssh]]**

---
## 3. Ubuntu Advantage

Enable Ubuntu Advantage. 
Visit ubuntu.com/advantage to get a free token for up to 3 machines (or 50 if
you are an official Ubuntu Community member).
``` bash
sudo ua attach <token>
```

Check Ubuntu Advantage Service availability and entitlement
``` bash
sudo ua status
```

Enable or disable a service
``` bash
sudo ua enable <service>
```

``` bash
sudo ua disable <service>
```

Fix a CVE/USN
``` bash
sudo ua fix <cve/usn>
```

See packages update availability status of the system
``` bash
sudo ubuntu-security-status
```

See CVEs that Livepatch has patched
``` bash
canonical-livepatch status --verbose
```

---
## 4. Packages

Search for packages
``` bash
apt search <string>
```

``` bash
snap find <string>
```

List available package versions
``` bash
apt-cache policy <package>
```

List available updates
``` bash
apt list --upgradable
```

Apply all available updates
``` bash
sudo apt update && sudo apt upgrade
```

Install from the Ubuntu Archive:
``` bash
sudo apt install <package>
```

Install from the Snap Store:
``` bash
sudo snap install <package>
```

Remove the package
``` bash
sudo apt remove <package>
```

Remove the package
``` bash
sudo apt remove <package>
```

Remove the package and all its configuration files
``` bash
sudo apt purge <package>
```

Reinstall broken package
``` bash
sudo apt install -f --reinstall <package>
```

Which files does this package provide?
``` bash
dpkg-query -L <package>
```

Which package provides this file?
``` bash
dpkg-query -S <path>
```

---
## 5. Files

List files with permissions and dates
``` bash
ll
```

Common file operations
``` bash
create empty: touch <filename>
create with size: fallocate -l <size> <filename>
create with content: echo "<content>" > <filename>
```

Quick file search
``` bash
locate <filename>
```

Search string in file
```bash
grep <string> <filename>
```

Search string recursively in directory
```bash
grep -Iris <string> <directory>
```

Find files modified in the last `<n>` minutes
```bash
find <directory> -mmin -<n> -type f
find . -mmin -5 -type f
```

Show only the nth column
``` bash
col<n> “<separator>” <filename>
col2 “,” foo.csv
```

Display file paginated
``` bash
less <filename>
```

Display first `<n>` lines
``` bash
head -n <n> <filename>
```

Display last `<n>` lines
``` bash
tail -n <n> <filename>
```

Follow file content as it increases
``` bash
tail -f <filename>
```

Pack a directory into an archive
``` bash
tar.gz: tar cvzf <target>.tar.gz <source dir>
zip: zip -r <target> <source dir>
```

Unpack an archive
``` bash
tar.gz: tar xf <tar.gz file>
zip: unzip <zip file>
```

Copy file to remote server
``` bash
rsync <filename> <user@server>:<destination>
rsync config.yaml
admin@192.0.0.0:/config  
```

Copy directory recursively from remote server
``` bash
rsync -avruz <user@
server>:<source> <destination>
rsync -avruz admin@192.0.0.0:/config /tmp
```

---
## 6. System

Display kernel version 
``` bash
uname -r
```

Get root disk usage 
``` bash
df -h
```

Get memory usage 
``` bash
cat /proc/meminfo
```

Get system time 
``` bash
timedatectl status
```

Set system timezone
``` bash
timedatectl list-timezones
sudo timedatectl set-timezone <zone>
```

Get all running/failing services
``` bash
systemctl --state running
systemctl --state failed
```

Start, stop or restart a service
``` bash
systemctl start/stop/restart <service>
```

Get the full content of a systemd unit including overrides
``` bash
systemctl cat <service>
```

Edit a systemd avoiding conflicts with package updates
``` bash
systemctl edit <service>
```

Monitor new logs for a service
``` bash
journalctl -u <service> --since now -f
```

Monitor all logs since boot 
``` bash
journalctl --boot 0
```

Get the list of recent logins 
``` bash
last
```

Display running processes 
``` bash
htop
```

Kill process by id 
``` bash
kill <process id>
```

Kill process by name 
``` bash
pkill <process name>
```

Run command in the background
``` bash
<command> &
```

staying alive after hangup and logging to file
``` bash
nohup <command> >> /var/log/yourcommand.log 2>&1 &
```

Display background commands 
``` bash
jobs
```

Bring command `<n>` to the foreground 
``` bash
fg <n>
```

---
## 7. Ubuntu VMs on workstation

Install Multipass and launch an Ubuntu VM

_Omitting `<image>` will launch a VM with the latest Ubuntu LTS_
``` bash
sudo snap install multipass
```

``` bash
multipass launch <image> --name <VM name>
```

Find available images
``` bash
multipass find
```

List existing VMs
``` bash
multipass list
```

Get a shell inside a VM
``` bash
multipass shell <VM name>
```

More Multipass help at
``` bash
discourse.ubuntu.com
```

---
## 8. Micro clouds

Launch a LXD container
``` bash
lxd init
lxc launch ubuntu:18.04 <container name>
```

_Or another distro_
``` bash
lxc launch images:centos/8/amd64 <container name>
```

Get a shell inside a LXD container
``` bash
lxc exec <name> bash
```

Push a file to a LXD container
``` bash
lxc file push <filename> <container name>/<path>
```

Pull a file from a LXD container
``` bash
lxc file pull <destination> <container name>/<file path>
```

Launch a LXD VM
``` bash
lxc launch images:ubuntu/20.04 <vm name> --vm
```

Get a shell inside a LXD VM
``` bash
lxc exec <name> bash
```

More LXD help at: [linuxcontainers.org/lxd](https://linuxcontainers.org/lxd)

---
## 9. Bare metal provisioning

Start a VM with a MAAS demo
``` bash
wget -qO- https://raw.githubusercontent.com/
```

``` bash
canonical/maas-multipass/main/maas.yml \ | multipass launch --name maas -c4 -m8GB -d32GB --cloud-init -
```

Find the IP address of the MAAS demo server
``` bash
multipass list | grep maas | awk ‘{print $3}’
```

Access MAAS dashboard using IP from multipass list
[http://10.x.x.x:5240/](http://10.x.x.x:5240/)
``` bash
Default username and password is admin:admin
```

_More MAAS help at [maas.io](https://maas.io)_

---
## 10. Kubernetes

Install MicroK8s and list available add-ons
``` bash
sudo snap install microk8s --classic
microk8s.status --wait-ready
```

Enable auxiliary Kubernetes services with MicroK8s add-ons
``` bash
microk8s enable <add-ons>
```

View MicroK8s nodes and running services
``` bash
microk8s.kubectl get nodes
microk8s.kubectl get services
```

_More MicroK8s help at [microk8s.io/docs](https://microk8s.io/docs)_

---
## 11. OpenStack

Install MicroStack and launch test instance
``` bash
sudo snap install microstack --devmode --beta
sudo microstack.init --auto --control microstack.launch cirros -n test
```

Get admin password
``` bash
sudo snap get microstack config.credentials.keystone-password
```

Access Horizon dashboard

    https://10.20.20.1

_More MicroStack help at [microstack.run/docs](https://microstack.run/docs)_

