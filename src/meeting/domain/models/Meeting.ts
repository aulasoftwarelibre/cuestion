import { AggregateRoot } from "@nestjs/cqrs";

import { MeetingWasCreated } from "../events/MeetingWasCreated";
import { MeetingCode } from "./MeetingCode";
import { MeetingId } from "./MeetingId";
import { MeetingName } from "./MeetingName";

export class Meeting extends AggregateRoot {
  private _id: MeetingId;
  private _name: MeetingName;
  private _code: MeetingCode;

  public static add(
    id: MeetingId,
    name: MeetingName,
    code: MeetingCode,
  ): Meeting {
    const meeting = new Meeting();

    meeting.apply(new MeetingWasCreated(id.value, name.value, code.value));

    return meeting;
  }

  private onMeetingWasCreated(event: MeetingWasCreated) {
    this._id = MeetingId.fromString(event.id);
    this._name = MeetingName.fromString(event.name);
    this._code = MeetingCode.fromString(event.code);
  }
}
