import { ICommand } from "@nestjs/cqrs";

export class CreateMeetingCommand implements ICommand {
  constructor(
    public readonly meetingId: string,
    public readonly name: string,
    public readonly code: string,
  ) {}
}
