"use client";

import { getProject } from "../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";


type Props = {
    params: {project: string};
};

export default async function Project ({ params }: Props ) {
    const slug  = params.project;
    const project = await getProject(slug);

    return (
        <div>
            <h2>{project.name}</h2>
            <div>
                <PortableText value = {project.content} />
                </div>
            <Link href="/" >Home</Link>
        </div>
    )
}