export interface MediaStreamOptions {
  enterWithAudio?: boolean;
  enterWithVideo?: boolean;

  controls: {
    showOutside?: boolean;

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
