import { DomainEvent } from "../../../common/domain/models/DomainEvent";

export class MeetingWasCreated implements DomainEvent {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly code: string,
  ) {}
}
