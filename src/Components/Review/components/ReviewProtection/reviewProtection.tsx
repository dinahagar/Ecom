import { RootState } from "../../../../Store/store";
import { useSelector } from "react-redux";
import {
  SectionP,
} from "../ReviewItems/reviewItems.style";
import { useGetAllProtectionApiQuery } from "../../../../Services/protection";
import { CameraItem } from "../../../../Interfaces/types";
import SharedReviewItems from "../SharedReviewItems/sharedReviewItems";

const ReviewProtection = () => {
  const { data: protectionData } = useGetAllProtectionApiQuery({});
  const quantities = useSelector((state: RootState) => state.camera.quantities);

  const reviewItems = protectionData?.items?.filter(
    (item: CameraItem) => (quantities[item.id] ?? 0) > 0,
  );

  return (
    <div>
      {reviewItems?.length > 0 && (
        <>
          <SectionP>{protectionData?.section}</SectionP>
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

export default ReviewProtection;
