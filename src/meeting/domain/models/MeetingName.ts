import { ValueObject } from "../../../common/domain/models/ValueObject";

interface Props {
  value: string;
}

export class MeetingName extends ValueObject<Props> {
  public static fromString(name: string): MeetingName {
    if (name.length === 0) {
      throw new Error('Invalid name');
    }

    return new MeetingName({ value: name });
  }

  get value(): string {
    return this.props.value;
  }
}
