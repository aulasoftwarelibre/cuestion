export class InvalidIdException extends Error {
  public static withUuid(uuid: string): InvalidIdException {
    return new InvalidIdException(`The uuid "${uuid}" is not a valid id.`);
  }
}
