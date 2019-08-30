import { ValueObject } from "../../../common/domain/models/ValueObject";

interface Props {
  value: string;
}

export class MeetingCode extends ValueObject<Props> {
  public static fromString(code: string): MeetingCode {
    if (code.length === 0) {
      throw new Error('Invalid code');
    }

    return new MeetingCode({ value: code });
  }

  get value(): string {
    return this.props.value;
  }
}
