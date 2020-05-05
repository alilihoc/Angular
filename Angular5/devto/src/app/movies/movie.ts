export class Movie{
  id                  : number;
  title               : string;
  director            : string;
  actors              : string;
  type                : string;
  release             : Date;
  note                : number;
  content             : string;
  link                : string;

    constructor(id      = undefined,
                title   = undefined,
                director= undefined,
                actors  = undefined,
                type    = undefined,
                release = undefined,
                note    = undefined,
                content = undefined,
                link    = undefined){
      this.id      = id;
      this.title   = title;
      this.director= director;
      this.type    = type;
      this.actors  = actors;
      this.release = release;
      this.note    = note;
      this.content = content;
      this.link    = link
    }

  }
