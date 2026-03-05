import { Section, Card } from './Common'
import { researchInterests } from '../data'

export default function Research() {
    return (
        <Section title="Research Interests">
            <Card>
                <div className="grid-2">
                    {researchInterests.map((item, index) => (
                        <div className="item" key={index}>
                            <span className="label">{item.label}</span>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </Card>
        </Section>
    )
}
