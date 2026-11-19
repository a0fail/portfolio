import { useId, useState } from 'react';
import type { Media } from '../data/types';
import { MediaView } from './Media';
export function BeforeAfterSlider({before,after,title,aspect='3 / 1',hideTitle=false}:{before:Media;after:Media;title:string;aspect?:string;hideTitle?:boolean}) {
 const [position,setPosition]=useState(50);const id=useId();
 return <figure className="comparison"><figcaption id={id} className={hideTitle ? "sr-only" : undefined}>{title}</figcaption><div className="comparison-frame" style={{aspectRatio:aspect}}><div className="comparison-layer"><MediaView item={after}/></div><div className="comparison-layer" style={{clipPath:`inset(0 ${100-position}% 0 0)`}}><MediaView item={before}/></div><span className="comparison-label before">Before</span><span className="comparison-label after">After</span><div className="divider" style={{left:`${position}%`}}><span>↔</span></div><input type="range" min="0" max="100" value={position} onChange={event=>setPosition(Number(event.target.value))} aria-labelledby={id} aria-valuetext={`До: ${position}%, после: ${100-position}%`}/></div><p className="hint">Перемещайте разделитель мышкой, пальцем или стрелками клавиатуры.</p></figure>;
}
