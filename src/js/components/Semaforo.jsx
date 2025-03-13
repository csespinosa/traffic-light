import { useState } from 'react';
import '/src/styles/semaforo.css';

const semaforoColors = ['red', 'yellow', 'green'];

const Semaforo = () => {
    const [lightColor, setLightColor] = useState(semaforoColors[0]);
    const [showBlue, setShowBlue] = useState(false);

    const changeColor = () => {
        setLightColor(prevColor => {
            const currentColors = showBlue ? [...semaforoColors, 'blue'] : semaforoColors;
            const currentIndex = currentColors.indexOf(prevColor);
            const nextIndex = (currentIndex + 1) % currentColors.length;
            return currentColors[nextIndex];
        });
    }

    const changeToBlue = () => {
        setShowBlue(prev => {
            if (!prev === false && lightColor === 'blue') {
                setLightColor(semaforoColors[0]);
            }
            return !prev;
        });
    }

    return (
        <div className="container">
            <div className="semaforo">
                {semaforoColors.map(color => (
                    <div
                        key={color}
                        className={`colorOfSemaforo ${color} ${lightColor === color ? 'active' : ''}`}
                    />
                ))}
                {showBlue && (
                    <div
                        className={`colorOfSemaforo blue ${lightColor === 'blue' ? 'active' : ''}`}
                    />
                )}
            </div>
            <button className="btn" onClick={changeColor}>Change Color</button>
            <br/>
            <button className="btnBlue" onClick={changeToBlue}>
                {showBlue ? 'Hide Blue' : 'Show Blue'}
            </button>
        </div>
    );
}

export default Semaforo;