"use client";

import { useMemo, useState } from "react";
import { QuestionStep, questionSteps } from "../questions";
import { PredictScreen } from "./PredictScreen";
import { RevealScreen } from "./RevealScreen";
import { SummaryScreen } from "./SummaryScreen";

type Mode = "predict" | "reveal" | "summary";

export interface AnswerRecord {
  stepId: QuestionStep["id"];
  value: number;
}

export function QuestionFlow() {
  const [mode, setMode] = useState<Mode>("predict");
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const currentStep: QuestionStep | undefined = questionSteps[stepIndex];

  const currentAnswer = useMemo(() => {
    if (!currentStep) return undefined;
    return answers.find((a) => a.stepId === currentStep.id);
  }, [answers, currentStep]);

  if (!currentStep && mode !== "summary") {
    return null;
  }

  const isLastStep = stepIndex === questionSteps.length - 1;

  const handleAnswerSubmit = (value: number) => {
    if (!currentStep) return;
    setAnswers((prev) => {
      const existingIndex = prev.findIndex((a) => a.stepId === currentStep.id);
      if (existingIndex >= 0) {
        const clone = [...prev];
        clone[existingIndex] = { stepId: currentStep.id, value };
        return clone;
      }
      return [...prev, { stepId: currentStep.id, value }];
    });
    setMode("reveal");
  };

  const handleNextFromReveal = () => {
    if (isLastStep) {
      setMode("summary");
      return;
    }
    setStepIndex((prev) => prev + 1);
    setMode("predict");
  };

  const handleRestart = () => {
    setAnswers([]);
    setStepIndex(0);
    setMode("predict");
  };

  if (mode === "summary") {
    return (
      <SummaryScreen
        steps={questionSteps}
        answers={answers}
        onRestart={handleRestart}
      />
    );
  }

  if (!currentStep) {
    return null;
  }

  if (mode === "predict") {
    return (
      <PredictScreen
        step={currentStep}
        onSubmit={handleAnswerSubmit}
        initialValue={currentAnswer?.value}
      />
    );
  }

  return (
    <RevealScreen
      step={currentStep}
      answerValue={currentAnswer?.value ?? 0}
      onNext={handleNextFromReveal}
      isLastStep={isLastStep}
    />
  );
}


