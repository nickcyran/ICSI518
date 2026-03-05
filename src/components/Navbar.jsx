import { useState, useRef, useEffect } from 'react';
import settingsIcon from '../assets/settings.svg';
import '../styles/Navbar.css';

export default function Navbar({ toggleTheme, showShader, setShowShader, showContent, setShowContent }) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handler = (e) => ref.current?.contains(e.target) || setIsOpen(false);
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    // checkmark toggles to include
    const toggles = [
        ['Show Content', showContent, setShowContent],
        ['Show Shader', showShader, setShowShader]
    ];

    return (
        <nav className="nav">
            <p>Portfolio</p>
            <div className="settings-container" ref={ref}>
                {/* SETTINGS BUTTON */}
                <button className="settings-btn" aria-label="Settings" onClick={() => setIsOpen(x => !x)}>
                    <img src={settingsIcon} alt="settings" />
                </button>

                {/* if settings open display toggles */}
                {isOpen && (
                    <div className="settings-dropdown">
                        <button className="dropdown-item" onClick={toggleTheme}>Toggle Theme</button>
                        {toggles.map(([label, state, set]) => (
                            <label key={label} className="dropdown-checkbox">
                                <span>{label}</span>
                                <input type="checkbox" checked={state} onChange={e => set(e.target.checked)} />
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}