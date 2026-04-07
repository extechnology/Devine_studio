import { useQuery } from "@tanstack/react-query";
import getDirectorProfiles from "../services/about/getDirectorProfiles";
import type { DirectorProfile } from "../services/about/types.about";

const useDirectorProfiles = () =>
    useQuery<DirectorProfile[]>({
        queryKey: ["director-profiles"],
        queryFn: getDirectorProfiles,
    });

export default useDirectorProfiles;