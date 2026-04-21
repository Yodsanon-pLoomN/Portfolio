type EducationItem = {
  period: string;
  school: { th: string; en: string };
  degree: { th: string; en: string };
  detail: { th: string; en: string };
};

export const educationList: EducationItem[] = [
{
    period: "2566 - ปัจจุบัน",
    school: {
      th: "มหาวิทยาลัยขอนแก่น – วิทยาลัยการคอมพิวเตอร์",
      en: "Khon Kaen University – College of Computing",
    },
    degree: {
      th: "วิทยาการคอมพิวเตอร์",
      en: "Computer Science",
    },
    detail: {
      th: "เกรดเฉลี่ยสะสม 3.47",
      en: "Cumulative GPA 3.47",
    },
  },
  {
    period: "2563 - 2565",
    school: {
      th: "โรงเรียนภูเขียว มัธยมศึกษาตอนปลาย",
      en: "Phu Khieo School",
    },
    degree: {
      th: "ห้องเรียนพิเศษวิทยาศาสตร์และคณิตศาสตร์",
      en: "Upper secondary education, special science and mathematics program",
    },
    detail: {
      th: "GPAX 3.71",
      en: "GPAX 3.71",
    },
  },
  {
    period: "2560 - 2562",
    school: {
      th: "โรงเรียนภูเขียว มัธยมศึกษาตอนต้น",
      en: "Phu Khieo School",
    },
    degree: {
      th: " ห้องเรียนพิเศษคณิตศาสตร์",
      en: "Lower secondary education, special mathematics program",
    },
    detail: {
      th: "GPAX 3.64",
      en: "GPAX 3.64",
    },
  },

];
