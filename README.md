# Задания для курса по TypeScript

## День 1

    - Установить NPM - 
      - Windows: Переходим по ссылке https://www.npmjs.com/get-npm
      - В терминале: sudo apt install nodejs
    - Установить VS Code - https://code.visualstudio.com/download
    - Зарегистрироваться на GitHub - https://github.com/
    - Установить Git - https://git-scm.com/
      - Linux: sudo apt install git
      - Windows: https://git-scm.com/
      - Для все, выполнить в терминале команды
```bash
        git config --global user.name "<Имя на github>"
        git config --global user.email "<Email на gitHub>"
```
    - Fork репозитория с примером - https://github.com/Bobreshovr/TypeScriptCourse, что такое Fork и как это работает можно прочесть здесь - https://help.github.com/articles/fork-a-repo/
    - Клон вашего репозитория локально
      - git clone <адрес репозитория на gitHub>
    - Делаем задачу, которая спрашивает имя, а потом выводит «Hello, <имя>». Для этого в /Day/app.ts подготовлен шаблон
    - Коммит результата
    - Пуш результата
    - Соз
    - ДЗ: Программа решающая квадратные уравнения

### Домашнее задание
Написать программу решения [квадратного уравнения](http://reshit.ru/reshit-kvadratnoe-uravnenie-onlain)
Пользователь последовательно вводит параметры ```a```, ```b```, ```c```
Мы расcчитываем ответ и выводим в консоль

***Внимание***

Когды вы читаете из консоли данные, они имею тип ```string```, чтобы производить арифметические операции с ним, нужно сделать из него ```number``` для этого пишите так

```typescript
var str = Number('1234')
```

### Как считать то, что ввел пользователь в консоль?

Используйте функцию вида

```javascript
const str = await read()
```

### Как запустить написанный код?

В терминале ввести команды

```bash
cd Day1
npm install

npm run execute
```