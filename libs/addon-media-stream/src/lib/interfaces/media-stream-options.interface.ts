export interface MediaStreamOptions {
  enterWithAudio?: boolean;
  enterWithVideo?: boolean;

  video?: {
    objectFit?: 'contain' | 'fill' | 'cover' | 'scale-down' | 'none';
    width?: number;
    height?: number;
    framesColor?: string;
  };

  snapshot?: {
    animate?: boolean;
    audioSrc?: string;
  };

  controls?: {
    showOutside?: boolean;
    position?: 'left' | 'top' | 'right' | 'bottom';

    showAudio?: boolean;
    audioText?: string;
    audioHint?: string;

    showVideo?: boolean;
    videoText?: string;
    videoHint?: string;

    showSnapshot?: boolean;
    snapshotText?: string;
    snapshotHint?: string;
  };
}
