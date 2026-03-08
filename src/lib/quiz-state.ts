import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type QuizState = {
  gender: string | null;
  attribution: string | null;
  frequency: string | null;
  firstExposureAge: string | null;
  escalation: string | null;
  arousalDependency: string | null;
  emotionalCoping: string | null;
  stressTrigger: string | null;
  boredomTrigger: string | null;
  financialSpend: string | null;
  name: string;
  age: string;
  symptoms: string[];
  goals: string[];
  email: string;
  score: number | null;
};

type QuizActions = {
  setField: <K extends keyof QuizState>(key: K, value: QuizState[K]) => void;
  toggleArrayItem: (
    key: "symptoms" | "goals",
    value: string,
  ) => void;
  computeScore: () => void;
  reset: () => void;
};

const initialState: QuizState = {
  gender: null,
  attribution: null,
  frequency: null,
  firstExposureAge: null,
  escalation: null,
  arousalDependency: null,
  emotionalCoping: null,
  stressTrigger: null,
  boredomTrigger: null,
  financialSpend: null,
  name: "",
  age: "",
  symptoms: [],
  goals: [],
  email: "",
  score: null,
};

export const useQuizStore = create<QuizState & QuizActions>()(
  persist(
    (set, get) => ({
      ...initialState,

      setField: (key, value) => set({ [key]: value }),

      toggleArrayItem: (key, value) => {
        const current = get()[key];
        const next = current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value];
        set({ [key]: next });
      },

      computeScore: () => {
        const state = get();
        let score = 0;
        let maxScore = 0;

        const freqMap: Record<string, number> = {
          "More than once a day": 4,
          "Once a day": 3,
          "A few times a week": 2,
          "Less than once a week": 1,
        };
        if (state.frequency) {
          score += (freqMap[state.frequency] ?? 0) * 5;
          maxScore += 20;
        }

        const scaleMap: Record<string, number> = {
          Frequently: 3,
          Occasionally: 2,
          "Rarely or never": 1,
        };

        const scaleFields = [
          state.arousalDependency,
          state.emotionalCoping,
          state.stressTrigger,
          state.boredomTrigger,
        ] as const;

        for (const field of scaleFields) {
          if (field) {
            score += (scaleMap[field] ?? 0) * 4;
            maxScore += 12;
          }
        }

        if (state.escalation === "Yes") {
          score += 10;
        }
        maxScore += 10;

        if (state.financialSpend === "Yes") {
          score += 10;
        }
        maxScore += 10;

        const ageMap: Record<string, number> = {
          "12 or younger": 4,
          "13 to 16": 3,
          "17 to 24": 2,
          "25 or older": 1,
        };
        if (state.firstExposureAge) {
          score += (ageMap[state.firstExposureAge] ?? 0) * 2;
          maxScore += 8;
        }

        const percentage =
          maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
        set({ score: Math.min(percentage, 100) });
      },

      reset: () => set(initialState),
    }),
    {
      name: "quittr-quiz",
      storage: createJSONStorage(() =>
        typeof window !== "undefined"
          ? sessionStorage
          : {
              getItem: () => null,
              setItem: () => {},
              removeItem: () => {},
            },
      ),
    },
  ),
);
