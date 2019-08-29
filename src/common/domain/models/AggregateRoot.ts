import { AggregateRoot as BaseAggregateRoot } from "@nestjs/cqrs";

import { Id } from "./Id";

export class AggregateRoot extends BaseAggregateRoot {
  private _id: Id;

  protected constructor(id: Id) {
    super();

    this._id = id;
  }

  get id(): Id {
    return this._id;
  }

  isEqual(other: AggregateRoot): boolean {
    return this._id.equals(other.id);
  }
}
