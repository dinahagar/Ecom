export interface Color {
  id: number;
  img: string;
  name: string;
}

export interface CameraItem {
  id: number;
  title: string;
  desc: string;
  img: string;
  oldPrice: string;
  newPrice: string;
  badge: string;
  colors: Color[];
}

export interface CamerasData {
  section: string;
  items: CameraItem[];
}

export interface PlanItem {
  id: number;
  type: string;
  oldPrice: string;
  newPrice: string;
}

export interface PlanData {
  section: string;
  items: PlanItem[];
}

export interface Calculate {
    id: number;
    oldPrice: string;
    newPrice: string;
}
