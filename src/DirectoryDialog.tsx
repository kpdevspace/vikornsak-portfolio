import { useEffect, useRef } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import type { CatalogueProject } from './catalogue'
import { ProjectGallery } from './ProjectGallery'
import media from './directory-media.json'
export const directoryImages=media as Record<string,{file:string;caption:string}[]>
export function DirectoryDialog({project,onClose}:{project:CatalogueProject;onClose:()=>void}) {
 const ref=useRef<HTMLDialogElement>(null)
 useEffect(()=>{const d=ref.current;d?.showModal();const old=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{d?.close();document.body.style.overflow=old}},[])
 return <dialog ref={ref} className="project-dialog directory-dialog" aria-labelledby="directory-dialog-title" onCancel={onClose} onClick={e=>{if(e.target===e.currentTarget)onClose()}}><button className="dialog-close icon-button" onClick={onClose} aria-label="Close directory project details" autoFocus><X/></button><ProjectGallery images={directoryImages[project.id]}/><div className="dialog-content"><div className="directory-project-label"><p className="eyebrow">{project.area}</p><span className={`status-badge status-${project.status.toLowerCase()}`}>{project.status}</span></div><h2 id="directory-dialog-title">{project.name}</h2><p>{project.summary}</p><h3>Development approach</h3><p>{project.approach}</p><h3>Capabilities demonstrated</h3><div className="flex flex-wrap gap-2">{project.skills.map(s=><span key={s} className="tag">{s}</span>)}</div><h3>Evidence & stage</h3><p>{project.evidence}</p><p className="directory-dialog-sources">Sources: {project.sources.join(' · ')}</p>{project.repository&&<a className="text-link" href={project.repository} target="_blank" rel="noopener noreferrer">Public repository <ArrowUpRight size={16}/></a>}<p className="source-note">Archived screenshots illustrate development or demo versions. Workflow diagrams and capability maps are labeled conceptual illustrations, not application screenshots or proof of completed integration.</p></div></dialog>
}
