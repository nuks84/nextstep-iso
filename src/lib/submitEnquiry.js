export async function submitEnquiry(payload) {
  await new Promise(resolve => setTimeout(resolve, 900))
  console.info('Enquiry submitted', payload)
  return { ok: true }
}
