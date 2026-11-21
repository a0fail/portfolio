import type { ProjectProcessData } from './types';

// Process text stays in data; image-development galleries remain separate.
export const papersProcess: ProjectProcessData = {
  title: 'От идеи до готовой игры',
  steps: [
    { id: 'idea', title: 'Идея и сценарий', description: 'Визовый бюрократический квест: три игровых дня, требования к документам, сценарии и диалоги.' },
    { id: 'interface', title: 'Интерфейс и UX', description: 'Игровой стол, документы и подача в окно, взаимодействия с сотрудницей и посетителями очереди.' },
    { id: 'graphics', title: 'Графика и ассеты', description: 'Эмблема паспорта и персонажи: поиск исходников, визуальные итерации и адаптация в пиксельном редакторе.' },
    { id: 'development', title: 'Разработка и тесты', description: 'TypeScript, Phaser 3 и Vite. Механики игровых дней, диалоги, сохранение прогресса и звук.' },
  ],
  aiUsage: [{ category: 'graphics', description: 'Для отдельных визуальных исходников использовались поиск и генерация изображений. Затем материалы вручную обрабатывались и адаптировались в пиксельном редакторе.' }],
};

export const sectorProcess: ProjectProcessData = {
  title: 'От идеи до готовой игры',
  steps: [
    { id: 'idea', title: 'Идея и концепция', description: 'Ретро-шутер в оболочке Game Boy Advance и сеттинг заражённого сервера.' },
    { id: 'interface', title: 'Интерфейс и механики', description: 'Ретроконсоль, миникарта, три типа противников, секретные комнаты и улучшения.' },
    { id: 'graphics', title: 'Спрайты и графика', description: 'Наброски противников, игровые пиксельные спрайты и текстуры окружения.' },
    { id: 'development', title: 'Разработка и тесты', description: 'React, TypeScript, Canvas 2D и Webpack. Raycasting, клавиатура, экранные кнопки и Web Audio API.' },
  ],
  aiUsage: [{ category: 'graphics', description: 'ChatGPT использовался для преобразования набросков противников в игровые спрайты. Этапы создания показаны в галерее.' }],
};
