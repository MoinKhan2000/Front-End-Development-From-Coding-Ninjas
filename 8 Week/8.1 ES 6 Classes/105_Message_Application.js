//Do not alter the starter code.
function main() {
    class Message {
        constructor(sender, receiver, messageContent) {
            this.sender = sender;
            this.receiver = receiver;
            this.messageContent = messageContent;
        }

        static totalMessages = 0;
        static status = false;

        static recordMessage() {
            Message.totalMessages++;
        }

        static changeStatus() {
            Message.status = !Message.status;
            const statusText = Message.status ? 'online' : 'offline';
            console.log(`The status has been changed to ${statusText}`);
        }

        sendMessage() {
            Message.recordMessage();
            console.log(`The message '${this.messageContent}' has been sent from '${this.sender}' to '${this.receiver}'`);
        }

        displayDetails() {
            console.log(`Sender: ${this.sender}`);
            console.log(`Receiver: ${this.receiver}`);
            console.log(`Message: ${this.messageContent}`);
            console.log(`Status: ${Message.status ? 'online' : 'offline'}`);
            console.log(`Total Messages: ${Message.totalMessages}`);
        }
    }


    return Message;
}
