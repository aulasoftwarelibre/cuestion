import { EventPublisher, ICommandHandler } from "@nestjs/cqrs";

import { Meeting } from "../../domain/models/Meeting";
import { MeetingCode } from "../../domain/models/MeetingCode";
import { MeetingId } from "../../domain/models/MeetingId";
import { MeetingName } from "../../domain/models/MeetingName";
import { MeetingEventStore } from "../../infrastructure/eventstore/MeetingEventStore";
import { CreateMeetingCommand } from "../command/CreateMeetingCommand";

export class CreateMeetingHandler
  implements ICommandHandler<CreateMeetingCommand> {
  constructor(
    private readonly eventStore: MeetingEventStore,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateMeetingCommand) {
    const meetingId = MeetingId.fromString(command.meetingId);
    const name = MeetingName.fromString(command.name);
    const code = MeetingCode.fromString(command.code);

    const instance = await this.eventStore.find(meetingId);

    if (instance instanceof Meeting) {
      throw new Error('Id duplicado');
    }

    const meeting = this.publisher.mergeObjectContext(
      Meeting.add(meetingId, name, code),
    );

    this.eventStore.save(meeting);
  }
}
