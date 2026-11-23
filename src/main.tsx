import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { profile } from './data/profile';
import { siteText } from './data/siteText';
import { artworks } from './data/artworks';
import { games, profkom, initiation } from './data/webProjects';
import { ordered, type Media } from './data/types';
import { ImageGallery, MediaView, type OpenGallery } from './components/Media';
import { ImageLightbox } from './components/ImageLightbox';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { GameProject } from './components/GameProject';
import { Header } from './components/Header';
import { ProjectProcess } from './components/ProjectProcess';
import './styles.css';

const mobileAreaTexts: Record<string, string> = {
  'Digital Art & Illustration':
    'Цифровые иллюстрации, графический дизайн, приправим пиксель-артом. Принты, оформление мероприятий, ассеты.',

  'Design Leadership':
    'Возглавлял блок дизайна в профкоме ВМК МГУ. Координировал работу, взаимодействовал с заказчиками, общался с типографией.',

  'Development & Web Design':
    'Frontend, веб-приложения и браузерные игры. Работа над интерфейсами, интерактивностью и пользовательским опытом. И вайбкодим (чуть-чуть ^_^ ).',
};

const routes=[{id:'home',label:siteText.navigation.home},{id:'web-design',label:siteText.navigation.webDesign},{id:'digital-art',label:siteText.navigation.digitalArt}];
const currentPage=()=>{const page=window.location.hash.replace('#/','');return routes.some(r=>r.id===page)?page:'home';};

function createPageGallery(
  open: OpenGallery,
  allImages: Media[]
): OpenGallery {
  return (images, index) => {
    const selected = images[index];
    const globalIndex = allImages.indexOf(selected);

    if (globalIndex === -1) {
      open(images, index);
      return;
    }

    open(allImages, globalIndex);
  };
}


function Home() {
 const contactDescription = (siteText.home as { contactDescription?: string }).contactDescription;
 const photo:Media={id:'portrait',src:profile.photo,alt:siteText.home.photoAlt,width:4793,height:4793};
 return <>
 
<section className="hero">
  <div className="hero-copy">
    <div className="hero-copy-top">
      <h1>
        {siteText.home.greeting}
        <br />
        {siteText.home.namePrefix}
        <span>
          {siteText.home.displayName}
          {siteText.home.nameSuffix}
        </span>
      </h1>

      <p className="name-caption">
        <span>в простонародье —</span>
        <span className="accent">Владимир Волков</span>
      </p>

      <p className="role">{profile.role}</p>
    </div>

    <p className="intro">{profile.intro}</p>

    {siteText.home.slogan && (
      <p className="hero-note">
        {siteText.home.slogan}
      </p>
    )}
  </div>

  <div className="profile-artwork">
    <MediaView item={photo} eager />
  </div>
</section>

<section className="about-section"><div className="section-intro"><p className="eyebrow">{siteText.home.aboutEyebrow}</p><h2>{siteText.home.aboutTitle}<br/><span className="muted">{siteText.home.aboutSubtitle}</span></h2></div>
<div className="areas">
  {profile.areas.map(area => (
    <article key={area.title}>
      <p className="eyebrow">{area.label}</p>

      <h3>{area.title}</h3>

      <p>
        <span className="area-text-desktop">
          {area.text}
        </span>

        <span className="area-text-mobile">
          {mobileAreaTexts[area.title] ?? area.text}
        </span>
      </p>
    </article>
  ))}
</div>
</section><section className="contact-section"><div><p className="eyebrow">{siteText.home.contactEyebrow}</p><h2>{siteText.home.contactTitle}<span className="accent">{siteText.home.contactTitleAccent}</span></h2>{contactDescription && <p>{contactDescription}</p>}</div><div className="contacts">{profile.contacts.map(contact=><div className="contact" key={contact.label}><span>{contact.label}</span><span className="contact-values">{(contact.links ?? [contact]).map((link,index)=><React.Fragment key={link.href || index}>{index>0 && <span className="contact-separator" aria-hidden="true"> · </span>}{link.href?<a href={link.href} target={link.href.startsWith('mailto:')?undefined:'_blank'} rel="noopener noreferrer">{link.value}</a>:<span className="muted">{link.value}</span>}</React.Fragment>)}</span></div>)}</div></section></>;
}
function WebDesign({open}:{open:OpenGallery}) {

  const webImages: Media[] = [
    ...games.flatMap(game => [
      ...ordered(game.images),
      ...ordered(game.process?.images ?? []),
    ]),
    ...profkom.images,
    ...initiation.images,
  ];

  const openWeb = createPageGallery(open, webImages);

  return <><div className="page-heading"><p className="eyebrow">{siteText.webDesign.eyebrow}</p><h1>{siteText.webDesign.title}<br/><span className="accent">{siteText.webDesign.titleAccent}</span></h1></div>{games.map((game,index)=><GameProject key={game.id} game={game} open={openWeb} eyebrow={index===0 ? siteText.webDesign.gamesEyebrow : undefined}/>)}<section className="project"><p className="eyebrow">{siteText.webDesign.communityEyebrow}</p><h2>{profkom.title}</h2><p>{profkom.description}</p>{profkom.workflow && <ProjectProcess data={profkom.workflow}/>}<div className="comparisons redesign-grid">{profkom.comparisons.map(pair=><BeforeAfterSlider key={pair.id} {...pair}/>)}<ImageGallery images={profkom.images} open={openWeb} className="redesign-print"/></div></section><section className="project"><p className="eyebrow">{siteText.webDesign.eventEyebrow}</p><h2>{initiation.title}</h2><p>{initiation.description}</p><ImageGallery images={initiation.images} open={open} className="identity-gallery"/></section></>;}
