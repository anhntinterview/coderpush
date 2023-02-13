import { Dictionary, EntityId, EntityState } from "@reduxjs/toolkit";
import { STATUS } from "template/constant/redux";

export class RTKQStateItemDTO<T> {
  readonly [name:string]: T
}

export class RTKQStateDTO<T> {
  readonly list!: Array<T>;
  readonly count!: number;
}

export class StateDTO<T> {
  readonly data!: { list: Array<T>; count: number };
  readonly status!: STATUS;
  readonly error?: any;
}

export abstract class EntityStateDTO<T> implements EntityState<T> {
  readonly ids!: EntityId[];
  readonly entities!: Dictionary<T>;
}
