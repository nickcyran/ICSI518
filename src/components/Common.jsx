// wrapper componenet that renders its children inside a common stylized card container
export function Card({ as: Component = 'div', className = '', children, ...props }) {
    return (
        <Component className={`glass card ${className}`} {...props}>
            {children}
        </Component>
    )
}

// layout componenet for main sections on page (about, skills, research ...)
export function Section({ title, id, className = '', children }) {
    return (
        <section id={id} className={`section ${className}`}>
            {title && <h2 className="sec-title">{title}</h2>}
            {children}
        </section>
    )
}

// renders lists of items as tags (used for listing tech)
export function TagList({ items, small = false }) {
    return (
        <div className="tags">
            {items.map((item, i) => (
                <span key={i} className={`tag ${small && 'sm'}`}>
                    {item}
                </span>
            ))}
        </div>
    )
}
