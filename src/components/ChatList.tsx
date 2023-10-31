
// Sample data for chat conversations
const conversations = [
   {
     id: 1,
     convoName: 'Alice',
     lastMessage: 'Hello there!',
     lastMessageSentAt: '2023-10-18T14:30:00Z',
   },
   {
     id: 2,
     convoName: 'Bob',
     lastMessage: 'Hi, how are you?',
     lastMessageSentAt: '2023-10-18T15:45:00Z',
  },
  {
    id: 3,
    convoName: 'Bob',
    lastMessage: 'Hi, how are you?',
    lastMessageSentAt: '2023-10-18T15:45:00Z',
  },
   // Add more conversations as needed
 ];
 
 export const ChatList = () => {
   return (
     <aside className="p-4 flex-auto w-1/5">
       <h1 className="text-2xl font-semibold mb-4">Chat Conversations</h1>
       <div className="grid gap-4">
         {conversations.map((conversation) => (
           <div
             key={conversation.id}
             className="p-4 bg-white shadow-md rounded-lg"
           >
             <h2 className="text-lg font-semibold">{conversation.convoName}</h2>
             <p className="text-gray-600 text-sm">
               {conversation.lastMessage}
             </p>
             <p className="text-gray-400 text-xs">
               {formatDate(conversation.lastMessageSentAt)}
             </p>
           </div>
         ))}
       </div>
     </aside>
   );
 };
 
 // Function to format the date as needed (you can use a library like date-fns)
 function formatDate(dateString: string) {
 //   const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
   return new Date(dateString).toLocaleDateString(undefined,{ year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
 }
 
 