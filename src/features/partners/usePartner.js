import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getTwitchInfo } from "../../services/apiTwitchInfo";

const usePartner = ({ user = {} }) => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  const {
    isLoading,
    data: data = {},
    error,
  } = useQuery({
    queryKey: ["partner", isEnglish ? "en" : "pt", user.username],
    queryFn: async () => getTwitchInfo({ user }),
    retry: false,
  });
  return { isLoading, data, error };
};

export { usePartner };
