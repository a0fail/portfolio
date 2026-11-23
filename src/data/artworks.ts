import type { ArtCategory } from './types';
import { facultyProcess, organizersProcess, teamsProcess } from './projectProcesses';

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
                "src": "assets/digital-art/pet collages/panel_house.webp",
                "alt": "Панельный дом",
                "caption": "«I am not human anymore» — Коллаж, вдохновлённый одноимённой песней, которую я слушал на повторе той осенью. Визуальная история о выгорании и отчуждении.",
                "captionAccent": "«I am not human anymore»"
              },
              {
                "id": "triad",
                "src": "assets/digital-art/pet collages/triad.webp",
                "alt": "Триада",
                "caption": "«Триада» — Эмоциональный отклик после серии «24/7» сериала Sandman. Материалы: моё фото картины Савинского, работа Гогена и образ ангела Кабанеля.",
                "captionAccent": "«Триада»"
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
                "src": "assets/digital-art/faculty_day/afisha.webp",
                "alt": "Афиша",
                "caption": "Афиша - День Факультета"
              },
              {
                "id": "shopper",
                "src": "assets/digital-art/faculty_day/shopper.webp",
                "alt": "Шоппер",
                "caption": "Шоппер - День Факультета",
                "background": false,
                "width": 2481,
                "height": 3508,
                "align": "end"
              },
              {
                "id": "badge",
                "src": "assets/digital-art/faculty_day/badge.webp",
                "alt": "Бейджи организаторов",
                "caption": "Бейджи организаторов - День Факультета",
                "background": false,
                "width": 947,
                "height": 1299
              },
              {
                "id": "tshirt_logo",
                "src": "assets/digital-art/faculty_day/tshirt_logo.png",
                "alt": "Принт на футболку",
                "caption": "Принт на футболку - День Факультета"
              }
            ],
            "layout": "paired-columns"
          }
        ]
      }
    ],
    "description": "Визуальная концепция Дня факультета в эстетике русских сказок. Афиша, шоппер, бейджи и принты объединены общей тематикой и декоративными мотивами.",
    "workflow": facultyProcess
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
                "alt": "Анатомия и композиция",
                "stage": "1 · Эскиз",
                "background": false,
                "width": 905,
                "height": 1280
              },
              {
                "id": "1line",
                "src": "assets/digital-art/tshirts_viezd_2025/1line.jpeg",
                "alt": "Лайнарт без аксессуаров",
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
    "description": "Принт для футболки организаторов выездного мероприятия. За основу взяты референсы заказчика, ТЗ: «космично, загадочно, андрогинно» и линейка скинов из League of Legends. Выполнено в Procreate.",
    "accentText": "2025",
    "workflow": organizersProcess
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
                "src": "assets/digital-art/tshirts_viezd_2026/first_tshirt_line.webp",
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
                "src": "assets/digital-art/tshirts_viezd_2026/first_tshirt.webp",
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
                "src": "assets/digital-art/tshirts_viezd_2026/second_tshirt_final.webp",
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
                "src": "assets/digital-art/tshirts_viezd_2026/third_tshirt_final.webp",
                "alt": "Команда Корсаров — финал",
                "stage": "2 · Финал"
              }
            ],
            "title": "Команда Корсаров"
          }
        ]
      }
    ],
    "description": "Серия из трёх принтов для команд выездного мероприятия. У каждой команды - собственный образ и визуальная идея  врамках общей тематики средневековья. Выполнено в Procreate. ",
    "accentText": "2026",
    "workflow": teamsProcess
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
                "src": "assets/digital-art/vector/cinema2022.webp",
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
                "caption": "Бейдж (шрифты выбраны заказчиком) · 2025",
                "background": false,
                "width": 839,
                "height": 1280
              }
            ]
          }
        ]
      }
    ],
    "description": "Небольшие студенческие проекты, афиши, принты и графические эксперименты разных лет.",
    "accentText": "Вся"
  }
];
