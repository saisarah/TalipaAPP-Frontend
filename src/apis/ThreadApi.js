import Http from "@/helpers/Http"

export const fetchThreads = async() => {
  const { data } = await Http.get('/threads')
  return data
}

export const fetchThread = async(thread_id) => {
  const { data } = await Http.get(`/threads/${thread_id}`)
  return data
}

export const fetchThreadMessages = async(thread_id) => {
  const { data } = await Http.get(`/threads/${thread_id}/messages`)
  return data
}

export const sendMessage = async (thread_id, content) => {
  const  { data } = await Http.post(`/threads/${thread_id}/messages`, { content })
  return data
}