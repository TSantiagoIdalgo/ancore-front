import * as libs from '../lib/libs';
import { GET_ALL_BANNERS, Banners, Banner } from '../service/query/get-all-banners';

export const useGetBanners = () => {
  const [bannerIndex, setBannerIndex] = libs.useState<number>(0);
  const { data, error, loading } = libs.useQuery<Banners>(GET_ALL_BANNERS);
  
  libs.useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (!loading && !error && data && data.getAllBanners.length > 0) {
      intervalId = setInterval(() => {
        setBannerIndex((prevIndex) =>
          prevIndex === data.getAllBanners.length - 1 ? 0 : prevIndex + 1
        );
      }, 30000);
    }
  
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [data, error, loading]);

  if (error) return error.message;
  if (loading || !data || data.getAllBanners.length === 0) return null;
  
  const banner: Banner = data.getAllBanners[bannerIndex];
  return banner;
};