import { useState, type CSSProperties } from 'react';
import { ordered, type Media } from '../data/types';
export function assetUrl(src: string) { return /^(https?:|data:|blob:)/.test(src) ? src : import.meta.env.BASE_URL + src.replace(/^\/+/, ''); }
export function MediaView({ item, eager=false }: { item: Media; eager?: boolean }) {
 const [failed, setFailed] = useState('');
 if(item.src && failed !== item.src) return <img src={assetUrl(item.src)} alt={item.alt} width={item.width} height={item.height} loading={eager?'eager':'lazy'} decoding="async" onError={()=>setFailed(item.src!)} />;
 return <div className={`placeholder tone-${item.tone || 'sage'}`} style={{aspectRatio:item.aspect || '4 / 3'}} role="img" aria-label={item.alt}><div className="placeholder-art" aria-hidden="true"><i/><i/><i/></div><span className="placeholder-label">{item.caption || item.alt}<small>PLACEHOLDER</small></span></div>;
}
export type OpenGallery = (images: Media[], index: number) => void;
export function ImageGallery({ images, open, className='', layout }: { images:Media[]; open:OpenGallery; className?:string; layout?: 'paired-columns' }) {
 const sorted=ordered(images);
 const renderImage = (item: Media, index: number) => <figure key={item.id} className={item.background === false ? "media-natural" : undefined} style={{ "--media-ratio": item.width && item.height ? item.width / item.height : undefined, justifySelf: item.align } as CSSProperties}><button className={`image-button${item.background === false ? " image-no-background" : ""}`} onClick={()=>open(sorted,index)} aria-label={`Открыть: ${item.caption || item.alt}`}><MediaView item={item}/><span className="zoom-mark" aria-hidden="true">＋</span></button>{(item.stage || item.caption) && <figcaption>{item.stage && <span className="stage">{item.stage}</span>}<MediaCaption item={item}/></figcaption>}</figure>;
 return layout === 'paired-columns' ? <div className={`gallery gallery-columns ${className}`}>{[0,1].map(column=><div className="gallery-column" key={column}>{sorted.map((item,index)=>index%2===column ? renderImage(item,index) : null)}</div>)}</div> : <div className={`gallery ${className}`}>{sorted.map(renderImage)}</div>;
}

// Keep commentary muted while highlighting only the named artwork.
export function MediaCaption({ item, fallback=false }: { item: Media; fallback?: boolean }) {
 const text = item.caption || (fallback ? item.alt : '');
 const title = item.captionAccent;
 const index = title ? text.indexOf(title) : -1;
 return title && index >= 0
  ? <span className="caption-commentary">{text.slice(0,index)}<span className="accent">{title}</span>{text.slice(index+title.length)}</span>
  : <>{text}</>;
}
