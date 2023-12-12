import { useRef, useState } from "react";
import {
  DepthOfField,
  Bloom,
  Noise,
  ToneMapping,
  Vignette,
  EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { button, useControls } from "leva";

const PostProcessingEffects = () => {
  const [isNoiseEffectActive, setIsNoiseEffectActive] = useState(false);

  const vignetteUI = useControls("vignette", {
    eskil: { value: false },
    offset: { value: 0.3, min: 0, max: 1, step: 0.01 },
    darkness: { value: 0.9, min: 0, max: 1, step: 0.01 },
    blendFunction: {
      options: {
        NORMAL: BlendFunction.NORMAL,
        COLOR_BURN: BlendFunction.COLOR_BURN,
        COLOR_DODGE: BlendFunction.COLOR_DODGE,
      },
    },
  });

  const noiseUI = useControls("noise", {
    ON: button(() => setIsNoiseEffectActive(true)),
    OFF: button(() => setIsNoiseEffectActive(false)),
    blendMode: {
      options: {
        SOFT_LIGHT: BlendFunction.SOFT_LIGHT,
        OVERLAY: BlendFunction.OVERLAY,
        SCREEN: BlendFunction.SCREEN,
        AVERAGE: BlendFunction.AVERAGE,
      },
    },
  });

  const { focusDistance, focalLength, bokehScale } = useControls("depth of field", {
    focusDistance: { value: 0.92, min: 0, max: 1, step: 0.001 },
    focalLength: { value: 0.92, min: 0, max: 1, step: 0.001 },
    bokehScale: { value: 2, min: 0, max: 10, step: 0.01 },
  });

  return (
    <EffectComposer disableNormalPass>
      <Vignette
        eskil={vignetteUI.eskil}
        offset={vignetteUI.offset}
        darkness={vignetteUI.darkness}
        blendFunction={vignetteUI.blendFunction}
      />

      {isNoiseEffectActive && (
        <Noise premultiply blendFunction={noiseUI.blendMode} />
      )}

      <Bloom mipmapBlur intensity={0.1} luminanceThreshold={0} />

      <DepthOfField
        focusDistance={focusDistance}
        focalLength={focalLength}
        bokehScale={bokehScale}
      />

      <ToneMapping />
    </EffectComposer>
  );
};

export default PostProcessingEffects;
