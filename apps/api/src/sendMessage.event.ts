export class SendMessageEvent {
  constructor(
    public readonly message: string,
    public readonly sender: string,
    public readonly receiver: string,
  ) {}
}
