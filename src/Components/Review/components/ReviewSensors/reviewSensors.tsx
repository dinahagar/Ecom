import { useGetAllSensorsQuery } from "../../../../Services/sensors";
import { RootState } from "../../../../Store/store";
import { useSelector } from "react-redux";
import {
  SectionP,
} from "../ReviewItems/reviewItems.style";
import { CameraItem } from "../../../../Interfaces/types";
import SharedReviewItems from "../SharedReviewItems/sharedReviewItems";

const ReviewSensors = () => {
  const { data: sensorsData } = useGetAllSensorsQuery({});
  const quantities = useSelector((state: RootState) => state.camera.quantities);

  const reviewItems = sensorsData?.items?.filter(
    (item: CameraItem) => (quantities[item.id] ?? 0) > 0,
  );

  return (
    <div>
      {reviewItems?.length > 0 && (
        <>
          <SectionP>{sensorsData?.section}</SectionP>
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

export default ReviewSensors;
