import { useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
export const projectImages: Record<string, {file: string; caption: string}[]> = {
 eris:[{file:'eris-research-projects.png',caption:'MU eRIS — research project information and subprojects'}],
 concrete:[{file:'concrete-navigation.jpg',caption:'S. Arun Concrete — production and delivery workflow navigation'}],
 membership:[{file:'membership-signin.png',caption:'Membership Touch Point — member sign-in interface'}],
 genie:[{file:'genie-mobile-menu.jpg',caption:'Genie Trading — mobile customer, supplier, sales and service workspace'},{file:'genie-inventory.jpg',caption:'Genie Trading — product inventory and stock adjustment'}],
 screening:[{file:'screening-floor-overview.jpg',caption:'Airport Screening — floor overview and population dashboard'},{file:'screening-tracking.jpg',caption:'Airport Screening — movement tracking visualization'}],
 hearing:[{file:'hearing-welcome.jpg',caption:'AI-MD hearing application — welcome and test entry'},{file:'hearing-test.jpg',caption:'AI-MD hearing application — hearing-test interaction'}],
 hsri:[{file:'hsri-research-team.jpg',caption:'HSRI research management, phase two — research-team selection'}],
}
export function ProjectGallery({projectId}: {projectId:string}) {
 const [index,setIndex]=useState(0)
 const images=projectImages[projectId]
 const current=images[index]
 const url=(file:string)=>`${import.meta.env.BASE_URL}projects/${file}`
 function move(step:number){setIndex(i=>(i+step+images.length)%images.length)}
 return <section className="project-gallery" aria-label="Project screenshots" onKeyDown={e=>{if(images.length>1&&(e.key==='ArrowRight'||e.key==='ArrowLeft')){e.preventDefault();move(e.key==='ArrowRight'?1:-1)}}}>
 <figure className="gallery-figure"><div className="gallery-stage"><img src={url(current.file)} alt={current.caption}/>{images.length>1&&<><button className="gallery-arrow gallery-prev" onClick={()=>move(-1)} aria-label="Previous screenshot"><ChevronLeft size={20}/></button><button className="gallery-arrow gallery-next" onClick={()=>move(1)} aria-label="Next screenshot"><ChevronRight size={20}/></button></>}</div><figcaption><span>{current.caption}</span><span className="gallery-counter" role="status">{index+1} / {images.length}</span></figcaption></figure>
 <div className="gallery-bottom">{images.length>1&&<div className="gallery-thumbnails" aria-label="Choose screenshot">{images.map((img,i)=><button key={img.file} className={i===index?'selected':''} aria-label={`Show screenshot ${i+1}: ${img.caption}`} aria-pressed={i===index} onClick={()=>setIndex(i)}><img src={url(img.file)} alt="" loading="lazy"/></button>)}</div>}<a className="gallery-fullsize" href={url(current.file)} target="_blank" rel="noopener noreferrer">Open full-size <ArrowUpRight size={13}/></a></div>
 </section>
}
