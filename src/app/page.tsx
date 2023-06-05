import { getProjects } from '../../sanity/sanity-utils'
import Link from 'next/link';

export default async function Home() {

  const projects = await getProjects();

  return (
  <div>
    <h1>This is TOP page of blog15!</h1>
    <div>
    {projects.map((project) => (
      <Link href={`/projects/${project.slug}`} key={project._id}>
        <div>
        {project.name}
        </div>   
      </Link>
    ))}
     </div>
  </div>
  );
}


