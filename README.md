# 1. Цель проекта



Цель проекта - разработать систему для читателей, которые хотят выработать привычку читать больше и отслеживать прогресс чтения (далее Система). Предусмотреть функционал для чтения внутри приложения, возможность добавлять свои книги, писать заметки, рецензии... Возможно добавить уровни и систему достижений, которые будут продвигаться по мере того, как много читатель прочтет книг. Помимо всего этого, должна быть предусмотрена интеграция с Notion. А также Telegram (для напоминаний о том, что сегодня надо почитать).

# 2. Описание системы



Система состоит из следующих функциональных блоков:
1. Регистрация, аутентификация и авторизация
2. Функционал для читателей
3. Функционал интеграции с Telegram
4. Функционал интеграции с Notion

## 2.1. Типы пользователей


Система предусматривает лишь один тип пользователей: читатель. Читатель после регистрации и авторизации, попадает в личный кабинет, который является основным модулем приложения, где доступен весь функционал для читателей.

## 2.2. Регистрация



Регистрация производится стандартно, на отдельной странице регистрации. При регистрации нового пользователя (читателя), должны быть запрошены следующие поля:

* имя --- обязательное поле
* фамилия --- обязательное поле
* email --- обязательное поле
* password --- обязательное поле
* password confirm --- обязательное поле

После отправки формы регистрации читателя, ему на email приходит код подтверждения, а также в этот момент осуществляется переход на страницу аутентификации. Аутентификация будет происходить по разовым кодам, приходящим на email.

Также стоит предусмотреть возможность регистрации с помощью Google.

## 2.3. Аутентификация


Аутентификация пользователя (читателя) осуществляется по email и одноразовому паролю (или по одноразовой ссылке), который приходит на этот email.

Страница аутентификации должна содержать сообщение о том, что код отправлен на почту, а также с формой для ввода этого самого кода и возможностью запросить повторную отправку кода. 

После отправки формы подтверждения кода, должно появиться модальное окно с сообщением об успешной регистрации и кнопкой для перехода в личный кабинет читателя. Также в этот момент сохраняются данные входа в браузере (на время сессии). 

## 2.4. Авторизация


Авторизация также производится стандартно, на отдельной странице. При авторизации пользователя (читателя), должны быть запрошены следующие поля:

* email --- обязательное поле
* password --- обязательное поле

После отправки формы авторизации читателя, ему на email приходит код подтверждения, а также в этот момент осуществляется переход на страницу аутентификации. Далее процесс аутентификации и вход в личный кабинет.

## 2.5. Функционал для читателей


После аутентификации, пользователь (читатель) получает доступ к личному кабинету, в котором сконцентрирован весь функционал Системы. Этот функционал состоит из следующих блоков:

* Функционал доступный в ЛК:
   1. Смена аватарки
   2. Добавление\изменение цели (например: Читать 10 стр\день)
   3. Интерактивный календарь для фиксирования прогресса
   4. Просмотр достижений (если будет внедрено в Систему)

