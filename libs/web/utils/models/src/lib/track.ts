export class Track {
  constructor(
    public id: number,
    public title: string,
    public artist: string,
    public coverUrl: string,
    public duration: number
  ) {}
}