function DigitalArt({open}:{open:OpenGallery}) {

  const artImages: Media[] = ordered(artworks).flatMap(
    category =>
      ordered(category.projects).flatMap(
        project =>
          ordered(project.works).flatMap(
            work => ordered(work.images)
          )
      )
  );

  const openArt = createPageGallery(open, artImages);

  const scrollToArt = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches ? 'auto' : 'smooth',
      block: 'start',
    });
  };
  
  
 const categories=[...new Set(artworks.map(item=>item.category))];
 return <><div className="page-heading" id="art-top"><p className="eyebrow">{siteText.digitalArt.eyebrow}</p><h1>{siteText.digitalArt.title}<span className="accent">{siteText.digitalArt.titleAccent}</span></h1></div>
 
<nav className="filters" aria-label="Разделы Digital Art">
  <button
    type="button"
    onClick={() => scrollToArt('art-top')}
  >
    {siteText.digitalArt.allFilter}
  </button>

  {categories.map(category => {
    const target = ordered(artworks).find(
      item => item.category === category
    );

    return (
      
<button
  key={category}
  type="button"
  onClick={() => {
    if (target) {
      scrollToArt(`art-${target.id}`);
    }
  }}
>
  {category === 'Мерч и оформление мероприятий' ? (
    <>
      <span className="art-filter-full">{category}</span>
      <span className="art-filter-short" aria-hidden="true">
        Мерч
      </span>
    </>
  ) : (
    category
  )}
</button>

    );
  })}
</nav>

  {ordered(artworks).map(category => (
    <section
      className="art-category"
      id={`art-${category.id}`}
      data-category={category.id}
      key={category.id}
    >

  <div className="category-heading">
    <h2>{category.accentText ? <>{category.title.slice(0,category.title.indexOf(category.accentText))}
    <span className="accent">{category.accentText}</span>{category.title.slice(category.title.indexOf(category.accentText)+category.accentText.length)}</> : category.title}</h2>{category.description && <p>{category.description}</p>}</div>{category.workflow && <ProjectProcess data={category.workflow}/>} {ordered(category.projects).map(project=><article key={project.id} className="art-project">{project.title && <h3>{project.title}</h3>}{project.description && <p>{project.description}</p>}{project.workflow && <ProjectProcess data={project.workflow} headingLevel={4}/>}<div className="art-works">{ordered(project.works).map(work=><section key={work.id} data-work={work.id} className={work.images.length>1?'work full':'work'}>{work.title && <h4>{work.title}</h4>}{work.description && <p>{work.description}</p>}{work.workflow && <ProjectProcess data={work.workflow} headingLevel={5}/>}<ImageGallery images={work.images} open={openArt} layout={work.layout}/></section>)}</div></article>)}</section>))}</>;
}
function App(){
 const [page,setPage]=useState(currentPage);const [lightbox,setLightbox]=useState<{images:Media[];index:number}|null>(null);const main=useRef<HTMLElement>(null);
 useEffect(()=>{const onChange=()=>{setPage(currentPage());setLightbox(null);window.scrollTo(0,0);requestAnimationFrame(()=>main.current?.focus());};window.addEventListener('hashchange',onChange);return()=>window.removeEventListener('hashchange',onChange);},[]);
 useEffect(()=>{document.title=`${routes.find(r=>r.id===page)?.label} — a0fail`;},[page]);
 const open:OpenGallery=(images,index)=>setLightbox({images,index});
 return <><a href="#main" className="skip-link" onClick={event=>{event.preventDefault();main.current?.focus();}}>{siteText.navigation.skipLink}</a><Header routes={routes} page={page}/><main id="main" ref={main} tabIndex={-1}>{page==='home'?<Home />:page==='web-design'?<WebDesign open={open}/>:<DigitalArt open={open}/>}</main><footer><span>{siteText.footer.copyright} {new Date().getFullYear()} {profile.name}</span><span>{siteText.footer.tagline}</span><a href="#/home">{siteText.navigation.home}</a></footer>{lightbox && <ImageLightbox images={lightbox.images} initialIndex={lightbox.index} close={()=>setLightbox(null)}/>}</>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
