import Http from "@/helpers/Http"

export const fetchThreads = async() => {
  const { data } = await Http.get('/threads')
  return data
}

export const fetchThread = async(thread_id) => {
  const { data } = await Http.get(`/threads/${thread_id}`)
  return data
}
fetchThread.key = (thread_id) => ['threads', parseInt(thread_id)]

export const readThread = async (thread_id) => {
  const { data } = await Http.patch(`/threads/${thread_id}/read`);
  return data
}

export const fetchThreadMessages = async(thread_id) => {
  const { data } = await Http.get(`/threads/${thread_id}/messages`)
  return data
}
fetchThreadMessages.key = (thread_id) => ['threads', parseInt(thread_id), 'messages']

export const sendMessage = async (thread_id, content) => {
  const  { data } = await Http.post(`/threads/${thread_id}/messages`, { content })
  return data
}