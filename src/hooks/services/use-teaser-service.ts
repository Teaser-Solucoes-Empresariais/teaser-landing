import { apiEndpoints } from "@/utils/apiEndpoints"
import useApi from "@/hooks/services/use-api"
import type { Contato } from "@/utils/types/contato"

export function useTeaserService() {
  const api = useApi;

  const contactUs = async (body: Contato) => {
    return await api(apiEndpoints.contact.contact(), {
      method: "POST",
      data: body
    })
  }

  return {
    contactUs,
  }
}
