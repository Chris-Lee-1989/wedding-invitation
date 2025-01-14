import { onApiErrorModal } from "@/components/layout/CommonModal";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { usePathname } from "next/navigation";

export const useJandi = () => {
    const pathname = usePathname();
    const action = useMutation({
        mutationFn: async (params: {type: "error"|'info', message: string}) => {
            const res = await axios.post('/api/jandi', {...params, pathname});
            return res.data;
        },
        onSuccess(data, variables, context) {
            console.info(data);
        },
        onError: onApiErrorModal,
    });
    return action;
}