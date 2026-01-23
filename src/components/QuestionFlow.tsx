"use client";

import { useMemo, useState, useEffect } from "react";
import { QuestionStep, questionSteps } from "../questions";
import { PredictScreen } from "./PredictScreen";
import { RevealScreen } from "./RevealScreen";
import { SummaryScreen } from "./SummaryScreen";
import { IntroScreen } from "./IntroScreen";

type Mode = "intro" | "predict" | "reveal" | "summary";
type TransitionDirection = "forward" | "backward";

export interface AnswerRecord {
  stepId: QuestionStep["id"];
  value: number;
}

export function QuestionFlow() {
  const [mode, setMode] = useState<Mode>(() => {
    // Check if first step has an intro
    const firstStep = questionSteps[0];
    return firstStep?.intro ? "intro" : "predict";
  });
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [transitionDirection, setTransitionDirection] = useState<TransitionDirection>("forward");
  const [isTransitioning, setIsTransitioning] = useState(false);

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
    setIsTransitioning(true);
    setTransitionDirection("forward");
    setAnswers((prev) => {
      const existingIndex = prev.findIndex((a) => a.stepId === currentStep.id);
      if (existingIndex >= 0) {
        const clone = [...prev];
        clone[existingIndex] = { stepId: currentStep.id, value };
        return clone;
      }
      return [...prev, { stepId: currentStep.id, value }];
    });
    
    // Small delay to allow exit animation
    setTimeout(() => {
      setMode("reveal");
      setIsTransitioning(false);
    }, 50);
  };

  const handleNextFromReveal = () => {
    if (isLastStep) {
      setIsTransitioning(true);
      setTransitionDirection("forward");
      setTimeout(() => {
        setMode("summary");
        setIsTransitioning(false);
      }, 50);
      return;
    }
    setIsTransitioning(true);
    setTransitionDirection("forward");
    setTimeout(() => {
      const nextIndex = stepIndex + 1;
      const nextStep = questionSteps[nextIndex];
      setStepIndex(nextIndex);
      // Check if next step has an intro
      setMode(nextStep?.intro ? "intro" : "predict");
      setIsTransitioning(false);
    }, 50);
  };

  const handleBeginFromIntro = () => {
    setIsTransitioning(true);
    setTransitionDirection("forward");
    setTimeout(() => {
      setMode("predict");
      setIsTransitioning(false);
    }, 50);
  };

  const handleRestart = () => {
    setAnswers([]);
    setStepIndex(0);
    const firstStep = questionSteps[0];
    setMode(firstStep?.intro ? "intro" : "predict");
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

  // Determine animation class based on transition direction
  const getAnimationClass = () => {
    if (transitionDirection === "forward") {
      return "slideFromRight";
    }
    return "slideFromLeft";
  };

  if (mode === "intro" && currentStep.intro) {
    return (
      <IntroScreen
        key={`intro-${stepIndex}`}
        title={currentStep.intro.title}
        subtitle={currentStep.intro.subtitle}
        ctaText={currentStep.intro.ctaText}
        onBegin={handleBeginFromIntro}
        animationClass={getAnimationClass()}
      />
    );
  }

  if (mode === "predict") {
    return (
      <PredictScreen
        key={`predict-${stepIndex}`}
        step={currentStep}
        onSubmit={handleAnswerSubmit}
        initialValue={currentAnswer?.value}
        animationClass={getAnimationClass()}
      />
    );
  }

  return (
    <RevealScreen
      key={`reveal-${stepIndex}`}
      step={currentStep}
      answerValue={currentAnswer?.value ?? 0}
      onNext={handleNextFromReveal}
      isLastStep={isLastStep}
      animationClass={getAnimationClass()}
    />
  );
}


