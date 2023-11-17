# Sensor monitor application

CRUD приложение для ведения учёта датчиков, с возможностью аутентификации и авторизации пользователя, выполнения полнотекстового поиска данных. Состоит из серверной и клиентской частей.

Клиентская часть реализована с использованием следующего стека технологий:
* Angular 17
* NgRx

Клиентская часть, как и серверная, упаковывается в Docker контейнер, поэтому разворачивание приложения выполняется парой команд.

### Запуск клиентской части приложения

1. Клонировать репозиторий `git clone https://github.com/antonfreedom5/sensor-monitor-frontend.git`
2. Выполнить команду `docker build -t sensor-monitor-front sensor-monitor-front/. && docker run -d -p 4200:80 sensor-monitor-front:latest`


---
Серверная часть приложения https://github.com/antonfreedom5/sensor-monitor-backend.git
