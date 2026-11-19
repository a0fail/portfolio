import type { ArtCategory } from './types';

// Порядок разделов и изображений соответствует массивам ниже.
// Добавьте description в нужную категорию, чтобы показать описание.
export const artworks: ArtCategory[] = [
  {
    "id": "collages",
    "category": "Коллажи",
    "title": "Я так чувствую.",
    "order": 1,
    "projects": [
      {
        "id": "collages-series",
        "works": [
          {
            "id": "collages-images",
            "images": [
              {
                "id": "panel_house",
                "src": "assets/digital-art/pet collages/panel_house.png",
                "alt": "Панельный дом",
                "caption": "\"I am not human anymore\" - создано благодаря одноименной песне, игравшей в моих наушниках на репите той осенью, пока я плавал в легкой диссоциации и тяжелом выгорании",
                "captionAccent": "\"I am not human anymore\""
              },
              {
                "id": "triad",
                "src": "assets/digital-art/pet collages/triad.png",
                "alt": "Триада",
                "caption": "\"Триада\" - порыв чувств и эмоций после просмотра серии \"24/7\" из сериала Sandman. Использовал свое фото картины Савинского с выставки в музее русского импрессионизма, одну из моих любимых картин Гогена и пронизывающего взглядом кабанелевского ангела",
                "captionAccent": "\"Триада\""
              }
            ]
          }
        ]
      }
    ],
    "description": "Когда мне хочется выплеснуть эмоции на «холст», но нет стилуса под рукой — я делаю коллажи.",
    "accentText": "чувствую."
  },
  {
    "id": "faculty-day-2026",
    "category": "Мерч и оформление мероприятий",
    "title": "День факультета · 2026",
    "accentText": "2026",
    "order": 2,
    "projects": [
      {
        "id": "faculty-day-2026-series",
        "works": [
          {
            "id": "faculty-images",
            "images": [
              {
                "id": "afisha",
                "src": "assets/digital-art/faculty_day/afisha.png",
                "alt": "Афиша",
                "caption": "Афиша"
              },
              {
                "id": "shopper",
                "src": "assets/digital-art/faculty_day/shopper.png",
                "alt": "Шоппер",
                "caption": "Шоппер",
                "background": false,
                "width": 2481,
                "height": 3508,
                "align": "end"
              },
              {
                "id": "badge",
                "src": "assets/digital-art/faculty_day/badge.png",
                "alt": "Бейджи организаторов",
                "caption": "Бейджи организаторов",
                "background": false,
                "width": 947,
                "height": 1299
              },
              {
                "id": "tshirt_logo",
                "src": "assets/digital-art/faculty_day/tshirt_logo.png",
                "alt": "Принт на футболку",
                "caption": "Принт на футболку"
              }
            ],
            "layout": "paired-columns"
          }
        ]
      }
    ],
    "description": "В стиле русских сказок.\nДля афиши взял как фон картину Васнецова, орнамент на шоппере собран вручную, основываясь на паттернах традиционной вышивки.\nВсе иллюстрации нарисованы в Procreate, а для домового стек: скетч · примерный покрас · генерация в ChatGPT."
  },
  {
    "id": "trip-2025",
    "category": "Мерч и оформление мероприятий",
    "title": "Футболка для главных организаторов · 2025",
    "order": 3,
    "projects": [
      {
        "id": "trip-2025-series",
        "works": [
          {
            "id": "organizers-print",
            "images": [
              {
                "id": "2sketch",
                "src": "assets/digital-art/tshirts_viezd_2025/2sketch.jpeg",
                "alt": "Разработка композиции",
                "stage": "1 · Эскиз",
                "background": false,
                "width": 905,
                "height": 1280
              },
              {
                "id": "1line",
                "src": "assets/digital-art/tshirts_viezd_2025/1line.jpeg",
                "alt": "Линейный рисунок",
                "stage": "2 · Лайн",
                "background": false,
                "width": 905,
                "height": 1280
              },
              {
                "id": "3texture",
                "src": "assets/digital-art/tshirts_viezd_2025/3texture.jpeg",
                "alt": "Работа с текстурами",
                "stage": "3 · Текстуры",
                "background": false,
                "width": 905,
                "height": 1280
              },
              {
                "id": "4final",
                "src": "assets/digital-art/tshirts_viezd_2025/4final.jpeg",
                "alt": "Готовый принт",
                "stage": "4 · Финал",
                "background": false,
                "width": 905,
                "height": 1280
              }
            ]
          }
        ]
      }
    ],
    "description": "Принт для футболки на выездное мероприятие факультета с предварительным набором референсов от заказчика.\nТЗ: «космично, загадочно, андрогинно» \n Использовал Procreate",
    "accentText": "2025"
  },
  {
    "id": "trip-2026",
    "category": "Мерч и оформление мероприятий",
    "title": "Футболка для кураторов команд · 2026",
    "order": 4,
    "projects": [
      {
        "id": "trip-2026-series",
        "works": [
          {
            "id": "first-print",
            "images": [
              {
                "id": "first_tshirt_line",
                "src": "assets/digital-art/tshirts_viezd_2026/first_tshirt_line.PNG",
                "alt": "Команда Архивариусов — лайн",
                "stage": "1 · Лайн",
                "background": false,
                "width": 3508,
                "height": 4961
              },
              {
                "id": "first_tshirt",
                "background": true,
                "width": 3508,
                "height": 4961,
                "src": "assets/digital-art/tshirts_viezd_2026/first_tshirt.png",
                "alt": "Команда Архивариусов — финал",
                "stage": "2 · Финал"
              }
            ],
            "title": "Команда Архивариусов"
          },
          {
            "id": "third-print",
            "images": [
              {
                "id": "second_tshirt_sketch",
                "src": "assets/digital-art/tshirts_viezd_2026/second_tshirt_sketch.jpeg",
                "alt": "Команда Астрономов-Астрологов — эскиз",
                "stage": "1 · Эскиз",
                "background": false,
                "width": 960,
                "height": 1280
              },
              {
                "id": "second_tshirt_final",
                "src": "assets/digital-art/tshirts_viezd_2026/second_tshirt_final.png",
                "alt": "Команда Астрономов-Астрологов — финал",
                "stage": "2 · Финал"
              }
            ],
            "title": "Команда Астрономов-Астрологов"
          },
          {
            "id": "second-print",
            "images": [
              {
                "id": "third_tshirt_sketch",
                "src": "assets/digital-art/tshirts_viezd_2026/third_tshirt_sketch.jpeg",
                "alt": "Команда Корсаров — эскиз",
                "stage": "1 · Эскиз",
                "background": false,
                "width": 960,
                "height": 1280
              },
              {
                "id": "third_tshirt_final",
                "src": "assets/digital-art/tshirts_viezd_2026/third_tshirt_final.png",
                "alt": "Команда Корсаров — финал",
                "stage": "2 · Финал"
              }
            ],
            "title": "Команда Корсаров"
          }
        ]
      }
    ],
    "description": "Принты для футболок на выездное мероприятие факультета с полной творческой свободой для кураторов и их команд.\nТЗ: «ну, чтоб красиво было, как ты всегда делаешь» \n  Использовал Procreate",
    "accentText": "2026"
  },
  {
    "id": "other",
    "category": "Всячина",
    "title": "Всячина",
    "order": 5,
    "projects": [
      {
        "id": "other-series",
        "works": [
          {
            "id": "other-images",
            "images": [
              {
                "id": "cinema2022",
                "src": "assets/digital-art/vector/cinema2022.png",
                "alt": "Афиша кинопоказа · 2022",
                "caption": "Афиша кинопоказа · 2022",
                "background": false,
                "width": 3125,
                "height": 5559
              },
              {
                "id": "tshirt2022",
                "src": "assets/digital-art/vector/tshirt2022.png",
                "alt": "Принт на футболку · 2022",
                "caption": "Принт на футболку · 2022",
                "background": false,
                "width": 4961,
                "height": 7016
              },
              {
                "id": "crystal",
                "src": "assets/digital-art/vector/crystal.jpeg",
                "alt": "Бейдж для выездного мероприятия",
                "caption": "Бейдж для выездного мероприятия · 2025",
                "background": false,
                "width": 839,
                "height": 1280
              }
            ]
          }
        ]
      }
    ],
    "description": "То-сё, пятое-десятое",
    "accentText": "Вся"
  }
];
