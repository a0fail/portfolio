export interface ProcessStep { id: string; title: string; description: string }
export interface AIUsage { category: 'graphics' | 'code' | 'text' | 'research' | 'audio'; description: string }
export interface ProjectProcessData { title?: string; steps: ProcessStep[]; aiUsage?: AIUsage[]; aiConfirmedAbsent?: boolean }
export interface Media { id: string; src?: string; alt: string; caption?: string; captionAccent?: string; align?: 'start' | 'center' | 'end'; background?: boolean; width?: number; height?: number; stage?: string; aspect?: string; tone?: string; order?: number }
export interface Game { workflow?: ProjectProcessData; detailsTitle?: string; id: string; title: string; description: string; tags: string[]; images: Media[]; process?: { title: string; images: Media[] }; details: { title: string; text: string }[]; playUrl?: string }
export interface ArtWork { workflow?: ProjectProcessData; layout?: 'paired-columns'; id: string; title?: string; description?: string; images: Media[]; order?: number }
export interface ArtSeries { workflow?: ProjectProcessData; id: string; title?: string; description?: string; works: ArtWork[]; order?: number }
export interface ArtCategory { workflow?: ProjectProcessData; accentText?: string; id: string; title: string; category: string; description?: string; projects: ArtSeries[]; order?: number }
export const ordered = <T extends { order?: number }>(items: T[]) => [...items].sort((a,b)=>(a.order ?? 0)-(b.order ?? 0));
export const placeholder = (id: string, caption: string, aspect='4 / 3', tone='sage'): Media => ({ id, caption, alt: caption + ' — демонстрационная заглушка', aspect, tone });
