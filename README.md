# Учет работников медучреждения

Это веб-приложение для учета работников медучреждения, разработанное с использованием React и TypeScript. Приложение позволяет управлять списками врачей и медсестер, а также отображать информацию о них.

## Содержание

- [Технологии](#технологии)
- [Установка](#установка)
- [Запуск приложения](#запуск-приложения)
- [Сборка приложения](#сборка-приложения)
- [Использование](#использование)
- [Лицензия](#лицензия)

## Технологии

- **React** - библиотека для создания пользовательских интерфейсов.
- **TypeScript** - язык программирования, расширяющий JavaScript.
- **CSS** - для стилизации интерфейса (например, с использованием Bootstrap или другого CSS-фреймворка).

## Установка

1. **Клонируйте репозиторий:**

   Откройте терминал и выполните следующую команду, чтобы клонировать репозиторий на ваш компьютер:

   ```bash
   git clone https://github.com/gsdsdfa/Test.git

2. После клонирования репозитория перейдите в папку с проектом:

   ```bash
   cd Test

3. Установите зависимости:
 Откройте терминал с правами администратора

   ```bash
   @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object                
   System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

   ```bash
   choco install nodejs

   Для проверки версий:
   ```bash
   node -v

   ```bash
   nmp -v
 
   

4. Убедитесь, что у вас установились Node.js и npm. Затем выполните следующую команду для запуска приложения:

   Запуск приложения
   Чтобы запустить приложение в режиме разработки, выполните следующую команду:

   ```bash
   npm start

   После этого приложение будет доступно по адресу http://localhost:3000. Откройте этот адрес в вашем веб-браузере, чтобы увидеть приложение.

 5. Сборка приложения
   Чтобы собрать приложение для продакшена, выполните следующую команду:

   ```bash
   npm run build
   Собранные файлы будут находиться в папке build. Эти файлы можно развернуть на любом веб-сервере.

   Использование:
   Врачи: Перейдите на страницу "Врачи", чтобы увидеть список врачей, их ФИО и отделение.
   Медсестры: Перейдите на страницу "Медсестры", чтобы увидеть список медсестер и их отделение.
   Добавление/Редактирование/Удаление: Вы можете добавлять, редактировать и удалять записи работников.
