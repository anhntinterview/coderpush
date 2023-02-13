import { EntityStateDTO, StateDTO } from "./redux.dto";


export class PostDTO {
  readonly id!: string;
  readonly slug!: string;
  title!: string;
  body!: string;
}

export class PostRO {
  title!: string;
  body!: string;
}

export class PostStateDTO extends StateDTO<PostDTO> {}

export class PostEntityStateDTO extends EntityStateDTO<PostDTO> {}


