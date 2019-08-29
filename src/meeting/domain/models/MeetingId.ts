import { v4 as uuid } from "uuid";
import { version } from "uuid-validate";

import { ValueObject } from "../../../common/domain/models/ValueObject";

interface Props {
  value: string;
}

export class MeetingId extends ValueObject<Props> {
  static generate(): MeetingId {
    return new MeetingId({ value: uuid() });
  }

  public static fromString(id: string): MeetingId {
    if (version(id) !== 4) {
      throw new Error('Invalid Id');
    }

    return new MeetingId({ value: id });
  }

  get value(): string {
    return this.props.value;
  }
}
