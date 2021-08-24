# gulp-template
Для начала работы склонируйте репозиторий и установите зависимости, запустив в папке проекта команду `npm i`

### другие команды для работы с проектом:

- `npm run start` - или `gulp start` - для запуска проекта
- `npm run build` - или `gulp build` - для сборки кода проекта в папку build
- `npm run lighthouse` - вместо `gulp build && gulp lighthouse`, сначала собираем проект, а потом уже тестируем
- `npm run test` - запуск разных линтеров, хорошей практикой будет запускать перед комитом
- `npm run eslint-fix` - автоисправление в соответствии с правилами всех скриптов в папке `src/js/`
- `npm run stylelint-fix` - автоисправление в соответствии с правилами всех scss в папке `src/styles/`


## HTML

Все наши проблемы решает [Pug](https://pugjs.org/language/doctype.html). Одного примера будет достаточно, чтобы понять, как его использовать.
<spoiler title="Пример базового функционала">
![](https://habrastorage.org/webt/pa/_j/g7/pa_jg7rtrtanxwpv8tvd0s2ftma.jpeg)
</spoiler>

- `Разделение на модули` - удобно, когда используешь БЭМ: один блок - один файл. [Подробнее.](https://pugjs.org/language/includes.html)
<spoiler title="Пример из документации">
![](https://habrastorage.org/webt/sx/pp/lz/sxpplzqdystfm-q9skym2nvr860.jpeg)
</spoiler>

- `Миксины` - удобно использовать для однотипных блоков. Например, карточки товаров или комментариев. [Подробнее.](https://pugjs.org/language/mixins.html)
<spoiler title="Пример с документации">
![](https://habrastorage.org/webt/jz/hr/fh/jzhrfhh8czcyhetry6o2l9zmale.jpeg)
</spoiler>

- `Циклы` для генерации однотипных блоков. [Подробнее.](https://pugjs.org/language/iteration.html)
<spoiler title="Пример с документации">
![](https://habrastorage.org/webt/bu/uj/bn/buujbnhfu4atbiffqueuhj6dfw8.jpeg)
</spoiler>

За последнее время сильно ничего не изменилось, только название с `Jade` на `Pug`. [Подробнее.](https://github.com/pugjs/pug#rename-from-jade)

## Разделяем HTML
На нашем сайте будут две тестовые страницы `about` и `index`. Структура на страницах повторяется: есть блоки `<footer>`, `<header>`, `<head>`. Поэтому все нужно вынести в отдельные ~~файлы~~ модули.
<spoiler title="Структура проекта">
![](https://habrastorage.org/webt/3q/oc/pq/3qocpq4irq54xl73aj-ntmduues.jpeg)
</spoiler>

Разберем все более подробно.
- `pages` - папка для наших страниц, где в корне хранятся непосредственно страницы
- `common` - хранятся общие блоки для всех страниц
- `includes` - хранятся модули страниц, где внутри еще одна папка, которая соответствует названию страницы

Пройдемся по файлам:
- `layout.pug` - шаблон, который хранит основную структуру, и от него наследуются все другие страницы
<spoiler title="layout.pug">
![](https://habrastorage.org/webt/fz/sc/vm/fzscvmvbtb8unlkflcv3dljnsto.jpeg)
</spoiler>

- `index.pug` и `about.pug` - наши страницы, которые наследуются от шаблона и подключают свои контентные модули
<spoiler title="pages/index.pug и pages/about.pug">
![](https://habrastorage.org/webt/7e/ks/_i/7eks_in5xmluxdnr0skrmosk6x0.jpeg)
</spoiler>

Еще, обратите внимание, у `pug` есть  комментарии, которые **попадают** в `html` и которые **нет**. [Подробнее здесь.](https://pugjs.org/language/comments.html)

# Стили
Для стилей мы будем использовать [Scss](https://sass-lang.com/).

Файлы styles:
<spoiler title="Структура папки styles">
![](https://habrastorage.org/webt/ql/gh/32/qlgh32ysgiw-v-qi3cwaxoadj60.jpeg)
</spoiler>
<spoiler title="global.scss">
![](https://habrastorage.org/webt/vs/mo/z0/vsmoz0dz_gy0gxdjrv0enwcjkj0.png)
</spoiler>
<spoiler title="media.scss">
![](https://habrastorage.org/webt/fm/yu/q8/fmyuq8ggcbkcks5cpc6fhnijupa.png)
</spoiler>

Немного обсудим файл `media.scss`. Есть два варианта организации медиа-запросов.
1. Писать медиа-запросы ко всему блоку в конце файла.
2. Писать медиа-запросы в самом селекторе, используя `@mixin` и `@include`.
<spoiler title="Пример второго варианта">
![](https://habrastorage.org/webt/rw/nd/md/rwndmdltykxzsgjjg--0dho2moq.png)
</spoiler>

Я поклонник второго варианта, удобно, когда все стили в одном месте, и не нужно никуда скроллить и ничего искать.

Последний шаг: подключим [normalize.css](http://necolas.github.io/normalize.css/). Установим командой `npm install normalize.css`
и добавим `@import "../../../node_modules/normalize.css/normalize";`  в начале файла `global.scss`
[Зачем нужен normalize.css?](https://htmlacademy.ru/blog/useful/css/about-normalize-css)

# JavaScript

# Оптимизируем картинки, копируем шрифты, делаем svg-sprite

Шрифты мы просто копируем.

[Kак делать svg спрайты.](http://glivera-team.github.io/svg/2016/06/13/svg-sprites-2.html).

### Lighthouse

> [Lighthouse](https://github.com/GoogleChrome/lighthouse) - решение для веб-приложений и веб-страниц, которое собирает современные показатели производительности.

Кстати, некоторые заказчики смотрят на эти показатели, так как не знают других способов оценить качество верстки.

Вы можете возразить, зачем ради одной странички заморачиваться, но в реальных проектах их может быть больше 10.

Устанавливаем `npm i --save-dev gulp-connect lighthouse chrome-launcher`  и создаём задачу.
Результат для каждой странички будет генерироваться в папку `./reports`. Там будут 'html' файлы, они открываются автоматически, но вы сами в любой момент можете их открыть и посмотреть результат.

На первый взгляд может показаться, что лучше запустить несколько страниц на тестирование, но этого нельзя сделать в одном запущенном процессе хрома, а если запустить несколько процессов паралельно, то результаты могут быть очень неточные.

Кода многовато, но он простой. Запустили наш локальный сервер с помощью `browser-sync`, потом хром и в конце `lighthouse`, где говорим, по какому `url` искать наш сайт.

# Копируем зависимости
В нашей команде есть правило, что все `dependencies` нужно загружать в репозиторий. Это было связано с тем, что иногда может пропасть интернет ~~в стране~~. Вручную скачивать пакеты с сайтов и загружать их в папку не очень удобно, ещё сложно следить за версиями пакетов, и каждый раз из node_modules обновлять также не очень удобно, поэтому мы должны оптимизировать этот процесс.

[gulp-npm-dist](https://www.npmjs.com/package/gulp-npm-dist) - очень хороший плагин, мне он нравится тем, что он не просто копирует всю папку модуля, а только нужные файлы. `README.md`, `LICENSE`, `.gitignore` и другие конфигурационные файлы не копируются.

Теперь сделаем, чтобы при изменении `package.json` вызывался плагин. Не вижу смысла сильно заморачиваться и следить только за изменениями объекта `dependencies`, поэтому будем просто следить за файлом.



# PRE-COMMIT
Не верю я, что вы будете перед комитом запускать `npm run test`, даже не верю, что я буду. Поэтому скачаем [husky](https://www.npmjs.com/package/husky) и добавим:
 ```javascript
"husky": {
    "hooks": {
      "pre-commit": "npm run test"
    }
  }
```
в `package.json`. Если `npm run test` вернет ошибку, то комит не будет сделан.

Сборка сделана на основе [github](https://github.com/dDenysS/gulp-template).
