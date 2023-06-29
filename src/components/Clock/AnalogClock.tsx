import React, { useEffect, useRef } from 'react';

interface ClockProps {
    size: number;
    color: string;
}

export const AnalogClock: React.FC<ClockProps> = ({ size, color }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        if (!canvas || !context) return;

        const clockRadius = size / 2;

        const drawClock = () => {
            // Clear the canvas
            context.clearRect(0, 0, size, size);

            // Draw clock face
            context.beginPath();
            context.arc(clockRadius, clockRadius, clockRadius, 0, 2 * Math.PI);
            context.fillStyle = color;
            context.fill();

            // Draw clock hands
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            // Draw hour hand
            const hourAngle = (hours % 12) * (Math.PI / 6) + (Math.PI / 6) * (minutes / 60);
            drawHand(context, clockRadius * 0.5, hourAngle, clockRadius * 0.07);

            // Draw minute hand
            const minuteAngle = (minutes * Math.PI) / 30;
            drawHand(context, clockRadius * 0.7, minuteAngle, clockRadius * 0.05);

            // Draw second hand
            const secondAngle = (seconds * Math.PI) / 30;
            drawHand(context, clockRadius * 0.9, secondAngle, clockRadius * 0.02);

            // Draw center point
            context.beginPath();
            context.arc(clockRadius, clockRadius, clockRadius * 0.02, 0, 2 * Math.PI);
            context.fillStyle = '#000';
            context.fill();
        };

        const drawHand = (ctx: CanvasRenderingContext2D, length: number, angle: number, width: number) => {
            ctx.beginPath();
            ctx.lineWidth = width;
            ctx.lineCap = 'round';
            ctx.moveTo(clockRadius, clockRadius);
            ctx.lineTo(clockRadius + Math.sin(angle) * length, clockRadius - Math.cos(angle) * length);
            ctx.stroke();
        };

        const interval = setInterval(drawClock, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [size, color]);

    return <canvas ref={canvasRef} width={size} height={size} />;
};
