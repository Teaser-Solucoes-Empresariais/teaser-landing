const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const apiEndpoints = {
  contact: {
    contact: () => `${baseUrl}/contact`
  }
}
