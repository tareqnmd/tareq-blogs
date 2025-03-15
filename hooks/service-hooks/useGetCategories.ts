import { ServiceQueryKeyEnum } from '@/lib/enum';
import { getCategories } from '@/service';
import { useQuery } from '@tanstack/react-query';

export const useGetCategories = () => {
	const query = useQuery({
		queryKey: [ServiceQueryKeyEnum.GET_CATEGORIES],
		queryFn: getCategories,
	});
	return query;
};
