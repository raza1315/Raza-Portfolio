import React from 'react';

const OrbitImages = ({
    images = [],
    shape = 'ellipse',
    radiusX = 340,
    radiusY = 80,
    rotation = -8,
    duration = 30,
    itemSize = 80,
    responsive = true,
    radius = 160,
    direction = "normal",
    fill = true,
    showPath = true,
    paused = false,
    className = ""
}) => {
    const rx = shape === 'circle' ? radius : radiusX;
    const ry = shape === 'circle' ? radius : radiusY;
    const scaleY = ry / rx;
    const unscaleY = rx / ry;

    return (
        <div className={`relative flex items-center justify-center ${className} overflow-visible`}>
            <style dangerouslySetInnerHTML={{
                __html: `
            @keyframes orbit-spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(${direction === 'normal' ? '360deg' : '-360deg'}); }
            }
            @keyframes orbit-counter-spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(${direction === 'normal' ? '-360deg' : '360deg'}); }
            }
        ` }} />

            <div
                className="absolute flex items-center justify-center pointer-events-none"
                style={{
                    width: rx * 2,
                    height: rx * 2,
                    transform: `rotate(${rotation}deg) scaleY(${scaleY})`,
                    border: showPath ? '2px dashed rgba(44,42,41,0.1)' : 'none',
                    borderRadius: '50%',
                }}
            >
                {images.map((imgUrl, i) => {
                    const startAngle = (i / images.length) * 360;
                    return (
                        <div
                            key={i}
                            className="absolute w-full h-full pointer-events-auto"
                            style={{ transform: `rotate(${startAngle}deg)` }}
                        >
                            <div
                                style={{
                                    width: '100%', height: '100%',
                                    animation: `orbit-spin ${duration}s linear infinite`,
                                    animationPlayState: paused ? 'paused' : 'running'
                                }}
                            >
                                <div
                                    className="absolute"
                                    style={{
                                        width: itemSize,
                                        height: itemSize,
                                        left: `calc(50% - ${itemSize / 2}px)`,
                                        top: `calc(-${itemSize / 2}px)`,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '100%', height: '100%',
                                            animation: `orbit-counter-spin ${duration}s linear infinite`,
                                            animationPlayState: paused ? 'paused' : 'running'
                                        }}
                                    >
                                        <div style={{ width: '100%', height: '100%', transform: `rotate(-${startAngle}deg)` }}>
                                            <div style={{ width: '100%', height: '100%', transform: `scaleY(${unscaleY})` }}>
                                                <div
                                                    style={{ width: '100%', height: '100%', transform: `rotate(-${rotation}deg)` }}
                                                    className="bg-white p-[2px] rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.15)] border border-white/50 backdrop-blur-md flex justify-center items-center hover:scale-110 transition-transform cursor-pointer overflow-hidden"
                                                >
                                                    <img
                                                        src={imgUrl}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            borderRadius: '50%'
                                                        }}
                                                        alt="Orbital Tech Icon"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default OrbitImages;
