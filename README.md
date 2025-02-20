# Учет работников медучреждения

Это веб-приложение для учета работников медучреждения, разработанное с использованием React и TypeScript. Приложение позволяет управлять списками врачей и медсестер, а также отображать информацию о них.

## Содержание

- [Технологии](#технологии)
- [Установка](#установка)
- [Запуск приложения](#запуск-приложения)
- [Сборка приложения](#сборка-приложения)
- [Использование](#использование)

## Технологии

- **React** - библиотека для создания пользовательских интерфейсов.
- **TypeScript** - язык программирования, расширяющий JavaScript.
- **CSS** - для стилизации интерфейса (например, с использованием Bootstrap или другого CSS-фреймворка).

## Установка

1. **Клонируйте репозиторий:**

   Откройте терминал и выполните следующую команду, чтобы клонировать репозиторий на ваш компьютер:

   ```bash
   git clone https://github.com/gsdsdfa/Test.git

2. **Перейдите в папку с проектом:**

   ```bash
   cd Test

3. **Установите Chocolatey (если он еще не установлен):**

   Откройте терминал с правами администратора и выполните следующую команду:

   ```bash
   @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

4. **Установите Node.js:**

   После установки Chocolatey выполните следующую команду в PowerShell:

   ```bash
   choco install nodejs

5. **Проверьте версии Node.js и npm:**

   ```bash
   node -v
   ```

   ```bash
   npm -v

6. **Запустите приложение:**

   Убедитесь, что у вас установлены Node.js и npm. Затем выполните следующую команду для запуска приложения:

   ```bash
   npm start
   ```

   После этого приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000). Откройте этот адрес в вашем веб-браузере, чтобы увидеть приложение.

7. **Сборка приложения:**

   Чтобы собрать приложение для продакшена, выполните следующую команду:

   ```bash
   npm run build
   ```

   Собранные файлы будут находиться в папке `build`. Эти файлы можно развернуть на любом веб-сервере.

## Использование

- **Врачи**: Перейдите на страницу "Врачи", чтобы увидеть список врачей, их ФИО и отделение.
- **Медсестры**: Перейдите на страницу "Медсестры", чтобы увидеть список медсестер и их отделение.
- **Добавление/Редактирование/Удаление**: Вы можете добавлять, редактировать и удалять записи работников.
