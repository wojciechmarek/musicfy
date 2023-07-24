export class SpotifySong {
  constructor(
    public id: string,
    public title: string,
    public artist: string,
    public album: string,
    public duration: number,
    public image: string,
  ) {}
}
