import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';
import { unstable_noStore } from 'next/cache';

// export const revalidate = 5; used to set file wide revalidation for fetch
// export const dynamic = "force-dynamic" used to set file wide "no-store" for caching on fetch

export default async function MessagesPage() {
  // unstable_noStore() used to enable no-store for current function or module
  // const response = await fetch('http://localhost:8080/messages' {
  //   next: { tags: ["msg"] },
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
