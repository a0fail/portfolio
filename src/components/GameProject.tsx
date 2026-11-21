import { useId, useState } from 'react';
import type { Game } from '../data/types';
import { ImageGallery, type OpenGallery } from './Media';
import { ProjectProcess } from './ProjectProcess';
import { siteText } from '../data/siteText';

export function GameProject({game,open,eyebrow}:{game:Game;open:OpenGallery;eyebrow?:string}) {
 const [expanded, setExpanded] = useState(false);
 const id = useId();
 return <section className="project game-project" id={game.id}>
  {eyebrow && <p className="eyebrow games-eyebrow">{eyebrow}</p>}
  <div className="project-heading">
   <div><div className="tags">{game.tags.map(tag=><span key={tag}>{tag}</span>)}</div><h2>{game.title}</h2><p>{game.description}</p></div>
   {game.playUrl ? <a className="button primary play-game" href={game.playUrl} target="_blank" rel="noopener noreferrer">Play Game</a> : <button className="button play-game" disabled>Play Game · скоро</button>}
  </div>
  <ImageGallery images={game.images} open={open} className="game-gallery"/>
  {game.workflow && <ProjectProcess data={game.workflow}/>}
  {game.process && <section className="game-process"><h3>{game.process.title}</h3><ImageGallery images={game.process.images} open={open}/></section>}
  <div className="project-details">
   <button className="project-details-toggle" id={`${id}-toggle`} aria-expanded={expanded} aria-controls={id} onClick={()=>setExpanded(value=>!value)}>
    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m6 3 5 5-5 5"/></svg>
    {game.detailsTitle ?? siteText.projectProcess.legacyDetailsTitle}
   </button>
   <div id={id} role="region" aria-labelledby={`${id}-toggle`} aria-hidden={!expanded} className={`project-details-panel${expanded?' is-open':''}`}>
    <div className="project-details-clip"><div className="detail-grid">{game.details.map(detail=><div key={detail.title}><h3>{detail.title}</h3><p>{detail.text}</p></div>)}</div></div>
   </div>
  </div>
 </section>;
}
