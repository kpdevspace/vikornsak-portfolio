import { useEffect, useRef, useState } from 'react'
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react'
export const projectImages: Record<string, {file: string; caption: string}[]> = {
 eris:[{file:'eris-research-projects.png',caption:'MU eRIS — research project information and subprojects'},{file:'eris-publications.png',caption:'MU eRIS — publications and research outputs'},{file:'eris-budget-years.png',caption:'MU eRIS — annual research budget view'}],
 concrete:[{file:'concrete-navigation.jpg',caption:'S. Arun Concrete — production and delivery workflow navigation'},{file:'concrete-production.jpg',caption:'S. Arun Concrete — production queue'},{file:'concrete-order-status.jpg',caption:'S. Arun Concrete — order progress and production status'}],
 membership:[{file:'membership-signin.png',caption:'Membership Touch Point — member sign-in interface'}],
 genie:[{file:'genie-mobile-menu.jpg',caption:'Genie Trading — mobile customer, supplier, sales and service workspace'},{file:'genie-inventory.jpg',caption:'Genie Trading — product inventory and stock adjustment'}],
 screening:[{file:'screening-floor-overview.jpg',caption:'Airport Screening — floor overview and population dashboard'},{file:'screening-tracking.jpg',caption:'Airport Screening — movement tracking visualization'}],
 hearing:[{file:'hearing-welcome.jpg',caption:'AI-MD hearing application — welcome and test entry'},{file:'hearing-test.jpg',caption:'AI-MD hearing application — hearing-test interaction'}],
 hsri:[{file:'hsri-research-team.jpg',caption:'HSRI research management, phase two — research-team selection'},{file:'hsri-budget.jpg',caption:'HSRI research management, phase two — budget allocation'}],
}
function ImageViewer({images,index,onMove,onClose}:{images:{file:string;caption:string}[];index:number;onMove:(step:number)=>void;onClose:()=>void}) {
 const ref=useRef<HTMLDialogElement>(null)
 useEffect(()=>{const d=ref.current;d?.showModal();return()=>d?.close()},[])
 const current=images[index]
 return <dialog ref={ref} className="image-viewer" aria-label="Enlarged project screenshot" onCancel={e=>{e.preventDefault();e.stopPropagation();onClose()}} onClick={e=>{if(e.target===e.currentTarget)onClose()}} onKeyDown={e=>{e.stopPropagation();if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();onMove(e.key==='ArrowRight'?1:-1)}}}><div className="viewer-header"><p>{current.caption}</p><button className="icon-button" aria-label="Close enlarged screenshot" onClick={onClose} autoFocus><X/></button></div><div className="viewer-image"><img src={`${import.meta.env.BASE_URL}projects/${current.file}`} alt={current.caption}/></div><div className="viewer-controls">{images.length>1&&<button className="button button-outline" onClick={()=>onMove(-1)} aria-label="Previous enlarged screenshot"><ChevronLeft size={18}/>Previous</button>}<span role="status">{index+1} / {images.length}</span>{images.length>1&&<button className="button button-outline" onClick={()=>onMove(1)} aria-label="Next enlarged screenshot">Next<ChevronRight size={18}/></button>}</div></dialog>
}
export function ProjectGallery({projectId}: {projectId:string}) {
 const [index,setIndex]=useState(0),[enlarged,setEnlarged]=useState(false)
 const images=projectImages[projectId],current=images[index]
 const url=(file:string)=>`${import.meta.env.BASE_URL}projects/${file}`
 function move(step:number){setIndex(i=>(i+step+images.length)%images.length)}
 return <section className="project-gallery" aria-label="Project screenshots" onKeyDown={e=>{if(images.length>1&&(e.key==='ArrowRight'||e.key==='ArrowLeft')){e.preventDefault();move(e.key==='ArrowRight'?1:-1)}}}>
 <figure className="gallery-figure"><div className="gallery-stage"><button className="gallery-image-button" aria-label="Enlarge current screenshot" onClick={()=>setEnlarged(true)}><img src={url(current.file)} alt={current.caption}/></button>{images.length>1&&<><button className="gallery-arrow gallery-prev" onClick={()=>move(-1)} aria-label="Previous screenshot"><ChevronLeft size={20}/></button><button className="gallery-arrow gallery-next" onClick={()=>move(1)} aria-label="Next screenshot"><ChevronRight size={20}/></button></>}</div><figcaption><span>{current.caption}</span><span className="gallery-counter" role="status">{index+1} / {images.length}</span></figcaption></figure>
 <div className="gallery-bottom">{images.length>1&&<div className="gallery-thumbnails" aria-label="Choose screenshot">{images.map((img,i)=><button key={img.file} className={i===index?'selected':''} aria-label={`Show screenshot ${i+1}: ${img.caption}`} aria-pressed={i===index} onClick={()=>setIndex(i)}><img src={url(img.file)} alt="" loading="lazy"/></button>)}</div>}<button className="gallery-fullsize" onClick={()=>setEnlarged(true)}>Enlarge image <Maximize2 size={13}/></button></div>
 {enlarged&&<ImageViewer images={images} index={index} onMove={move} onClose={()=>setEnlarged(false)}/>}
 </section>
}
