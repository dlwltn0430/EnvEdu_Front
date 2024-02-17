import { create } from "zustand";
import { ClassRoomDataConverterAdapter } from "../utils/ClassRoomDataConverterAdapter";

export const useEClassStore = create((set, get) => ({
  eClass: [[]],
  eClassData: [[]],

  appendActivity: (pageNumber, activity, classroomType) =>
    set(state => {
      const newEclass = get().eClass.map(page => [...page]);
      newEclass[pageNumber].push(activity);

      const dataAdapter = new ClassRoomDataConverterAdapter();
      const eclassData = dataAdapter.convert(classroomType);

      const newEclassData = get().eClassData.map(a => [...a]);
      newEclassData[pageNumber].push(eclassData);

      return {
        ...state,
        eClass: newEclass,
        eClassData: newEclassData,
      };
    }),

  appendPage: () =>
    set(state => {
      const newEclass = get().eClass.map(page => [...page]);
      newEclass.push([]);

      const newEclassData = get().eClassData.map(a => [...a]);
      newEclassData.push([]);

      return {
        ...state,
        eClass: newEclass,
        eClassData: newEclassData,
      };
    }),
}));
