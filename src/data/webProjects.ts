import type { Game } from './types';
const papersDetails = [
  {
    "title": "Об игре",
    "text": "Три дня по другую сторону стекла визового центра. Каждый визит приносит новые требования, справки и поводы вернуться завтра. Задача — пройти бюрократический квест и получить визу."
  },
  {
    "title": "Основные механики",
    "text": "Поиск нужных страниц и подача документов, выбор фотографии и проверка её размеров, подпись и заполнение форм. Ограниченное время, разговоры с сотрудницей и отвлекающими игрока посетителями очереди NPC. Прогресс сохраняется между визитами."
  },
  {
    "title": "Инструменты и обработка",
    "text": "TypeScript, Phaser 3 и Vite. Сценарии дней, документы и диалоги вынесены в данные. Эмблема паспорта, образ сотрудницы и других NPC прошли несколько визуальных итераций: поиск/генерация исходника · обработка и настройка в пиксельном редакторе · уточнение размеров, цветов и деталей."
  },
  {
    "title": "Графика, музыка и звук",
    "text": "Документы, персонажи и интерфейс собираются из отдельных графических ассетов. Фоновая дорожка и шум очереди дополняются репликами персонажей; звуковой менеджер управляет громкостью и воспроизведением во время диалогов. Поиск ассетов, их обрезка и редактирование были сделаны вручную."
  }
];
const sectorDetails = [
  {
    "title": "Об игре",
    "text": "Ретро-шутер в оболочке Game Boy Advance. Игрок управляет модулем защиты внутри заражённого сервера, уничтожает вирусные угрозы и ищет выход. Название отсылает к ошибке HTTP 503 - Service Unavailable. В игре представлены 3 основных врага-вируса: Троян, Червь и Шифровальщик."
  },
  {
    "title": "Основные механики",
    "text": "Лабиринт от первого лица, миникарта, стрельба и три типа противников: Worm, Trojan и Cypher. Аптечки восстанавливают защиту, разрушаемые стены скрывают секретные комнаты. Улучшенный лазер вызывает босса Madman. Для победы нужно устранить угрозы и добраться до выхода."
  },
  {
    "title": "Инструменты и обработка",
    "text": "React, TypeScript, Canvas 2D и Webpack. Псевдообъёмная сцена строится raycasting-отрисовкой. Управление работает с клавиатуры и экранных кнопок консоли. Наброски врагов преобразованы в игровые спрайты с использованием ChatGPT - сравнения собраны в галерее."
  },
  {
    "title": "Графика, музыка и звук",
    "text": "Оформление ретро-консоли, текстуры окружения и спрайты врагов создают образ заражённого вирусами цифрового мира. Web Audio API отвечает за звуковые эффекты, а аудиосистема поддерживает музыкальную дорожку и синтезированный звук."
  }
];
export const games: Game[] = [
  { id: 'accept-papers', title: 'Accept Papers, Please', description: 'Браузерная игра, вдохновленная Papers, please.\nПочувствуй себя по эту сторону стекла! Выдержи все круги визового ада и получи разрешение на отъезд.', tags: ['Browser game', 'Жанр: симулятор бюрократии'], images: [
  {
    "id": "papers",
    "src": "assets/games/accept-papers/papers.gif",
    "alt": "Геймплей"
  },
  {
    "id": "papers1",
    "src": "assets/games/accept-papers/papers1.png",
    "alt": "Скриншот 1"
  },
  {
    "id": "papers2",
    "src": "assets/games/accept-papers/papers2.png",
    "alt": "Скриншот 2"
  },
  {
    "id": "papers3",
    "src": "assets/games/accept-papers/papers3.png",
    "alt": "Скриншот 3"
  }
], process: {
  "title": "От идеи к пиксель-арту",
  "images": [
    {
      "id": "papers_logo",
      "src": "assets/games/accept-papers/papers_logo.png",
      "alt": "Этапы создания эмблемы для паспорта"
    },
    {
      "id": "papers_clerk",
      "width": 875, "height": 1088,
      "background": false,
      "src": "assets/games/accept-papers/papers_clerk.png",
      "alt": "Этапы создания образа сотрудницы визового центра"
    }
  ]
}, details: papersDetails, playUrl: 'https://a0fail.github.io/accept-papers-please/' },
  { id: 'sector-503', title: 'Sector 503', description: 'Браузерная игра, вдохновленная старыми приставками и играми, типа Doom и Wolfenstein 3D.\nОсвободи сервер от оков вирусной деспотии. Уничтожь киберугрозы во имя материнской платы, оперативки и святой видюхи!', tags: ['Browser game', 'Жанр: симулятор ретро-приставки'], images: [
  {
    "id": "sector",
    "src": "assets/games/sector-503/sector.webp",
    "alt": "Геймплей"
  },
  {
    "id": "sector1",
    "src": "assets/games/sector-503/sector1.png",
    "alt": "Скриншот 1"
  },
  {
    "id": "sector2",
    "src": "assets/games/sector-503/sector2.png",
    "alt": "Скриншот 2"
  },
  {
    "id": "sector3",
    "src": "assets/games/sector-503/sector3.png",
    "alt": "Скриншот 3"
  }
], process: {
  "title": "От наброска к игровому спрайту",
  "images": [
    {
      "id": "sector_trojan",
      "src": "assets/games/sector-503/sector_trojan.webp",
      "alt": "Trojan — от наброска к спрайту"
    },
    {
      "id": "sector_cyper",
      "src": "assets/games/sector-503/sector_cyper.png",
      "alt": "Cypher — от наброска к спрайту"
    },
    {
      "id": "sector_worm",
      "src": "assets/games/sector-503/sector_worm.webp",
      "alt": "Worm — от наброска к спрайту"
    }
  ]
}, details: sectorDetails, playUrl: 'https://a0fail.github.io/sector-503/' },
];
export const profkom = {
  "title": "Редизайн ВК-группы Профкома ВМК МГУ",
  "description": "Обновление оформления сообщества: от страницы ВКонтакте и логотипа до принта на свитшот.",
  "comparisons": [
    {
      "id": "community",
      "title": "Сообщество до и после редизайна",
      "hideTitle": true,
      "aspect": "1832 / 1518",
      "before": {
        "id": "before",
        "src": "assets/web-design/profkom-redesign/before.png",
        "alt": "Страница сообщества до редизайна",
        "caption": "Страница сообщества до редизайна"
      },
      "after": {
        "id": "after",
        "src": "assets/web-design/profkom-redesign/after.webp",
        "alt": "Страница сообщества после редизайна",
        "caption": "Страница сообщества после редизайна"
      }
    },
    {
      "id": "logo",
      "title": "Логотип до и после",
      "aspect": "1 / 1",
      "before": {
        "id": "logo_old",
        "src": "assets/web-design/profkom-redesign/logo_old.png",
        "alt": "Старый логотип Профкома ВМК",
        "caption": "Старый логотип Профкома ВМК"
      },
      "after": {
        "id": "logo_new",
        "src": "assets/web-design/profkom-redesign/logo_new.webp",
        "alt": "Новый логотип Профкома ВМК",
        "caption": "Новый логотип Профкома ВМК"
      }
    }
  ],
  "images": [
    {
      "id": "logo_tshirt_new",
      "width": 1504, "height": 1210,
      "background": false,
      "src": "assets/web-design/profkom-redesign/logo_tshirt_new.png",
      "alt": "Новый логотип для внутреннего мерча профкома",
      "caption": "Новый логотип для внутреннего мерча профкома"
    }
  ]
};
export const initiation = {
  "title": "Оформление ВК-группы Посвящения в студенты ВМК МГУ",
  "description": "Шапка и аватарка сообщества в едином визуальном стиле.",
  "images": [
    {
      "id": "head",
      "src": "assets/web-design/initiation/head.webp",
      "alt": "Шапка сообщества Посвящения",
      "caption": "Шапка сообщества Посвящения"
    },
    {
      "id": "ava",
      "src": "assets/web-design/initiation/ava.png",
      "alt": "Аватарка сообщества Посвящения",
      "caption": "Аватарка сообщества Посвящения"
    }
  ]
};
