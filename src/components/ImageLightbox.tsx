import { useEffect, useRef, useState } from 'react';
import type { Media } from '../data/types';
import { MediaView, MediaCaption } from './Media';
export function ImageLightbox({images, initialIndex, close}: {images:Media[];initialIndex:number;close:()=>void}) {
 const [index,setIndex]=useState(initialIndex);
 const dialog=useRef<HTMLDialogElement>(null), touch=useRef<number|null>(null);
 const move=(step:number)=>setIndex(i=>(i+step+images.length)%images.length);
 useEffect(()=>{
  const previous=document.activeElement as HTMLElement|null;
  const overflow=document.body.style.overflow;
  document.body.style.overflow='hidden'; dialog.current?.showModal();
  return ()=>{document.body.style.overflow=overflow;previous?.focus();};
 },[]);
 const item=images[index];
 return <dialog ref={dialog} className="lightbox" aria-label="Просмотр изображений" onCancel={event=>{event.preventDefault();close();}} onClick={event=>{if(event.target===event.currentTarget)close();}} onKeyDown={event=>{if(event.key==='ArrowLeft'){event.preventDefault();move(-1);}if(event.key==='ArrowRight'){event.preventDefault();move(1);}}}>
 <div className="lightbox-top"><span aria-live="polite">{index+1} / {images.length}</span><button autoFocus onClick={close} aria-label="Закрыть просмотр">✕</button></div>
 <figure className="lightbox-media" onTouchStart={event=>{touch.current=event.touches[0].clientX;}} onTouchEnd={event=>{if(touch.current!==null){const diff=event.changedTouches[0].clientX-touch.current;if(Math.abs(diff)>50)move(diff>0?-1:1);touch.current=null;}}}><MediaView item={item} eager/><figcaption aria-live="polite">{item.stage && `${item.stage} · `}<MediaCaption item={item} fallback/></figcaption></figure>
 {images.length>1 && <div className="lightbox-controls"><button onClick={()=>move(-1)} aria-label="Предыдущее изображение">←</button><span>Листайте работы</span><button onClick={()=>move(1)} aria-label="Следующее изображение">→</button></div>}
 </dialog>;
}
