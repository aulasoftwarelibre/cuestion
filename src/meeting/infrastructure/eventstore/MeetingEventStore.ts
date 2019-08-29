import { Injectable } from "@nestjs/common";

import { EventStore } from "../../../core/eventstore/eventstore";
import { Meeting } from "../../domain/models/Meeting";
import { MeetingId } from "../../domain/models/MeetingId";
import { Meetings } from "../../domain/repositories/Meetings";

@Injectable()
export class MeetingEventStore implements Meetings {
  constructor(private readonly eventStore: EventStore) {}

  async get(meetingId: MeetingId): Promise<Meeting> {
    return this.eventStore.read(Meeting, meetingId.value);
  }

  async find(meetingId: MeetingId): Promise<Meeting> | null {
    return this.eventStore.read(Meeting, meetingId.value);
  }

  save(meeting: Meeting): void {
    meeting.commit();
  }

  nextIdentity(): MeetingId {
    return MeetingId.generate();
  }
}
