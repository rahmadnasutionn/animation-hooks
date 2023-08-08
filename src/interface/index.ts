

export interface HooksType {
  title: string;
  description: string;
  usage: any;
  hook: any;
};

export interface VariansType {
  name: string;
  preview: any;
  code: any;
};

export enum TOAST_TYPE {
  success = "success",
  warning = "warning",
  error = "error",
  info = "info",
};

export enum DEFAULT_MESSAGE {
  success = "Success",
  error = "Error",
  warning = "Warning",
  info = "Info"
}

export type ToastType = {
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  description?: string;
  backgroundColor?: string;
  textColor?: string;
  duration?: number;
}

export type ParticlePhysics = {
  x: number;
  y: number;
  z: number;
  wobble: number;
  velocity: number;
  angle2D: number;
  angle3D: number;
  tiltAngle: number;
  differentiator: number;
};

export interface Particle {
  element: HTMLSpanElement;
  physics: ParticlePhysics;
}

export type Particles = Particle[];

export type AnimateFunctionArgs = {
  root: Element;
  particles: Particles;
  decay: number;
  lifetime: number;
  updateParticle: (particle: Particle, progress: number, decay: number) => void;
  onFinish: () => void;
};

export type AnimateFunction = (config: AnimateFunctionArgs) => void;

export type ConfettiConfig = {
  lifetime?: number;
  angle?: number;
  decay?: number;
  spread?: number;
  startVelocity?: number;
  elementCount?: number;
  elementSize?: number;
  zIndex?: number;
  position?: string;
  colors?: string[];
  onAnimationComplete?: () => void;
};

export interface ConfettiConfigs {
  confetti: ConfettiConfig;
};

export type ConfettiFunction = {
  confettiFn: () => void;
  isAnimating: boolean;
};

export type ConfettiType = keyof ConfettiConfigs;

export type UseConfettiType = <T extends ConfettiType>(
  id: string,
  type: T,
  config?: ConfettiConfigs[T]
) => ConfettiFunction