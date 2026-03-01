import { AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1, Scene2, Scene3, Scene4, Scene5, Scene6 } from './video_scenes';

const SCENE_DURATIONS = {
  scene1: 12000,
  scene2: 13000,
  scene3: 25000,
  scene4: 7000,
  scene5: 8000,
  scene6: 7000,
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({
    durations: SCENE_DURATIONS,
  });

  return (
    <div className="w-full h-screen overflow-hidden relative bg-white text-brand-text-dark font-body">
      <AnimatePresence mode="wait">
        {currentScene === 0 && <Scene1 key="scene1" />}
        {currentScene === 1 && <Scene2 key="scene2" />}
        {currentScene === 2 && <Scene3 key="scene3" />}
        {currentScene === 3 && <Scene4 key="scene4" />}
        {currentScene === 4 && <Scene5 key="scene5" />}
        {currentScene === 5 && <Scene6 key="scene6" />}
      </AnimatePresence>
    </div>
  );
}
