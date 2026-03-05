import { useState, useEffect } from 'react'
import { Section, Card, TagList } from './Common'

const API_URL = import.meta.env.PROD
    ? import.meta.env.VITE_PROD_API_URL
    : import.meta.env.VITE_API_URL;

export default function Projects() {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // on mount fetch projects from the DB
    useEffect(() => {
        fetch(`${API_URL}/api/projects`)
            .then(res => {
                if (!res.ok) throw new Error(`Server error: ${res.status}`)
                return res.json()
            })
            .then(data => setProjects(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [])

    return (
        <Section title="Projects">
            {/* status messages */}
            {loading && (
                <Card>
                    <p className="status">Loading projects…</p>
                    <p className="status-disclaimer">
                        This site uses Render's free tier. If the server is sleeping, it may take up to a minute to wake up.
                    </p>
                </Card>
            )}
            {error && <Card><p className="status err">Failed to load: {error}</p></Card>}

            {/* display project as a card with title, description, and tags */}
            <div className="grid-2">
                {projects.map((project) => (
                    <Card
                        as="a"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={project._id}
                    >
                        <h3>{project.title}</h3>
                        <p className="desc" title={project.description}>
                            {project.description}
                        </p>
                        <TagList items={project.tags} small />
                    </Card>
                ))}
            </div>
        </Section>
    )
}
