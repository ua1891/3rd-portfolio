import { useEffect, useRef } from 'react';

export default function Background3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class for 3D simulation
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        // Position in 3D space relative to center
        this.x = (Math.random() - 0.5) * 2000;
        this.y = (Math.random() - 0.5) * 2000;
        this.z = Math.random() * 2000;
        this.radius = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5 ? '#00f2fe' : '#9b51e0';
      }

      update(speedZ, rotationX, rotationY) {
        // Move towards viewer on Z-axis
        this.z -= speedZ;
        if (this.z <= 0) {
          this.reset();
          this.z = 2000;
        }

        // Apply rotation on X-axis (Pitch)
        const cosX = Math.cos(rotationX);
        const sinX = Math.sin(rotationX);
        let y1 = this.y * cosX - this.z * sinX;
        let z1 = this.z * cosX + this.y * sinX;

        // Apply rotation on Y-axis (Yaw)
        const cosY = Math.cos(rotationY);
        const sinY = Math.sin(rotationY);
        let x2 = this.x * cosY - z1 * sinY;
        let z2 = z1 * cosY + this.x * sinY;

        this.x = x2;
        this.y = y1;
        this.z = z2;
      }

      draw() {
        // Perspective projection
        const fov = 800; // Field of view
        const scale = fov / (fov + this.z);
        const projX = this.x * scale + width / 2;
        const projY = this.y * scale + height / 2;

        if (projX >= 0 && projX <= width && projY >= 0 && projY <= height) {
          ctx.beginPath();
          ctx.arc(projX, projY, this.radius * scale * 2, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.globalAlpha = Math.min(1, scale * 1.5);
          ctx.fill();
        }
      }
    }

    const particleCount = 50;
    const particles = Array.from({ length: particleCount }, () => new Particle());

    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let rotationX = 0;
    let rotationY = 0;

    const handleMouseMove = (e) => {
      // Normalize mouse coords (-0.5 to 0.5)
      mouseX = (e.clientX / window.innerWidth) - 0.5;
      mouseY = (e.clientY / window.innerHeight) - 0.5;
      targetRotationY = mouseX * 0.05;
      targetRotationX = -mouseY * 0.05;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      // Clear with very slight transparency to leave light star trails
      ctx.fillStyle = 'rgba(10, 10, 22, 0.2)';
      ctx.fillRect(0, 0, width, height);

      // Lerp rotation towards mouse targets
      rotationX += (targetRotationX - rotationX) * 0.05;
      rotationY += (targetRotationY - rotationY) * 0.05;

      // Draw background ambient grid lines
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.015)';
      ctx.lineWidth = 1;
      const step = 80;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.update(1.5, rotationX, rotationY);
        p.draw();
      });

      // Draw lines between close particles to make a constellation network
      ctx.globalAlpha = 0.15;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          
          // Calculate distance in 3D
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 180) {
            const fov = 800;
            const scale1 = fov / (fov + p1.z);
            const scale2 = fov / (fov + p2.z);
            const x1 = p1.x * scale1 + width / 2;
            const y1 = p1.y * scale1 + height / 2;
            const x2 = p2.x * scale2 + width / 2;
            const y2 = p2.y * scale2 + height / 2;

            if (x1 >= 0 && x1 <= width && y1 >= 0 && y1 <= height &&
                x2 >= 0 && x2 <= width && y2 >= 0 && y2 <= height) {
              const grad = ctx.createLinearGradient(x1, y1, x2, y2);
              grad.addColorStop(0, p1.color);
              grad.addColorStop(1, p2.color);
              ctx.strokeStyle = grad;
              ctx.lineWidth = (1 - dist / 180) * 0.8;
              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              ctx.stroke();
            }
          }
        }
      }
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -2,
        pointerEvents: 'none',
      }}
    />
  );
}
