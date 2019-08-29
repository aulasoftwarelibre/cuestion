import { version } from "uuid-validate";

import { InvalidIdException } from "../exceptions/InvalidIdException";
import { ValueObject } from "./ValueObject";

interface Props {
  readonly id: string;
}

export class Id extends ValueObject<Props> {
  private constructor(props: Props) {
    super(props);
  }

  public static fromUuid(uuid: string): Id {
    if (version(uuid) !== 4) {
      throw InvalidIdException.withUuid(uuid);
    }

    return new Id({ id: uuid });
  }
}
