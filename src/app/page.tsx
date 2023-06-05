import { getProjects } from '../../sanity/sanity-utils'
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {

  const projects = await getProjects();

  return (
  <div>
    <h1>This is TOP page of blog15</h1>
    <div>
    {projects.map((project) => (
      <Link href={`/projects/${project.slug}`} key={project._id}>
       <div>
        <div>
        {project.name}
        </div>
      {project.image && (
        
        <Image 
        src={project.image}
        alt={project.name}
        width={250}
        height={200}
        />
      )}
      </div>
      </Link>
    ))}
     </div>
  </div>
  );
}

