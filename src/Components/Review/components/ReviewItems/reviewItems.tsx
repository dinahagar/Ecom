import { RootState } from "../../../../Store/store";
import { useSelector } from "react-redux";
import { useGetAllCamerasQuery } from "../../../../Services/camera";
import { SectionP } from "./reviewItems.style";
import { CameraItem } from "../../../../Interfaces/types";
import SharedReviewItems from "../SharedReviewItems/sharedReviewItems";

const ReviewItems = () => {
  const { data } = useGetAllCamerasQuery({});
  const quantities = useSelector((state: RootState) => state.camera.quantities);

  const reviewItems = data?.items?.filter(
    (item: CameraItem) => (quantities[item.id] ?? 0) > 0,
  );
  
  return (
    <div>
      {reviewItems?.length > 0 && (
        <>
          <SectionP>{data?.section}</SectionP>
        </>
      )}
      {reviewItems?.map((item: CameraItem) => {
        return (
          <SharedReviewItems key={item.id} item={item} quantities={quantities}/>
        );
      })}
    </div>
  );
};

export default ReviewItems;
