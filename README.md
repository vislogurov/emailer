# Почтольер ака Emailer

<img align="right" width="95" height="95"
     src="https://pp.userapi.com/swfdZOFrAyZIfSRxSCXkgxtaMGpfdyFxyGvvCg/ONq07n9SUDI.jpg">


Почтольер – это сервис для создания рассылки писем.

Под капотом:
* Фронтенд на [CRA](https://github.com/facebook/create-react-app) + [Redux](https://redux.js.org/) + [ReduxForm](https://redux-form.com/). В качестве средства стилизации использован [materializecss](https://materializecss.com/)
* Бэкенд на Node + [mongoose](https://mongoosejs.com/) + [MongoDB](https://www.mongodb.com/)
* Авторизация через  Google Account с использованием [PassportJS](http://www.passportjs.org/packages/passport-google-oauth20/)
* [Stripe](https://stripe.com/) – для эмуляции работы платёжных систем
* [Sendgrid](https://sendgrid.com/) – сервис для сбора аналитики почтовых рассылок

## Пролог

Приложение может работать, как в продовом, так и в локальных окружениях. По этой причине и из соображений безопасности (чтобы в репозиторий не попали персональные данные в т.ч пароли от БД), созданы определённые требования к стуктуре приложения:
- в `/config` нужно создать файл `key.js`  со следующими ключами:

| Ключ                 | Значение ключа                                                                                               |
|----------------------|--------------------------------------------------------------------------------------------------------------|
| googleClientID       | Учётные данные для использования Google API. Создаются [тут](https://console.developers.google.com/)         |
| googleClientSecret   | Учётные данные для использования Google API. Создаются [тут](https://console.developers.google.com/)         |
| mongoURI             | Путь к базе данных, типа `mongodb+srv://<userName>:<password>@emailer-u24fp.mongodb.net/test?retryWrites=true` |
| cookieKey            | Уникальный набор символов для создания куки в [cookie-session](https://github.com/expressjs/cookie-session#keys)              |
| stripePublishableKey | [Учётные данные](https://stripe.com/docs/keys) для использования Stripe                                         |
| stripeSecretKey      | [Учётные данные](https://stripe.com/docs/keys) для использования Stripe                                         |
| sendGridKey          | [Учётные данные](https://app.sendgrid.com/settings/api_keys) для испльзования SendGrid                           |
| redirectDomain       | Адрес страницы, на которую редиректит пользователя, кликнувшего по ссылке в письме http://localhost:3000 или адрес продового сервака, например на Heroku                         |

Для работы в продовом окружении таким же образом, но через *__переменные окружения__*, добавляются ключи в `/config/prod.js`, например :

| Ключ                 | Значение ключа                                                                                               |
|----------------------|--------------------------------------------------------------------------------------------------------------|
| googleClientID       | process.env.GOOGLE_CLIENT_ID         |

__ВАЖНО__: `key.js` не коммитить! Он нужен только для локальной разработки и будет содержать ваши персональные данные.

## Основная часть

Для проверки работы на проде приложение развёрнуто на [Heroku](https://sleepy-fjord-55767.herokuapp.com)

### Стартовый экран – логинимся

![alt text](./images/step1.gif)

### Пополняем баланс

Одна рассылка – один доллар. Система не даст создать рассылку при нулевом балансе. Нужно пополнить счёт:

![alt text](./images/step2.gif)

### Создаём рассылку

Если пользователь новый, то будет список будет пустой.

Для создания новой рассылки кликаем на красную кнопку, заполняем поля:

![alt text](./images/step3.gif)

Действия по кнопкам:

- ![alt text](./images/cancel.png) - возвращаемся к список рассылок
