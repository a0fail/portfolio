import { papersProcess, sectorProcess, profkomProcess } from './projectProcesses';
import type { Game } from './types';
const papersDetails = [
  {
    "title": "Об игре",
    "text": "Каждый игровой день приносит новые требования и\u00A0поводы вернуться завтра. Твоя задача - пройти визовый квест, несмотря на\u00A0бюрократические препятствия."
  },
  {
    "title": "Механики",
    "text": "Поиск и\u00A0заполнение документов, подача их в\u00A0окно, проверка фотографий, ограниченное время и\u00A0диалоги с\u00A0сотрудницей и\u00A0посетителями очереди. Прогресс сохраняется между визитами."
  }
];
const sectorDetails = [
  {
    "title": "Об игре",
    "text": "Шутер от\u00A0первого лица внутри заражённого сервера. Название отсылает к\u00A0HTTP 503 - Service Unavailable."
  },
  {
    "title": "Механики",
    "text": "Лабиринт с\u00A0миникартой, стрельба и\u00A0три типа вирусов: Worm, Trojan и\u00A0Cypher. Разрушаемые стены скрывают секретные комнаты, аптечки восстанавливают защиту. Улучшения и\u00A0финальный босс - на\u00A0пути к\u00A0выходу из\u00A0заражённого сервера."
  }
];
export const games: Game[] = [
  { id: 'accept-papers', workflow: papersProcess, detailsTitle: 'Об игре и\u00A0механиках', title: 'Accept Papers, Please', description: 'Симулятор бюрократического ада по\u00A0мотивам Papers, Please.\nТри дня по\u00A0эту сторону стекла визового центра. Переживи бесконечные требования, справки и\u00A0очереди - и\u00A0попробуй получить визу!', tags: ['Browser game', 'Жанр: симулятор бюрократии'], images: [
  {
    "id": "papers",
    "src": "assets/games/accept-papers/papers.gif",
    "alt": "Геймплей Accept Papers, Please"
  },
  {
    "id": "papers1",
    "src": "assets/games/accept-papers/papers1.png",
    "alt": "Начальный экран дня - Accept Papers, Please"
  },
  {
    "id": "papers2",
    "src": "assets/games/accept-papers/papers2.png",
    "alt": "Основная игровая область - Accept Papers, Please"
  },
  {
    "id": "papers3",
    "src": "assets/games/accept-papers/papers3.png",
    "alt": "Чтение документов - Accept Papers, Please"
  }
], process: {
  "title": "От\u00A0идеи к\u00A0пиксель-арту",
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
  { id: 'sector-503', workflow: sectorProcess, detailsTitle: 'Об игре и\u00A0механиках', title: 'Sector 503', description: 'Ретро-шутер в\u00A0оболочке Game Boy Advance, вдохновлённый Doom и\u00A0Wolfenstein\u00A03D.\nОсвободи сервер от\u00A0вирусной деспотии - во\u00A0имя материнской платы, оперативки и\u00A0святой видюхи!', tags: ['Browser game', 'Жанр: Ретро-шутер'], images: [
  {
    "id": "sector",
    "src": "assets/games/sector-503/sector.webp",
    "alt": "Геймплей - Sector 503"
  },
  {
    "id": "sector1",
    "src": "assets/games/sector-503/sector1.png",
    "alt": "Worm во\u00A0время стельбы - Sector 503"
  },
  {
    "id": "sector2",
    "src": "assets/games/sector-503/sector2.png",
    "alt": "Выстрел - Sector 503"
  },
  {
    "id": "sector3",
    "src": "assets/games/sector-503/sector3.png",
    "alt": "Cyper в\u00A0неактивной фазе - Sector 503"
  }
], process: {
  "title": "От\u00A0наброска к\u00A0игровому спрайту",
  "images": [
    {
      "id": "sector_trojan",
      "src": "assets/games/sector-503/sector_trojan.webp",
      "alt": "Trojan - от\u00A0наброска к\u00A0спрайту"
    },
    {
      "id": "sector_cyper",
      "src": "assets/games/sector-503/sector_cyper.png",
      "alt": "Cypher - от\u00A0наброска к\u00A0спрайту"
    },
    {
      "id": "sector_worm",
      "src": "assets/games/sector-503/sector_worm.webp",
      "alt": "Worm - от\u00A0наброска к\u00A0спрайту"
    }
  ]
}, details: sectorDetails, playUrl: 'https://a0fail.github.io/sector-503/' },
];
export const profkom = {
  workflow: profkomProcess,
  "title": "Редизайн Профкома ВМК МГУ",
  "description": "Айдентика и\u00A0оформление сообщества ВКонтакте: логотип, обложка и\u00A0мерч.",
  "comparisons": [
    {
      "id": "community",
      "title": "Сообщество до и\u00A0после редизайна",
      "hideTitle": true,
      "aspect": "1832 / 1518",
      "before": {
        "id": "before",
        "src": "assets/web-design/profkom-redesign/before.png",
        "alt": "Страница сообщества до\u00A0редизайна",
        "caption": "Страница сообщества до\u00A0редизайна"
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
      "title": "Логотип до и\u00A0после",
      "hideTitle": true,
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
      "alt": "Новый логотип для внутреннего мерча Профкома",
      "caption": "Новый логотип для внутреннего мерча Профкома"
    }
  ]
};
export const initiation = {
  "title": "Посвящение в\u00A0студенты ВМК МГУ",
  "description": "Обложка и\u00A0аватар сообщества в\u00A0едином визуальном стиле.",
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
