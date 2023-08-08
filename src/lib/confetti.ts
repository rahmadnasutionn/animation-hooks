import { ConfettiConfig, Particle } from "~/interface";
import { animate, generatePhysics, getRandomInteger } from "./utils";

const defaultColors: [string, string, string, string, string] = ['#A45BF1', '#25C6F6', '#72F753', '#F76C88', '#F5F770'];
const factors = [-0.6, -0.3, 0, 0.3, 0.6];

function createElements(
  root: Element,
  elementCount: number,
  elementSize: number,
  zIndex: number,
  position: string,
  colors: string[]
) {
  return Array.from({ length: elementCount }).map((_, index) => {
    const element = document.createElement('span');
    element.style.backgroundColor = colors[index % colors.length];
    element.style.width = elementSize + 'px';
    element.style.height = elementSize + 'px';
    element.style.position = position;
    element.style.zIndex = `${zIndex}`;
    root.appendChild(element);

    return {
      element,
      differentiator: getRandomInteger(0, factors.length),
    }
  })
};

export function updateParticle(
  particle: Particle,
  progress: number,
  decay: number,
) {
  const {
    x,
    y,
    angle2D,
    angle3D,
    differentiator,
    tiltAngle,
    velocity,
    wobble
  } = particle.physics;

  particle.physics.x += Math.cos(angle2D) * velocity;
  particle.physics.y += Math.sin(angle2D) * velocity;
  particle.physics.z += Math.sin(angle3D) * velocity;
  particle.physics.wobble += 0.05;
  particle.physics.velocity *= decay;
  particle.physics.y += 3.5;
  particle.physics.tiltAngle += 0.15;

  const wobbleX = 
    x + (factors[differentiator] * progress * wobble * wobble +
    20 * (differentiator % 2 ? Math.sin(wobble / 4) : Math.cos(wobble / 4)));

  const wobbleY = y + 5 * Math.sin(wobble);

  particle.element.style.transform = 
    `translate3d(${wobbleX}px, ${wobbleY}px, 0) rotate3d(1, 1, 1, ${differentiator % 2 ? tiltAngle : -1 * tiltAngle}rad)`;

  particle.element.style.scale = `${1 - 0.2 * progress}`;

  if (progress > 0.5) {
    particle.element.style.opacity = `${2 - 2 * progress}`;
  }
};

export function confetti(
  root: Element,
  internalAnimationCallback: () => void,
  config?: ConfettiConfig,
) {
  const options = config || {};

  const {
    angle = 90,
    colors = defaultColors,
    decay = 0.94,
    elementCount = 50,
    elementSize = 10,
    lifetime = 500,
    onAnimationComplete,
    position = 'fixed',
    spread = 45,
    startVelocity = 35,
    zIndex = 0,
  } = options;

  const spanElements = createElements(
    root,
    elementCount,
    elementSize,
    zIndex,
    position,
    colors,
  );

  const particles = spanElements.map(({ element, differentiator }) => ({
    element,
    physics: generatePhysics(angle, spread, startVelocity, differentiator),
  }));

  const onFinish = () => {
    if (typeof onAnimationComplete === 'function') {
      onAnimationComplete();
    }

    internalAnimationCallback();
  };

  animate({
    root,
    decay,
    particles,
    lifetime,
    updateParticle,
    onFinish,
  })
}