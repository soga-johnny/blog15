"use client";

import { getProject } from "../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css"


type Props = {
    params: {project: string};
};


export default async function Project ({ params }: Props ) {
    const slug  = params.project;
    const project = await getProject(slug,);
    
    return (
        <div>
            <a
            href={project.url}
            title="Pinterest"
            target="_blank"
            rel="noopner noreferrer"
            >
                Go to Pinterest
            </a>
            <Image 
            src={project.image}
            alt={project.name}
            width={500}
            height={500}
            />
            <Link href="/" >Home</Link>

            <div className={styles.details}>
            <details>
                <summary>
                <h2>{project.name}</h2>
                </summary>
                <div>
                <PortableText value = {project.content} />
                </div>
            </details>
            </div>
        </div>
    )
}