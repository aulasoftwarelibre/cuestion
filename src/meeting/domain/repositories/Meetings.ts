import { Meeting } from "../models/Meeting";
import { MeetingId } from "../models/MeetingId";

export interface Meetings {
  get(meetingId: MeetingId): Promise<Meeting>;
  find(meetingId: MeetingId): Promise<Meeting> | null;
  save(meeting: Meeting): void;
  nextIdentity(): MeetingId;
}
