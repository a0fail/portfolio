import { papersProcess, sectorProcess, profkomProcess } from './projectProcesses';
import type { Game } from './types';
const papersDetails = [
  {
    "title": "Об игре",
    "text": "Каждый игровой день приносит новые требования и поводы вернуться завтра. Твоя задача - пройти визовый квест, несмотря на бюрократические препятствия."
  },
  {
    "title": "Механики",
    "text": "Поиск и заполнение документов, подача их в окно, проверка фотографий, ограниченное время и диалоги с сотрудницей и посетителями очереди. Прогресс сохраняется между визитами."
  }
];
const sectorDetails = [
  {
    "title": "Об игре",
    "text": "Шутер от первого лица внутри заражённого сервера. Название отсылает к HTTP 503 - Service Unavailable."
  },
  {
    "title": "Механики",
    "text": "Лабиринт с миникартой, стрельба и три типа вирусов: Worm, Trojan и Cypher. Разрушаемые стены скрывают секретные комнаты, аптечки восстанавливают защиту. Улучшения и финальный босс - на пути к выходу из заражённого сервера."
  }
];
export const games: Game[] = [
  { id: 'accept-papers', workflow: papersProcess, detailsTitle: 'Об игре и механиках', title: 'Accept Papers, Please', description: 'Симулятор бюрократического ада по мотивам Papers, Please.\nТри дня по эту сторону стекла визового центра. Переживи бесконечные требования, справки и очереди - и попробуй получить визу!', tags: ['Browser game', 'Жанр: симулятор бюрократии'], images: [
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
  { id: 'sector-503', workflow: sectorProcess, detailsTitle: 'Об игре и механиках', title: 'Sector 503', description: 'Ретро-шутер в оболочке Game Boy Advance, вдохновлённый Doom и Wolfenstein 3D.\nОсвободи сервер от вирусной деспотии - во имя материнской платы, оперативки и святой видюхи!', tags: ['Browser game', 'Жанр: Ретро-шутер'], images: [
  {
    "id": "sector",
    "src": "assets/games/sector-503/sector.webp",
    "alt": "Геймплей - Sector 503"
  },
  {
    "id": "sector1",
    "src": "assets/games/sector-503/sector1.png",
    "alt": "Worm во время стельбы - Sector 503"
  },
  {
    "id": "sector2",
    "src": "assets/games/sector-503/sector2.png",
    "alt": "Выстрел - Sector 503"
  },
  {
    "id": "sector3",
    "src": "assets/games/sector-503/sector3.png",
    "alt": "Cyper в неактивной фазе - Sector 503"
  }
], process: {
  "title": "От наброска к игровому спрайту",
  "images": [
    {
      "id": "sector_trojan",
      "src": "assets/games/sector-503/sector_trojan.webp",
      "alt": "Trojan - от наброска к спрайту"
    },
    {
      "id": "sector_cyper",
      "src": "assets/games/sector-503/sector_cyper.png",
      "alt": "Cypher - от наброска к спрайту"
    },
    {
      "id": "sector_worm",
      "src": "assets/games/sector-503/sector_worm.webp",
      "alt": "Worm - от наброска к спрайту"
    }
  ]
}, details: sectorDetails, playUrl: 'https://a0fail.github.io/sector-503/' },
];
export const profkom = {
  workflow: profkomProcess,
  "title": "Редизайн Профкома ВМК МГУ",
  "description": "Айдентика и оформление сообщества ВКонтакте: логотип, обложка и мерч",
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
  "title": "Посвящение в студенты ВМК МГУ",
  "description": "Обложка и аватар сообщества в едином визуальном стиле",
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
